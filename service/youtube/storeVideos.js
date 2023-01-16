const Video = require("../../database/models/videos");
const getYoutubeClient = require("./getYoutubeClient");
const config = require("./../../config/default");

const fetchAndSaveVideos = async () => {
  const searchQuery = config.search_query_for_youtube_video;
  const youtubeClient =  await getYoutubeClient();
  youtubeClient.search.list(
    {
      part: "snippet",
      type: "video",
      order: Date,
      publishedAfter: new Date('2017-01-01'),
      q: searchQuery,
      maxResults: 50,
      
    },
    (err, data) => {
      if (err) {
        console.log(err);
        return;
      }

      data.data.items.forEach((video) => {
        const newVideo = new Video({
          title: video.snippet.title,
          description: video.snippet.description,
          publishedAt: video.snippet.publishedAt,
          thumbnails: video.snippet.thumbnails,
        });

        newVideo.save((err, video) => {
          if (err) {
            console.log(err);
          } else {
            console.log(`Saved video: ${video.title}`);
          }
        });
      });
    }
  );
};

const storeVideoInfo = () => {
  setInterval(fetchAndSaveVideos, 10000);
};
module.exports.storeVideoInfo = storeVideoInfo;
