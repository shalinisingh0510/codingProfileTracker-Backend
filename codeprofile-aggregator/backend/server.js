require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./utils/db');

// Connect to database
connectDB();

const app = express();

// Middleware
const allowedOrigins = [
    'https://coding-profile-tracker-frontend.vercel.app',
    'http://localhost:5173'
];

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps, server-to-server)
        if (!origin) return callback(null, true);
        
        const isAllowed = allowedOrigins.includes(origin) || 
                          origin.endsWith('.vercel.app') ||
                          origin.startsWith('http://localhost:') ||
                          origin.startsWith('http://127.0.0.1:');
                          
        if (isAllowed) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('API Running');
});
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/codeforces', require('./routes/codeforcesRoutes'));
app.use('/api/leetcode', require('./routes/leetcodeRoutes'));
app.use('/api/gfg', require('./routes/gfgRoutes'));
app.use('/api/github', require('./routes/githubRoutes'));
app.use('/api/codechef', require('./routes/codechefRoutes'));
app.use('/api/hackerrank', require('./routes/hackerrankRoutes'));
app.use('/api/hackerearth', require('./routes/hackerearthRoutes'));
app.use('/api/dashboard', require('./routes/dashboardRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/resources', require('./routes/resourceRoutes'));
app.use('/api/ai', require('./routes/aiRoutes'));
app.use('/api/subscription', require('./routes/subscriptionRoutes'));

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: err.message || 'Internal Server Error',
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
