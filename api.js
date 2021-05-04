'use strict';

const { Router } = require('express');
const router = Router();

router.get('/test', require('./controllers/test.js').get);
router.post('/test', require('./controllers/test.js').post);

module.exports = router;
