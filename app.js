const connectMongo = require("./configuration/mongoose_connection");
const express = require("express");
const { handleIncomingVideoInfoGetRequest } = require("./controller/videoController");
const { storeVideoInfo } = require("./service/storeYoutubeVideo/storeVideos");
const searchVideoRouter = require("./service/searchVideo")
const app = express();



const main = async ()=>{
    app.listen(3000, () => {
        console.log('Server started on http://localhost:3000');
      });
    await connectMongo();
    //storeVideoInfo();

}
app.get('/videos', (req, res) => {
    handleIncomingVideoInfoGetRequest(req,res);
  })

app.use('/', searchVideoRouter);

main().then(()=>{
    console.log("Server started");
}
).catch((err) => {
    console.error(err);
});