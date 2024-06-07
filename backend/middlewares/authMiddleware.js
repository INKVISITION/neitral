// authMiddleware.js
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Получаем токен из заголовка запроса
  const token = req.headers.authorization;

  // Проверяем наличие токена
  if (!token) {
    return res.status(401).json({ error: 'Отсутствует токен аутентификации' });
  }

  try {
    // Проверяем и верифицируем токен
    const decodedToken = jwt.verify(token, 'secret');
    req.userId = decodedToken.userId;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Неверный токен аутентификации' });
  }
};

module.exports = authMiddleware;
