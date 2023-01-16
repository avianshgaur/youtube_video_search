const connectMongo = require("./configuration/mongoose_connection");
const express = require("express");
const { handleIncomingVideoInfoGetRequest } = require("./controller/videoController");
const { storeVideoInfo } = require("./service/youtube/storeVideos");
const videoRouter = require("./controller/videoController")
const app = express();
const config = require("./config/default");


app.use('/videos', videoRouter);

app.listen(config.port, async () => {
  await connectMongo();
  storeVideoInfo();
})
