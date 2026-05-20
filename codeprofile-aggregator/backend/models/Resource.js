const mongoose = require('mongoose');

const resourceSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        unique: true,
        sparse: true
    },
    category: {
        type: String,
        required: true,
        enum: ['DSA', 'System Design', 'Backend', 'Frontend', 'Full stack', 'Cloud', 'Ci/cd', 'Misc', 'Resume', 'General'],
        default: 'General'
    },
    description: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        default: []
    },
    link: {
        type: String,
        default: ""
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
});

// Auto-generate slug from title before saving
resourceSchema.pre('save', async function () {
    if (this.isModified('title') || !this.slug) {
        let base = this.title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .substring(0, 80);
        
        let candidate = base;
        let counter = 1;
        
        // Check for collisions (skip self when updating)
        while (await mongoose.model('Resource').findOne({ slug: candidate, _id: { $ne: this._id } })) {
            candidate = `${base}-${counter}`;
            counter++;
        }
        this.slug = candidate;
    }
});

const Resource = mongoose.model('Resource', resourceSchema);
module.exports = Resource;
