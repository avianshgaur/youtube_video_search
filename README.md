# Video Search API
This is a server-side application that continuously calls the YouTube API in the background, with an interval of 10 seconds, for fetching the latest videos for a predefined search query. The data of the videos is stored in a MongoDB database with proper indexes. The application also provides an API for searching, filtering, and sorting the stored videos.

## Prerequisites
Node.js (version 14 or higher) <br>
MongoDB (version 4.2 or higher) <br>
npm (version 6 or higher) <br>

## Installation
Clone the repository: git clone <repo_url> <br>
Navigate to the project directory: cd fampay-project <br>
Install the dependencies: npm install <br>
Create a .env file in the root of the project and set the following environment variables: <br>
YOUTUBE_API_KEY: Your YouTube API key <br>
SEARCH_QUERY: The search query to fetch videos for <br>
MONGO_URI: <The URL of your MongoDB instance>/fampay. E.g. mongodb://localhost:27017/fampay. fampay db should have a collectionw with name "videos". <br>

## Start the application:
npm start. This will start the application on port 3000. <br>
Running the server <br>

## API documentation
The API has the following endpoints: <br>

### GET /videos: 
  #### Returns the stored video data in a paginated response sorted in descending order of published datetime. <br>

#### Query parameters:
page: The page number (default: 1) <br>
per_page: The number of items per page (default: 10) <br>

### GET /videos/search: 
  #### Returns the stored videos that match the search query in either the video title or description. <br>

### Query parameters:
q: The search query <br>
page: The page number (default: 1) <br>
limit: The number of items per page (default: 10) <br>


## Dockerization
To build the image and run the application in a container, you can use the following commands: <br>
docker build -t <APP_NAME> <br>
docker run -p 3000:3000 -d --env-file .env <APP_NAME> <br>

