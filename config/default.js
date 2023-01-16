require('dotenv').config();
module.exports = {
    mongo_uri:   process.env.MONGO_URI,
    port: 3000,
    youtube_api_key_list: process.env.YOUTUBE_API_KEY_LIST ? process.env.YOUTUBE_API_KEY_LIST.split(","): [],
    search_query_for_youtube_video: process.env.SEARCH_QUERY ? process.env.SEARCH_QUERY : "" 
}