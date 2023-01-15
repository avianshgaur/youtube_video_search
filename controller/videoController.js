const  express = require('express');
const videos = require("./../database/models/videos")

const handleIncomingVideoInfoGetRequest = async (req, res) => {
        const page = req.query.page || 1;
        const limit = req.query.limit || 10;
        videos.find()
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
    }

module.exports = {
    handleIncomingVideoInfoGetRequest
}