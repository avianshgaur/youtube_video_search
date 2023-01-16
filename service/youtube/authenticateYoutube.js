
const config = require("../../config/default");

const authenticateYoutube = (youtubeInstance) => {
    const available_keys = config.youtube_api_key_list;
    if(available_keys.length == 0){
        throw new Error("Atleast one auth key is required for fetching videos from youtube");
    }
    youtubeInstance.authenticate({
        type: 'key',
        key: config.youtube_api_key_list[0]
    });
}
module.exports=authenticateYoutube