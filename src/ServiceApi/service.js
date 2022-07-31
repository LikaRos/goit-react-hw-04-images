import axios from 'axios';
axios.defaults.baseURL = `https://pixabay.com/api/`;
const API_KEY = '28374254-5de68685754f9202717c426c0';
export const service = (page, query) => {
  console.log('query', query);
  return axios.get(`https://pixabay.com/api/`, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
      page: page,
    },
  });
};

// return axios.get(`https://pixabay.com/api/?key=${API_KEY}&page=${page}`);
