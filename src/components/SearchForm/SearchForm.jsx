import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import './SearchForm.css';

function SearchForm({ onFiltredMovies, searchRequest }) {
  const [searchText, setSearchText] = React.useState('');
  const isChecked = JSON.parse(localStorage.getItem('filterCheckBox'));
  const [isShortMovieChecked, setIsShortMovieChecked] = React.useState(isChecked);

  React.useEffect(() => {
    if (searchRequest.searchText) {
      setSearchText(searchRequest.searchText);
    }
  }, [searchRequest.searchText]);

  function toggleCheckBox() {
    if (searchText !== '') {
      setIsShortMovieChecked(!isShortMovieChecked);

      onFiltredMovies({
        searchText,
        isShortMovieChecked: !isShortMovieChecked,
      });
    } else {
      setIsShortMovieChecked(!isShortMovieChecked);

      onFiltredMovies({
        searchText: searchRequest.searchText,
        isShortMovieChecked: !isShortMovieChecked,
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!searchText) {
      return;
    } else {
      onFiltredMovies({ searchText, isShortMovieChecked });
    }
  }

  function handleChange(event) {
    setSearchText(event.target.value);
  }

  return (
    <section className="search">
      <div className="container">
        <form className="search__wrapper" noValidate onSubmit={handleSubmit}>
          <input
            type="search"
            id="search"
            name="search"
            placeholder="Фильм"
            className="search__input"
            required
            value={searchText || ''}
            onChange={(e) => handleChange(e)}
          />
          <button type="submit" className={`search__btn ${!searchText && `search__btn_disabled`}`} disabled={!searchText} />

          <span className={`search__text-error ${!searchText && `search__text-error_active`}`}>Поле не должно быть пустым</span>
        </form>

        <FilterCheckbox isShortMovieChecked={searchRequest.isShortMovieChecked} filterShortMovies={toggleCheckBox} />
      </div>
    </section>
  );
}

export default SearchForm;
