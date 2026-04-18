const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^[a-zA-Z0-9_]{3,20}$/, 'Username must be 3-20 chars, alphanumeric or underscores only']
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    leetcodeUsername: {
        type: String,
        default: ""
    },
    codeforcesHandle: {
        type: String,
        default: ""
    },
    gfgUsername: {
        type: String,
        default: ""
    },
    githubUsername: {
        type: String,
        default: ""
    },
    codechefUsername: {
        type: String,
        default: ""
    },
    hackerrankUsername: {
        type: String,
        default: ""
    },
    hackerearthUsername: {
        type: String,
        default: ""
    },
    profilePic: {
        type: String,
        default: ""
    },
    collegeName: {
        type: String,
        default: ""
    },
    skills: {
        type: [String],
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

// Method to compare entered password with hashed password in database
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// Pre-save middleware to hash password and set admin status
userSchema.pre('save', async function () {
    // Auto-generate username from email if not set
    if (!this.username && this.email) {
        let base = this.email.split('@')[0].replace(/[^a-zA-Z0-9_]/g, '_').substring(0, 20);
        if (base.length < 3) base = base + '_user';
        // Check for collisions
        let candidate = base;
        let counter = 1;
        while (await mongoose.model('User').findOne({ username: candidate, _id: { $ne: this._id } })) {
            candidate = `${base.substring(0, 16)}_${counter}`;
            counter++;
        }
        this.username = candidate;
    }

    // Automatically set isAdmin for specific admin email
    if (this.email === 'admin2722@gmail.com') {
        this.isAdmin = true;
    }

    if (!this.isModified('password')) {
        return;
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);
module.exports = User;
