'use strict';

const Subject = require('../models/Subject.js');

const get = async (req, res, next) => {
  try {

  } catch (err) {
    if (err) return next(err);
  }
};

const post = async (req, res, next) => {
  try {
    const { name } = req.body;
    const subject = new Subject({ name });

    await subject.save();

    res.json(subject);
  } catch (err) {
    if (err) return next(err);
  }
};

module.exports.get = get;
module.exports.post = post;
