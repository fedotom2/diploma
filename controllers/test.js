'use strict';

const Test = require('../models/Test.js');

const get = async (req, res, next) => {
  try {
    res.json({ msg: 'Test text!' });
  } catch (err) {
    if (err) return next(err);
  }
};

const post = async (req, res, next) => {
  try {
    const { name } = req.body;

    const test = new Test({ name });

    await test.save();

    res.json(test);
  } catch (err) {
    if (err) return next(err);
  }
};

module.exports.get = get;
module.exports.post = post;
