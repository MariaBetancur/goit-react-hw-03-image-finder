import React, { Component } from 'react';
import { SearchbarStyled } from './StyledComponents/SearchBar';
import { SearchFormStyled } from './StyledComponents/SearchBar';
import { SearchFormButtonStyled } from './StyledComponents/SearchBar';
import { SearchFormButtonLabel } from './StyledComponents/SearchBar';
import { SearchForInput } from './StyledComponents/SearchBar';
import PropTypes from 'prop-types';

export class Searcher extends Component {
  handleChangeImageName = e => {
    e.preventDefault();
    const { value } = e.target;
    this.props.onChangeImageName(value);
  };
  render() {
    const { onSubmit, imageName } = this.props;

    return (
      <SearchbarStyled className="searchbar">
        <SearchFormStyled className="form" onSubmit={onSubmit}>
          <SearchFormButtonStyled type="submit" className="button">
            <SearchFormButtonLabel className="button-label">
              Search
            </SearchFormButtonLabel>
          </SearchFormButtonStyled>

          <SearchForInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={imageName}
            onChange={this.handleChangeImageName}
          />
        </SearchFormStyled>
      </SearchbarStyled>
    );
  }
}

Searcher.propTypes = {
  onChangeImageName: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  imageName: PropTypes.string.isRequired,
};
