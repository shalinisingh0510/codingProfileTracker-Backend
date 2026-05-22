const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const ExamGuideTopic = require('../models/ExamGuideTopic');

const MONGODB_URI = process.env.MONGO_URI;
const MD_PATH = '/Users/codethrust27/.gemini/antigravity/brain/5122064b-2cf7-4444-bbe8-1055527b73ce/scratch/tcs-nqt-repo/materials/coding-questions-50.md';
const FRONTEND_GUIDE_PATH = '/Users/codethrust27/Desktop/codingProfileTracker-frontend/src/data/examGuides.js';

const parseAndSeed = async () => {
  try {
    if (!MONGODB_URI) throw new Error('MONGO_URI is missing');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const content = fs.readFileSync(MD_PATH, 'utf-8');
    
    // Split by "## " which indicates a new question
    const chunks = content.split(/\r?\n## /).filter(c => c.trim().length > 0 && !c.startsWith('# 50 Coding Questions'));
    
    const topics = [];
    
    for (const chunk of chunks) {
      const lines = chunk.split(/\r?\n/);
      const headerLine = lines[0].trim();
      // Match something like "1. Check Even or Odd"
      const match = headerLine.match(/^\d+\.\s+(.*)$/);
      if (!match) continue;
      
      const title = match[1].trim();
      const topicSlug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      
      const rest = lines.slice(1).join('\n').trim();
      
      const contentMarkdown = `
## Problem Statement

Write a program to ${title}.

---

## Solutions

### Java
${rest}
`;

      topics.push({
        topicSlug,
        title,
        summary: `Coding question: ${title}`,
        contentMarkdown
      });
      
      // Upsert into DB
      await ExamGuideTopic.findOneAndUpdate(
        { examSlug: 'tcs-nqt', sectionSlug: 'coding-questions', topicSlug },
        { $set: { title, contentMarkdown, sources: [] } },
        { upsert: true, new: true }
      );
    }
    
    console.log(`Successfully seeded ${topics.length} coding questions to DB.`);
    
    // Now update examGuides.js in frontend
    let guideContent = fs.readFileSync(FRONTEND_GUIDE_PATH, 'utf-8');
    
    // Find the topics array for coding-questions
    // We can do this safely using a regex replacement
    const topicsJson = JSON.stringify(topics.map(t => ({
      topicSlug: t.topicSlug,
      title: t.title,
      summary: t.summary
    })), null, 8);
    
    // Replace the topics array inside coding-questions section
    const sectionRegex = /(id:\s*'coding-questions'[\s\S]*?topics:\s*)\[[\s\S]*?\]/;
    if (sectionRegex.test(guideContent)) {
      guideContent = guideContent.replace(sectionRegex, `$1${topicsJson.trim()}`);
      fs.writeFileSync(FRONTEND_GUIDE_PATH, guideContent);
      console.log('Updated examGuides.js with 50 coding topics.');
    } else {
      console.error('Could not find coding-questions section in examGuides.js');
    }
    
    process.exit(0);
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
};

parseAndSeed();
