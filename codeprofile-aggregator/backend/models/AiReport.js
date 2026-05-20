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
    }]
}, {
    timestamps: true
});

const AiReport = mongoose.model('AiReport', aiReportSchema);
module.exports = AiReport;
