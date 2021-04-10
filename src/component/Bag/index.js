import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Bag.css';

function Bag () {
  return (
    <div className="bag">
      <div className="bag__container">
        <div className="bag__headerLeft">
          <span className="las la-store-alt" />
          <div className="bag__headerLeft__fDC">
            <p className="bold">Target</p>
            <p className="grey">
              Cham Towers, Plot 12 Nkruma Rd, Kampala, Ug
            </p>
          </div>
        </div>
        <div className="bag__headerRight">
          <p className="mr-10 active">
            <a><span className="las la-shopping-bag" /></a>Bag
          </p>
          <p className="mr-10">
            <NavLink to="/account"><span className="las la-user" /></NavLink>
            {' '}
            Account
          </p>
        </div>
      </div>
      <div className="bag__body">
        <div className="bag__body__container">
          <span className="las la-frown" />
          <p>It's empty here</p>
          <p>Start shopping to add items to your bag</p>
          <p><Link to="/">Back to HomePage</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Bag;
