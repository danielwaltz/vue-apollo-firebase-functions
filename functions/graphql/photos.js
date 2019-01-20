const axios = require('axios');

const getPhotos = async () => {
  const url = 'https://jsonplaceholder.typicode.com/photos';
  try {
    return await axios(url);
  } catch (e) {
    return {};
  }
};

const getPhoto = async id => {
  const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
  try {
    return await axios(url);
  } catch (e) {
    return {};
  }
};

module.exports = { getPhotos, getPhoto };
