import axios from 'axios';
import { CURRENT_USER } from '../Constants';

const fetcher = axios.create({
  baseURL: 'https://fiverrnew.cybersoft.edu.vn/api',
  headers: {
    // "Content-Type": "application/json",
    // "Accept": "application/json",
    tokenCybersoft:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MyIsIkhldEhhblN0cmluZyI6IjA1LzA1LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNDg2NzIwMDAwMCIsIm5iZiI6MTY4Njc2MjAwMCwiZXhwIjoxNzE1MDE0ODAwfQ.5ch0U3B88fGDn067ipN5mT-pHyAOZTzdwpBiwr4p5Aw'
  },
});


// Authorization
fetcher.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem(CURRENT_USER));
  // console.log(user.token);
  if (user) {
    config.headers["Authorization"] = user.token;
    // config.headers.Authorization = 'Bearer' + user.token;
  }
  // console.log(config);
  return config;
},
  // (error) => Promise.reject(error)
);

export default fetcher;
