import React from 'react';
import { Link } from 'react-router-dom';

import useFormAndValidation from '../../hooks/useFormAndValidation';
import './Register.css';
import logo from '../../images/logo/main_logo.svg';

function Register({ onRegister }) {
  const { values, handleChange, errors, isValid, setValues, setIsValid } = useFormAndValidation({});

  React.useEffect(() => {
    setIsValid(false);
  }, [setIsValid]);

  function handleSubmit(e) {
    e.preventDefault();

    if (values.password) {
      const { name, email, password } = values;
      onRegister(name, email, password);
    }
    setValues({ name: '', email: '', password: '' });
  }

  return (
    <section className="sign">
      <div className="container">
        <Link to="/" className="main-logo">
          <img src={logo} alt="главный логотип" />
        </Link>

        <form className="sign__form" onSubmit={handleSubmit} noValidate>
          <h2 className="sign__title">Добро пожаловать!</h2>

          <div className="sign__input-wrapper">
            <label htmlFor="name" className="sign__label">
              Имя
            </label>
            <input
              type="name"
              name="name"
              id="name"
              className="sign__input"
              required
              minLength="2"
              maxLength="40"
              value={values.name || ''}
              onChange={handleChange}
            />
            <span className={`input__text-error ${isValid ? ' ' : `input__text-error_active`}`}>{errors.name}</span>
          </div>

          <div className="sign__input-wrapper">
            <label htmlFor="email" className="sign__label">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="sign__input"
              required
              minLength="2"
              maxLength="40"
              value={values.email || ''}
              onChange={handleChange}
            />
            <span className={`input__text-error ${isValid ? ' ' : `input__text-error_active`}`}>{errors.email}</span>
          </div>

          <div className="sign__input-wrapper">
            <label htmlFor="password" className="sign__label">
              Пароль
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="sign__input"
              required
              minLength="6"
              maxLength="40"
              value={values.password || ''}
              onChange={handleChange}
            />
            <span className={`input__text-error ${isValid ? ' ' : `input__text-error_active`}`}>{errors.password}</span>

            <span className="input__text-error input__text-error_api">Что-то пошло не так...</span>
          </div>

          <button type="submit" className={`sign__btn ${!isValid ? `sign__btn_disabled` : null}`} disabled={!isValid}>
            Зарегистрироваться
          </button>
        </form>

        <span className="sign__text">
          Уже зарегистрированы?&nbsp;
          <Link to="/signin" className="sign__linkSignIn">
            Войти
          </Link>
        </span>
      </div>
    </section>
  );
}

export default Register;
