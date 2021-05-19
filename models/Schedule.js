'use strict';

const { Schema, model, Types } = require('mongoose');
const { ObjectId } = Types;

const schema = new Schema({
  class: { type: ObjectId, required: true },
  day: { type: String },
  lesson: { type: Number },
  subject: { type: ObjectId }
});

module.exports = model('Schedule', schema);
