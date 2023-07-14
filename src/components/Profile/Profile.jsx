import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import useFormAndValidation from '../../hooks/useFormAndValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './Profile.css';

function Profile({ onEditUserInfo, onEditProfileActive, isProfileEditActive, isResOk, onSignOut }) {
  const { values, handleChange, errors, isValid, setValues, setIsValid } = useFormAndValidation({});
  const { currentUser } = useContext(CurrentUserContext);

  React.useEffect(() => {
    if (currentUser) {
      setValues(currentUser);
      setIsValid(true);
    }
  }, [currentUser, setIsValid, setValues]);

  function handleSubmit(e) {
    e.preventDefault();

    onEditUserInfo(values);
  }

  return (
    <section className="profile">
      <div className="container">
        <h3 className="profile__title">{`Привет, ${currentUser.name}!`}</h3>
        <form className="profile__form" noValidate onSubmit={(e) => handleSubmit(e)}>
          <div className="profile__input-wrapper">
            <label htmlFor="name" className="profile__label">
              Имя
            </label>
            <input
              className="profile__input"
              name="name"
              id="name"
              type="text"
              placeholder="Введите имя"
              required
              minLength="2"
              maxLength="40"
              value={values.name || ''}
              onChange={handleChange}
              disabled={!isProfileEditActive}
            />

            <span className={`profile__input-textError ${!isValid && `profile__input-textError_active`}`}>{errors.name}</span>
          </div>

          <div className="line line_form"></div>

          <div className="profile__input-wrapper">
            <label htmlFor="email" className="profile__label">
              E-mail
            </label>
            <input
              className="profile__input"
              type="email"
              placeholder="Введите почту"
              name="email"
              id="email"
              required
              minLength="2"
              maxLength="40"
              value={values.email || ''}
              onChange={handleChange}
              disabled={!isProfileEditActive}
            />

            <span className={`profile__input-textError ${!isValid && `profile__input-textError_active`}`}>{errors.email}</span>
          </div>

          <span className={`profile__text-statusReq ${isResOk && `profile__text-statusReq_active`}`}>Данные профиля успешно обновлены</span>

          {isProfileEditActive ? (
            <button
              className={`profile__edit-save ${isProfileEditActive && `profile__edit-save_show`} ${
                !isValid && `profile__edit-save_disabled`
              }`}
              disabled={!isValid}
            >
              Сохранить
            </button>
          ) : (
            <>
              <button type="button" className="profile__edit" onClick={onEditProfileActive}>
                Редактировать
              </button>

              <Link className="profile__exit" onClick={onSignOut}>
                Выйти из аккаунта
              </Link>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

export default Profile;
