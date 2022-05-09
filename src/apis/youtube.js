import axios from 'axios';

const KEY = 'AIzaSyAcd7S9Z7Mo5BkBuDArSLVePVId0kAYTbE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
