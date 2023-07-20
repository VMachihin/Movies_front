import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ isShortMovieChecked, filterShortMovies }) {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        className="checkbox__filter"
        id="checkbox__filter"
        name="search__filter"
        onChange={filterShortMovies}
        checked={isShortMovieChecked || ''}
      />
      <label htmlFor="checkbox__filter" className="checkbox__label" />
      <span className="checkbox__text">Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;
