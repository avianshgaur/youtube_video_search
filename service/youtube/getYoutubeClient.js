const youtube = require('youtube-api');
const authenticateYoutube = require('./authenticateYoutube');

let youtubeClient = null;

const getYoutubeClient = async ()=>{
    if(youtubeClient == null){
        authenticateYoutube(youtube);
        youtubeClient = youtube;
    }
    return youtubeClient;
}

module.exports=getYoutubeClient