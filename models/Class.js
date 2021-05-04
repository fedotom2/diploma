'use strict';

const { Schema, model } = require('mongoose');

const schema = Schema({
  number: { type: Number, required: true },
  letter: { type: String, required: true }
});

module.exports = model('Class', schema);
