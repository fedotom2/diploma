'use strict';

const { Schema, model, Types } = require('mongoose');
const { ObjectId } = Types;

const schema = Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  patronymic: { type: String },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  avatar: { type: String },
  role: { type: ObjectId, required: true, default: '6093bcd387669f628ae883bf' },
  parents: { type: [ObjectId] },
  childrens: { type: [ObjectId] },
  class: { type: ObjectId },
  password: { type: String }
});

module.exports = model('User', schema);
