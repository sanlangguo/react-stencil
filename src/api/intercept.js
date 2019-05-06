import axios from 'axios';

function JudgmentCurrentServerUrl(ENV) {
  let currentServerUrl = '';
  if (ENV === 'dev') {
    currentServerUrl = 'https://dev';
  } else if (ENV === 'exam') {
    currentServerUrl = 'https://exam';
  } else if (ENV === 'prod') {
    currentServerUrl = 'https://prod';
  }
  return currentServerUrl;
}

console.log(process.env.NODE_ENV, 'env')

const service = axios.create({
  baseURL: JudgmentCurrentServerUrl(process.env.NODE_ENV),
  headers: {
    'content-type': 'application/json;charset=UTF-8;application/x-www-form-urlencoded;'
  },
  timeout: 5000,
  withCredentials: false
});

// http response 拦截器
service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error === 'Request failed with status code 500') {
      return false;
    }
    return Promise.reject(error);
  }
);

export default service;