const ExamGuideTopic = require('../models/ExamGuideTopic');

const normalizeSlug = (value) =>
  String(value || '')
    .trim()
    .toLowerCase();

// GET /api/exam-guides/:examSlug/sections/:sectionSlug/topics
const listTopics = async (req, res) => {
  try {
    const examSlug = normalizeSlug(req.params.examSlug);
    const sectionSlug = normalizeSlug(req.params.sectionSlug);

    const topics = await ExamGuideTopic.find({ examSlug, sectionSlug })
      .select('examSlug sectionSlug topicSlug title updatedAt createdAt')
      .sort({ title: 1 });

    res.json({ success: true, topics });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/exam-guides/:examSlug/sections/:sectionSlug/topics/:topicSlug
const getTopic = async (req, res) => {
  try {
    const examSlug = normalizeSlug(req.params.examSlug);
    const sectionSlug = normalizeSlug(req.params.sectionSlug);
    const topicSlug = normalizeSlug(req.params.topicSlug);

    const topic = await ExamGuideTopic.findOne({ examSlug, sectionSlug, topicSlug });
    if (!topic) {
      return res.status(404).json({ message: 'Topic not found' });
    }

    res.json({
      success: true,
      topic: {
        examSlug: topic.examSlug,
        sectionSlug: topic.sectionSlug,
        topicSlug: topic.topicSlug,
        title: topic.title,
        contentMarkdown: topic.contentMarkdown,
        sources: topic.sources || [],
        updatedAt: topic.updatedAt,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT /api/exam-guides/:examSlug/sections/:sectionSlug/topics/:topicSlug (Admin)
const upsertTopic = async (req, res) => {
  try {
    const examSlug = normalizeSlug(req.params.examSlug);
    const sectionSlug = normalizeSlug(req.params.sectionSlug);
    const topicSlug = normalizeSlug(req.params.topicSlug);

    const { title, contentMarkdown, sources } = req.body || {};

    if (!title || !String(title).trim()) {
      return res.status(400).json({ message: 'title is required' });
    }
    if (!contentMarkdown || !String(contentMarkdown).trim()) {
      return res.status(400).json({ message: 'contentMarkdown is required' });
    }

    const updated = await ExamGuideTopic.findOneAndUpdate(
      { examSlug, sectionSlug, topicSlug },
      {
        $set: {
          examSlug,
          sectionSlug,
          topicSlug,
          title: String(title).trim(),
          contentMarkdown: String(contentMarkdown),
          sources: Array.isArray(sources) ? sources : [],
          updatedBy: req.user?._id,
        },
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    res.json({
      success: true,
      topic: {
        examSlug: updated.examSlug,
        sectionSlug: updated.sectionSlug,
        topicSlug: updated.topicSlug,
        title: updated.title,
        updatedAt: updated.updatedAt,
      },
    });
  } catch (error) {
    if (String(error.message || '').includes('E11000')) {
      return res.status(409).json({ message: 'Topic already exists' });
    }
    res.status(500).json({ message: error.message });
  }
};

module.exports = { listTopics, getTopic, upsertTopic };

