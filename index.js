const express = require('express');
const app = express();
const shortUrls = require('./routes/shorturlRoute');
const shortUrlModel = require('./models/shortUrlModel');

require('dotenv').config();
require('./database');

//ejs view set
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
  const shortUrls = await shortUrlModel.find();
  res.render('index', { shortUrls: shortUrls });
});

//routes
app.use('/shortUrls', shortUrls);

app.get('/:shorturl', async (req, res) => {
  try {
    const shorturl = await shortUrlModel.findOne({
      short: req.params.shorturl,
    });
    if (shorturl === null) return res.status(404).send('not found');

    shorturl.clicks++;
    shorturl.save();
    res.redirect(shorturl.full);
  } catch (err) {
    console.log(err);
    res.status(500).send('internal server error');
  }
});

app.listen(process.env.PORT, () => console.log('server is listening '));
