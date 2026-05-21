const mongoose = require('mongoose');

const examGuideTopicSchema = mongoose.Schema(
  {
    examSlug: {
      type: String,
      required: true,
      index: true,
      trim: true,
      lowercase: true,
    },
    sectionSlug: {
      type: String,
      required: true,
      index: true,
      trim: true,
      lowercase: true,
    },
    topicSlug: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    contentMarkdown: {
      type: String,
      required: true,
      default: '',
    },
    sources: {
      type: [
        {
          label: { type: String, default: '' },
          url: { type: String, default: '' },
        },
      ],
      default: [],
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

examGuideTopicSchema.index(
  { examSlug: 1, sectionSlug: 1, topicSlug: 1 },
  { unique: true }
);

const ExamGuideTopic = mongoose.model('ExamGuideTopic', examGuideTopicSchema);
module.exports = ExamGuideTopic;

