import React from 'react';
import { Link } from 'react-router-dom';

import useFormAndValidation from '../../hooks/useFormAndValidation';

import './Login.css';
import logo from '../../images/logo/main_logo.svg';

function Login({ onAuthoriz }) {
  const { values, handleChange, errors, isValid, setValues, setIsValid } = useFormAndValidation({});

  React.useEffect(() => {
    setIsValid(false);
  }, [setIsValid]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!values.email || !values.password) {
      return;
    }
    setValues({ email: '', password: '' });
    onAuthoriz(values.email, values.password);
  }

  return (
    <section className="sign">
      <div className="container">
        <Link to="/" className="main-logo">
          <img src={logo} alt="главный логотип" />
        </Link>

        <form className="sign__form" onSubmit={handleSubmit} noValidate>
          <h2 className="sign__title">Рады видеть!</h2>
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
            <span className="input__text-error">{errors.email}</span>
          </div>

          <div className="sign__input-wrapper">
            <label htmlFor="email" className="sign__label">
              Пароль
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className={`sign__input ${!isValid && `sign__input_password`}`}
              required
              minLength="6"
              maxLength="40"
              value={values.password || ''}
              onChange={handleChange}
            />
            <span className={`input__text-error ${!isValid && `input__text-error_active`}`}>{errors.password}</span>
          </div>

          <button type="submit" className={`sign__btn ${!isValid ? `sign__btn_disabled` : null}`} disabled={!isValid}>
            Войти
          </button>
          <span className="sign__text">
            Нет аккаунта?&nbsp;
            <Link to="/signup" className="sign__linkSignIn">
              Зарегистрироваться
            </Link>
          </span>
        </form>
      </div>
    </section>
  );
}

export default Login;
