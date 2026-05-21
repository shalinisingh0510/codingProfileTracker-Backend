/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const connectDB = require('../utils/db');
const ExamGuideTopic = require('../models/ExamGuideTopic');

const readJson = (filePath) => JSON.parse(fs.readFileSync(filePath, 'utf8'));
const readText = (filePath) => fs.readFileSync(filePath, 'utf8');

const upsertTopic = async ({
  examSlug,
  sectionSlug,
  topicSlug,
  title,
  contentMarkdown,
  sources,
}) => {
  await ExamGuideTopic.findOneAndUpdate(
    { examSlug, sectionSlug, topicSlug },
    {
      $set: {
        examSlug,
        sectionSlug,
        topicSlug,
        title,
        contentMarkdown,
        sources: sources || [],
      },
    },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );
};

const main = async () => {
  const examSlug = 'tcs-nqt';
  const sectionSlug = 'aptitude';
  const baseDir = path.join(__dirname, '..', 'seed', 'exam-guides', examSlug, sectionSlug);
  const indexPath = path.join(baseDir, 'index.json');

  if (!fs.existsSync(indexPath)) {
    throw new Error(`Missing seed index: ${indexPath}`);
  }

  const entries = readJson(indexPath);
  await connectDB();

  for (const entry of entries) {
    const filePath = path.join(baseDir, entry.file);
    if (!fs.existsSync(filePath)) {
      console.warn(`Skipping missing file: ${filePath}`);
      continue;
    }

    await upsertTopic({
      examSlug,
      sectionSlug,
      topicSlug: entry.topicSlug,
      title: entry.title,
      contentMarkdown: readText(filePath),
      sources: [{ label: 'Seeded from backend repository', url: '' }],
    });

    console.log(`Seeded: ${examSlug}/${sectionSlug}/${entry.topicSlug}`);
  }

  console.log('Done.');
  process.exit(0);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

