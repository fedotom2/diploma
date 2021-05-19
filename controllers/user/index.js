'use strict';

const User = require('../../models/User.js');
const Role = require('../../models/Role.js');

const get = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: 'fedotom2@gmail.com' });

    if (user) 
      res.json(user);

  } catch (err) {
    if (err) return next(err);
  }
};

const post = async (req, res, next) => {
  try {
    const role = await Role.findOne({ role: 'user' });

    const { name, surname, email, phone, password } = req.body;

    const user = new User({ 
      name, 
      surname, 
      email, 
      phone, 
      password,
      role: role._id 
    });

    await user.save();

    res.json(user);
  } catch (err) {
    if (err) return next(err);
  }
};

module.exports.get = get;
module.exports.post = post;
