const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const registerRoutes = require('./routes/register');
const loginRoutes = require('./routes/login');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/register', registerRoutes);
app.use('/login', loginRoutes);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/UserData')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
