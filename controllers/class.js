'use strict';

const Class = require('../models/Class.js');

const get = async (req, res, next) => {
  try {

  } catch (err) {
    if (err) return next(err);
  }
};

const post = async (req, res, next) => {
  try {
    const { number, letter } = req.body;
    const className = Class({ number, letter });

    await className.save();

    res.json(className);
  } catch (err) {
    if (err) return next(err);
  }
};

module.exports.get = get;
module.exports.post = post;
