const express = require('express');

// importer les controllers
const mainController = require('./controllers/mainController');
const { validateBody } = require('./services/validator');
// const quizController = require('./controllers/quizController');
// const tagController = require('./controllers/tagController');
const router = express.Router();

// home page
router.get('/', mainController.homePage);

router.use('/404', mainController.notFound);

module.exports = router;