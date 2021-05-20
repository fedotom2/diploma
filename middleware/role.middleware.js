const User = require('../models/User.js');
const Role = require('../models/Role.js');

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }

  try {
    const { userId } = req.user;
    const userRole

  } catch (err) {
    res.status(401).json({ message: 'Недоступні дії' });
  }
};