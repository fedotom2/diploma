'use strict';

const Schedule = require('../models/Schedule.js');

const get = async (req, res, next) => {
  try {

  } catch (err) {
    if (err) return next(err);
  }
};

const post = async (req, res, next) => {
  try {
    const { className, day, lesson, subject } = req.body;
    const schedule = new Schedule({ class: className, day, lesson, subject });

    await schedule.save();

    res.json(schedule);

  } catch (err) {
    if (err) return next(err);
  }
};

module.exports.get = get;
module.exports.post = post;
