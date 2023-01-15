
const express = require('express');
const router = express.Router();
const Videos = require('./../database/models/videos');

router.get('/search', (req, res) => {
  const query = req.query.q;
  const regexQuery = new RegExp(query, 'i');
  
  Videos.find({ $or: [ { title: regexQuery }, { description: regexQuery } ] }, (err, videos) => {
    if (err) {
      res.status(500).json({ message: 'An error occurred while searching for videos.' });
      return;
    }
    res.json(videos);
  });
});

module.exports = router;
