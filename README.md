# Video Search API
This is a server-side application that continuously calls the YouTube API in the background, with an interval of 10 seconds, for fetching the latest videos for a predefined search query. The data of the videos is stored in a MongoDB database with proper indexes. The application also provides an API for searching, filtering, and sorting the stored videos.

##Prerequisites
Node.js (version 14 or higher)
MongoDB (version 4.2 or higher)
npm (version 6 or higher)

##Installation
Clone the repository: git clone <repo_url>
Navigate to the project directory: cd fampay-project
Install the dependencies: npm install
Create a .env file in the root of the project and set the following environment variables:
YOUTUBE_API_KEY: Your YouTube API key
SEARCH_QUERY: The search query to fetch videos for
MONGO_URI: <The URL of your MongoDB instance>/fampay. E.g. mongodb://localhost:27017/fampay. fampay db should have a collectionw with name "videos".

##Start the application:
npm start. This will start the application on port 3000.
Running the server

##API documentation
The API has the following endpoints:

###GET /videos: Returns the stored video data in a paginated response sorted in descending order of published datetime.

####Query parameters:
page: The page number (default: 1)
per_page: The number of items per page (default: 10)

###GET /videos/search: Returns the stored videos that match the search query in either the video title or description.

###Query parameters:
q: The search query
page: The page number (default: 1)
limit: The number of items per page (default: 10)


##Dockerization
To build the image and run the application in a container, you can use the following commands:
docker build -t <APP_NAME>
docker run -p 3000:3000 -d --env-file .env <APP_NAME>

