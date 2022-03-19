import axios from "axios";

// base url to make request to the movie database

const instance = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
});

export default instance;