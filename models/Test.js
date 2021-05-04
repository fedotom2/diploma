'use strict';

const { Schema, model } = require('mongoose');

const schema = Schema({
  name: { type: String, required: true, unique: true }
});

module.exports = model('Test', schema);
