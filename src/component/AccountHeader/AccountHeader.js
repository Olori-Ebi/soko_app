import React from 'react';
import {NavLink} from 'react-router-dom';
import './AccountHeader.css';

function AccountHeader () {
  return (
    <div className="accountheader">
      <div className="accountheader__container">
        <div className="accountheader__headerLeft">
          <span className="las la-store-alt" />
          <div className="accountheader__headerLeft__fDC">
            <p className="bold">Target</p>
            <p className="grey">
              Cham Towers, Plot 12 Nkruma Rd, Kampala, Ug
            </p>
          </div>
        </div>
        <div className="accountheader__headerRight">
          <NavLink to="/bag">
            <span className="las la-shopping-bag" /><span>2</span>
            <p>Bag</p>
          </NavLink>
          <NavLink to="/account" className="active">
            <span className="las la-user" />
            <p>Account</p>
          </NavLink>
        </div>
      </div>
      <div className="accountheader__container">
        <p>+91-8080021387</p>
        <button>Log Out</button>
      </div>
    </div>
  );
}

export default AccountHeader;
