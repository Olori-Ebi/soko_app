import React from 'react';
import {NavLink} from 'react-router-dom';
import './AccountSub.css';

function AccountSubheader () {
  return (
    <div className="accountsub">
      <div className="accountsub__container">
        <div className="accountsub__headerLeft">
          <span className="las la-store-alt" />
          <div className="accountsub__headerLeft__fDC">
            <p className="bold">Target</p>
            <p className="grey">
              Cham Towers, Plot 12 Nkruma Rd, Kampala, Ug
            </p>
          </div>
        </div>
        <div className="accountsub__headerRight">
          <NavLink to="/bag" className="active">
            <span className="las la-shopping-bag" /><span>2</span>
            <p>Bag</p>
          </NavLink>
          <NavLink to="/account">
            <span className="las la-user" />
            <p>Account</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default AccountSubheader;
