'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('config');
const path = require('path');
const api = require('./api.js');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use('/', api);

const start = async () => {
  try {
    await mongoose.connect(config.get('MONGO_URI'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });

    const PORT = config.get('PORT') || 8000;
    app.listen(PORT, () => console.log(`Listening on port ${ PORT }`));
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

start();
