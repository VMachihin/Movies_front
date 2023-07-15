import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';

import Register from '../Register/Register';
import Login from '../Login/Login';

import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { register, authorization, checkToken } from '../../utils/Auth';
import { getUserInfo, editingProfile } from '../../utils/MainApi';
import { getAllMovies, getSavedMovies, saveMovie, deleteMovie } from '../../utils/MoviesApi';

import ProtectedRouteElement from '../../utils/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const showHeader =
    location.pathname === '/' ||
    location.pathname === '/movies' ||
    location.pathname === '/saved-movies' ||
    location.pathname === '/profile';

  const showFooter = location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies';

  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setloggedIn] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isResOk, setIsResOk] = React.useState(false);
  const [isProfileEditActive, setIsProfileEditActive] = React.useState(false);

  // Регистрация
  function handleRegister(name, email, password) {
    register(name, email, password)
      .then((res) => {
        navigate('/movies', { replace: true });
      })
      .catch(console.error);
  }

  // Авторизация
  function handleAutorization(email, password) {
    authorization(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          setloggedIn(true);
          navigate('/movies', { replace: true });
        }
      })
      .catch(console.error);
  }

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      checkToken(jwt)
        .then((res) => {
          if (res) {
            setloggedIn(true);

            navigate(location.pathname);
          }
        })
        .catch(console.error);
    }
  }, []);

  React.useEffect(() => {
    loggedIn &&
      Promise.all([getUserInfo(), getSavedMovies()])
        .then(([userData, savedMoviesData]) => {
          setCurrentUser(userData);
          setSavedMovies(savedMoviesData);
          localStorage.setItem('savedMovies', JSON.stringify(savedMoviesData));
        })
        .catch(console.error);

    loggedIn &&
      getAllMovies().then((moviesData) => {
        setMovies(moviesData);
      });
  }, [loggedIn]);

  useEffect(() => {
    loggedIn && localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
  }, [savedMovies, loggedIn]);

  function handleEditUserInfo(newUserData) {
    editingProfile(newUserData)
      .then((userData) => {
        setCurrentUser(userData);
        setIsResOk(true);
        setIsProfileEditActive(false);
      })
      .catch((err) => {
        setIsResOk(false);
        console.err(err);
      });
  }

  function handleEditProfileActive() {
    setIsProfileEditActive(true);
  }

  function handleSaveMovies(movie, isSave, savedMovie) {
    if (isSave) {
      handleDeleteMovie(savedMovie._id);
    } else {
      saveMovie(movie)
        .then((res) => {
          setSavedMovies([res, ...savedMovies]);
        })
        .catch(console.error);
    }
  }

  function handleDeleteMovie(id) {
    let newSavedMovies;
    deleteMovie(id)
      .then((res) => {
        newSavedMovies = savedMovies.filter((movie) => movie._id !== id);
        setSavedMovies(newSavedMovies);
        localStorage.setItem('foundSaveMovies', JSON.stringify(newSavedMovies));
      })
      .catch(console.error);
  }

  function handleSignOut() {
    setloggedIn(false);
    // localStorage.removeItem('jwt');
    localStorage.clear();
  }

  return (
    <>
      <CurrentUserContext.Provider value={{ currentUser }}>
        {showHeader ? <Header loggedIn={loggedIn} /> : null}

        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/movies"
              element={
                <ProtectedRouteElement
                  loggedIn={loggedIn}
                  element={Movies}
                  movies={movies}
                  savedMovies={savedMovies}
                  onSaveMovie={handleSaveMovies}
                  onDeleteMovie={handleDeleteMovie}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRouteElement
                  loggedIn={loggedIn}
                  element={SavedMovies}
                  savedMovies={savedMovies}
                  onDeleteMovie={handleDeleteMovie}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRouteElement
                  loggedIn={loggedIn}
                  element={Profile}
                  onEditUserInfo={handleEditUserInfo}
                  onEditProfileActive={handleEditProfileActive}
                  isProfileEditActive={isProfileEditActive}
                  isResOk={isResOk}
                  onSignOut={handleSignOut}
                />
              }
            />

            <Route path="/signup" element={<Register onRegister={handleRegister} />} />
            <Route path="/signin" element={<Login onAuthoriz={handleAutorization} />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {showFooter ? <Footer /> : null}
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
