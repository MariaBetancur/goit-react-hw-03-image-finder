import React, { Component } from 'react';
// import { fetchImages } from './Api/api';
import { Searcher } from './SearchBar';
import { ImageGallery } from './ImageGallery';
import { searchImages } from './Api/api';
import { ButtonLoadMore } from './Button';
import { Load } from './Loader';

export class App extends Component {
  state = {
    allImages: [],
    images: [],
    loading: true,
    error: null,
    imageName: '',
    pageNumber: 1,
    loadingMore: false,
  };

  handleChangeImageName2 = searchValue => {
    this.setState({ imageName: searchValue });
  };
  onSubmit = async e => {
    e.preventDefault();
    const { imageName, pageNumber } = this.state;

    console.log(imageName);

    const newImages = await searchImages(imageName, pageNumber);

    this.setState(prevState => ({
      allImages: [...prevState.allImages, ...newImages],
      images: newImages,
    }));
  };

  LoadMorePics = async e => {
    e.preventDefault();
    const { imageName, pageNumber } = this.state;
    const nextPageNumber = pageNumber + 1;

    this.setState({ loadingMore: true });

    const newImages = await searchImages(imageName, nextPageNumber);

    this.setState(prevState => ({
      allImages: [...prevState.allImages, ...newImages],
      images: newImages,
      pageNumber: prevState.pageNumber + 1,
      loadingMore: false,
    }));
  };

  loader = spinner => {
    const { loading, error } = this.state;

    if (loading) {
      return spinner;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return null;
  };

  render() {
    const { allImages, imageName } = this.state;
    return (
      <div>
        <Searcher
          imageName={imageName}
          onChangeImageName={this.handleChangeImageName2}
          onSubmit={this.onSubmit}
        />

        <ImageGallery images={allImages} />

        <ButtonLoadMore onLoadPics={this.LoadMorePics} />

        <Load onLoader={this.loader} loadingMore={this.state.loadingMore} />
      </div>
    );
  }
}

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
