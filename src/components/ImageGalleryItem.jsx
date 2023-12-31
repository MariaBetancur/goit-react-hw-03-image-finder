import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItemStyled } from './StyledComponents/ImageGallery';
import { ImageGalleryItemImage } from './StyledComponents/ImageGallery';
import { ModalImage } from './Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { image } = this.props;
    const { isModalOpen } = this.state;

    return (
      <ImageGalleryItemStyled className="gallery-item">
        <ImageGalleryItemImage
          src={image.largeImageURL}
          alt={image.tags}
          onClick={this.openModal}
        />
        <ModalImage
          isOpen={isModalOpen}
          onRequestClose={this.closeModal}
          image={image}
        />
      </ImageGalleryItemStyled>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
};
