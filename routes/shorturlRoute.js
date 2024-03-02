const express = require('express');
const router = express.Router();
const shortUrlModel = require('../models/shortUrlModel');

router.post('/', async (req, res) => {
  try {
    await shortUrlModel.create({ full: req.body.fullUrl });
    res.redirect('/');
  } catch (error) {
    res.status(500).send('internal server error');
  }
});

module.exports = router;
