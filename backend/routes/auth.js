const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const router = express.Router();

// Register route
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'Пользователь с таким именем уже существует' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'Пользователь зарегистрирован' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: 'Неверное имя пользователя или пароль' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Неверное имя пользователя или пароль' });
    }

    res.status(200).json({ message: 'Авторизация успешна' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

module.exports = router;
