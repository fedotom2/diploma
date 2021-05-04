'use strict';

const { Schema, model } = require('mongoose');

const schema = Schema({
  role: { type: String, required: true, unique: true }
});

module.exports = model('Role', schema);
