import axios from 'axios';

export const fetchImages = async () => {
  try {
    const response = await axios.get(
      'https://pixabay.com/api/?q=generic&key=36787252-5c3b11e3b9a6e8386f9bae3e3'
    );
    return response.data.hits;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const searchImages = async (searchTerm, pageNumber = 1) => {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        q: searchTerm,
        page: pageNumber,
        key: '37145039-d4ad8d6ab2b85cf5d231e1aa0',
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 20,
      },
    });
    return response.data.hits; // Return the fetched images
  } catch (error) {
    console.error(error);
    return []; // Return an empty array on error
  }
};
