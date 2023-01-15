const youtube = require('youtube-api');
const Video = require("../../database/models/videos");

youtube.authenticate({
    type: 'key',
    key: 'AIzaSyBaLRhIHcmnRd4C-pJ40sliD0d5GdkdMb4'
  });
  
  const query = 'cricket';
  
  const fetchVideos = () => {
    youtube.search.list({
      part: 'snippet',
      type: 'video',
      q: query,
      maxResults: 50
    }, (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
  
      data.data.items.forEach(video => {
        const newVideo = new Video({
          title: video.snippet.title,
          description: video.snippet.description,
          publishedAt: video.snippet.publishedAt,
          thumbnails: video.snippet.thumbnails
        });
  
        newVideo.save((err, video) => {
          if (err) {
            console.log(err);
          } else {
            console.log(`Saved video: ${video.title}`);
          }
        });
      });
    });
  };
  
 const storeVideoInfo = ()=>{
    setInterval(fetchVideos, 10000);
 }
 module.exports.storeVideoInfo = storeVideoInfo;