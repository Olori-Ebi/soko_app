import React from 'react';
import { NavLink } from 'react-router-dom';
import './PlaceOrder.css'
import celebrate from '../../images/celebrate.jpg'
import AccountSubheader from '../AccountSubHeader/AccountSubheader';

function PlaceOrder () {
  return (
    <>
      <AccountSubheader />
      <div className="place__grid__container">
        <img src={celebrate} />
        <p>Thank You!</p>
        <p>Your order has been placed successfully </p>
        <small>You will receive a confirmation as soon as the order is accepted</small>
        <small>Order Number: <span>John 27fe</span> </small>
        <div>
          <NavLink to="/trackorder"> <button className="border__blue">Track Order</button></NavLink>
          <NavLink to="/"> <button>Continue Shopping</button></NavLink>
        </div>
      </div>
    </>
  );
}

export default PlaceOrder;
