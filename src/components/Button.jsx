import React, { Component } from 'react';
import { ButtonLoadMoreStyled } from './StyledComponents/Button';
import PropTypes from 'prop-types';

export class ButtonLoadMore extends Component {
  render() {
    const { onLoadPics } = this.props;

    return (
      <ButtonLoadMoreStyled onClick={onLoadPics}>
        Load more
      </ButtonLoadMoreStyled>
    );
  }
}

ButtonLoadMore.propTypes = {
  onLoadPics: PropTypes.func.isRequired,
};
