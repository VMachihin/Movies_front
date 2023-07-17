import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.css';

function NotFound() {
  return (
    <div className="notFound">
      <h2 className="notFound__title">404</h2>
      <span className="notFound__subtitle">Страница не найдена</span>

      <Link to="/signin" className="notFound__link">
        Назад
      </Link>
    </div>
  );
}

export default NotFound;
