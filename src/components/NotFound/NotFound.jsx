import React from 'react';
import { useNavigate } from 'react-router-dom';

import './NotFound.css';

function NotFound({ loggedIn }) {
  const navigate = useNavigate();
  function handleBack() {
    loggedIn ? navigate('/movies') : navigate('/');
  }
  return (
    <div className="notFound">
      <h2 className="notFound__title">404</h2>
      <span className="notFound__subtitle">Страница не найдена</span>

      <button className="notFound__btn" onClick={handleBack}>
        Назад
      </button>
    </div>
  );
}

export default NotFound;
