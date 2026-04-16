require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./utils/db');

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('API Running');
});
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/codeforces', require('./routes/codeforcesRoutes'));
app.use('/api/leetcode', require('./routes/leetcodeRoutes'));
app.use('/api/gfg', require('./routes/gfgRoutes'));
app.use('/api/dashboard', require('./routes/dashboardRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
