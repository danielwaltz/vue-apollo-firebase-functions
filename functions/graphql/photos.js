const axios = require('axios');
const { photos } = require('./placeholder');

const getPhotos = async () => {
  const url = 'https://jsonplaceholder.typicode.com/photos';
  try {
    return await axios(url);
  } catch (e) {
    // Free tier cloud functions do not have access to the
    // outside internet so I have to fudge this for now. 😞
    return { data: photos || [] };
  }
};

const getPhoto = async id => {
  const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
  try {
    return await axios(url);
  } catch (e) {
    // Free tier cloud functions do not have access to the
    // outside internet so I have to fudge this for now. 😞
    const photo = photos.find(photo => photo.id === id);
    return { data: photo || {} };
  }
};

module.exports = { getPhotos, getPhoto };
