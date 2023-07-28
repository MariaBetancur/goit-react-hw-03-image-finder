// import axios from 'axios';

// export const searchImages = async (searchTerm, setState, pageNumber = 1) => {
//   try {
//     const response = await axios.get('https://pixabay.com/api/', {
//       params: {
//         q: searchTerm,
//         page: pageNumber,
//         key: '37145039-d4ad8d6ab2b85cf5d231e1aa0',
//         image_type: 'photo',
//         orientation: 'horizontal',
//         per_page: 20,
//       },
//     });
//     const images = response.data.hits;
//     setState({ images });
//   } catch (error) {
//     console.error(error);
//   }
// };
