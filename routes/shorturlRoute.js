const express = require('express');
const router = express.Router();
const shortUrlModel = require('../models/shortUrlModel');

router.post('/', async (req, res) => {
  try {
    await shortUrlModel.create({ full: req.body.fullUrl });
    res.redirect('/');
  } catch (error) {}
});

module.exports = router;
