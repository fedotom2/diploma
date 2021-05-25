'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('config');
const path = require('path');

const app = express();

app.use(express.json({ extended: true }));

app.use('/api/auth', require('./routes/auth.routes.js'));
app.use('/api/profile', require('./routes/profile.routes.js'));
app.use('/api/users', require('./routes/users.routes.js'));

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

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
