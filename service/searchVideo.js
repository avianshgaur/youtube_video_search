
const express = require('express');
const router = express.Router();
const Videos = require('./../database/models/videos');

router.get('/search', async (req, res) => {
  const query = req.query.q;
  const page = req.query.page || 1;
  const limit =  req.query.limit || 1;
  const regexQuery = new RegExp(query, 'i');
  Videos.find({ $or: [ { title: regexQuery }, { description: regexQuery } ] })
          .sort({ publishedAt: -1 })
          .skip((page - 1) * limit)
          .limit(limit)
          .exec((err, videos) => {
            if (err) {
              res.status(500).send(err);
              return;
            }
            res.json(videos);
          });
});

module.exports = router;
