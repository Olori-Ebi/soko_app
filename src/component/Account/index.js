import React from 'react';
import {NavLink} from 'react-router-dom';
import AccountHeader from '../AccountHeader/AccountHeader';
import './Account.css';

function Account () {
  return (
    <div className="account">
      <AccountHeader />
      <div className="account__container">
        <div className="account__containerLeft">
          <p className="active">
            <NavLink to="/account">
              <span className="las la-clipboard-list" /> My order
            </NavLink>
          </p>
          <p>
            <NavLink to="/address">
              <span className="las la-map-marker-alt" /> My addresses
            </NavLink>
          </p>
        </div>
        <div className="account__containerRight">
          <div className="account__containerRight__top">
            <p>Showing all orders</p>
            <button><span className="las la-filter" /> <p>filter</p></button>
          </div>
          <div className="account__lower__flex">
            <div className="account__containerRight__bottom">
              <div><span className="las la-bullseye" /><p> Target</p></div>
              <div className="account__details__flex">
                <small>Order #1233341</small>
                <small>UGX 12,700</small>
              </div>
              <div className="account__details__flex">
                <small>3 items</small>
                <small>25/02/2021, 01:55 PM</small>
              </div>
              <div><span /><small> Shipped</small></div>
            </div>
            <div className="account__containerRight__bottom">
              <div>
                <span className="las la-store-alt" /><p> Abhi's Juke Store</p>
              </div>
              <div className="account__details__flex">
                <small>Order #1213396</small>
                <small>UGX 5,400</small>
              </div>
              <div className="account__details__flex">
                <small>1 items</small>
                <small>26/02/2021, 01:55 PM</small>
              </div>
              <div><span /><small> Delivered</small></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
