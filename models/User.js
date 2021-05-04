'use strict';

const { Schema, model, Types } = require('mongoose');
const { ObjectID } = Types;

const schema = Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  patronymic: { type: String },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  avatar: { type: String },
  role: { type: ObjectID, required: true },
  parents: { type: [ObjectID] },
  childrens: { type: [ObjectID] },
  class: { type: ObjectID },
  password: { type: String }
});

module.exports = model('User', schema);
