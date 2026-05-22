const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const mongoose = require('mongoose');
const ExamGuideTopic = require('../models/ExamGuideTopic');

const part1 = require('./reasoningTopicsDataPart1');
const part2 = require('./reasoningTopicsDataPart2');

const topicsData = [...part1, ...part2];

const MONGODB_URI = process.env.MONGO_URI;

const seedReasoningTopics = async () => {
  try {
    if (!MONGODB_URI) {
      console.error('No MONGO_URI found in environment variables. Path: ' + path.resolve(__dirname, '../.env'));
      process.exit(1);
    }
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    let count = 0;
    for (const topicData of topicsData) {
      const { examSlug, sectionSlug, topicSlug, title, contentMarkdown } = topicData;
      
      await ExamGuideTopic.findOneAndUpdate(
        { examSlug, sectionSlug, topicSlug },
        {
          $set: {
            title,
            contentMarkdown,
            sources: []
          }
        },
        { upsert: true, new: true }
      );
      count++;
      console.log('Upserted ' + topicSlug);
    }

    console.log('Successfully seeded ' + count + ' reasoning topics.');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding reasoning topics:', error);
    process.exit(1);
  }
};

seedReasoningTopics();
