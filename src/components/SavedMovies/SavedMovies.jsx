import React from 'react';

import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import { SHORT_MOVIE_DURATION } from '../../utils/constants.js';

function SavedMovies({ savedMovies, onDeleteMovie }) {
  const [filtredMovies, setFiltredMovies] = React.useState([]);
  const [searchRequest, setSearchRequest] = React.useState({ searchText: '', isShortMovieChecked: false });
  const foundSaveMovies = localStorage.getItem('foundSaveMovies');
  const reqSaveMovies = localStorage.getItem('reqSaveMovies');

  React.useEffect(() => {
    if (foundSaveMovies) {
      setFiltredMovies(JSON.parse(foundSaveMovies));
    } else {
      setFiltredMovies(savedMovies);
    }
  }, [foundSaveMovies]);

  React.useEffect(() => {
    if (reqSaveMovies) {
      setSearchRequest(JSON.parse(reqSaveMovies));
    }
  }, [reqSaveMovies]);

  function handleFiltredMovies(stateSearchAndCkeckbox) {
    let arrFiltredMovies = [];

    localStorage.setItem('reqSaveMovies', JSON.stringify(stateSearchAndCkeckbox));

    if (stateSearchAndCkeckbox.isShortMovieChecked) {
      arrFiltredMovies = savedMovies.filter(
        (item) =>
          item.duration <= SHORT_MOVIE_DURATION && item.nameRU.toLowerCase().includes(stateSearchAndCkeckbox.searchText.toLowerCase())
      );

      setFiltredMovies(arrFiltredMovies);
      localStorage.setItem('foundSaveMovies', JSON.stringify(arrFiltredMovies));
    } else if (!stateSearchAndCkeckbox.isShortMovieChecked) {
      arrFiltredMovies = savedMovies.filter((item) => item.nameRU.toLowerCase().includes(stateSearchAndCkeckbox.searchText.toLowerCase()));

      setFiltredMovies(arrFiltredMovies);
      localStorage.setItem('foundSaveMovies', JSON.stringify(arrFiltredMovies));
    }
  }

  return (
    <>
      <SearchForm onFiltredMovies={handleFiltredMovies} searchRequest={searchRequest} />
      {filtredMovies.length ? (
        <MoviesCardList movies={filtredMovies} onDeleteMovie={onDeleteMovie} />
      ) : (
        searchRequest && (
          <p className="movies__not-found" style={{ textAlign: 'center' }}>
            Ничего не найдено
          </p>
        )
      )}
    </>
  );
}

export default SavedMovies;
