const connectMongo = require("./configuration/mongoose_connection");
const express = require("express");
const { handleIncomingVideoInfoGetRequest } = require("./controller/videoController");
const { storeVideoInfo } = require("./service/storeYoutubeVideo/storeVideos");
const app = express();


const main = async ()=>{
    app.listen(3000, () => {
        console.log('Server started on http://localhost:3000');
      });
    //connect mongo
    console.log(process.env.MONGO_URI);
    await connectMongo();
    storeVideoInfo();

}
app.get('/videos', (req, res) => {
    handleIncomingVideoInfoGetRequest(req,res);
  })

main().then(()=>{
    console.log("Server started");
}
).catch((err) => {
    console.error(err);
});