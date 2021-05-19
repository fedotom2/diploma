'use strict';

const User = require('../../models/User.js');

const get = async (req, res, next) => {
  try {

  } catch (err) {
    if (err) return next(err);
  }
};

const post = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && user.password === password) {
      res.json(user);
    } else {
      res.json({ msg: 'User is not exists!' });
    }

  } catch (err) {
    if (err) return next(err);
  }
};

module.exports.get = get;
module.exports.post = post;
