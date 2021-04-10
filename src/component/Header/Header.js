import React from 'react';
import './Header.css';

function Header () {
  return (
    <div className="header">
      <div className="header__container">
        <p className="header__text">
          Store made with S<i className="las la-shopping-bag" />KO
        </p>
      </div>
    </div>
  );
}

export default Header;
