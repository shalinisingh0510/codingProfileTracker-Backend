const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
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

// Pre-save middleware to hash password before saving to database
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);
module.exports = User;
