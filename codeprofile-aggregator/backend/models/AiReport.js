const mongoose = require('mongoose');

const aiReportSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    report: {
        type: String,
        required: true
    },
    recommendations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Resource'
    }],
    recommendationVersion: {
        type: Number,
        default: 0
    },
    recommendationDetails: [{
        resourceId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Resource'
        },
        resourceKey: {
            type: String,
            default: ''
        },
        focusArea: {
            type: String,
            default: ''
        },
        matchedTags: {
            type: [String],
            default: []
        },
        reason: {
            type: String,
            default: ''
        },
        score: {
            type: Number,
            default: 0
        }
    }]
}, {
    timestamps: true
});

const AiReport = mongoose.model('AiReport', aiReportSchema);
module.exports = AiReport;
