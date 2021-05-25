const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }

  try {
    if (req.user.role !== 'admin') {
      res.status(401).json({ message: 'Немає доступу до інформаці' });
    }
    
    next();
  } catch (err) {
    res.status(401).json({ message: 'Немає доступу до інформації' });
  }
};