import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../images/4 (1).jpg'
import img2 from '../../images/2 (1).jpg'
import './Track.css';

function TrackOrder () {
  return (
    <>
      <div className="track">
        <div className="track__container">
          <div className="track__headerLeft">
            <span className="las la-store-alt" />
            <div className="track__headerLeft__fDC">
              <p className="bold">Target</p>
              <p className="grey">
                Cham Towers, Plot 12 Nkruma Rd, Kampala, Ug
              </p>
            </div>
          </div>
          <div className="track__headerRight">
            <NavLink to="/bag">
              <span className="las la-shopping-bag" /><span>2</span>
              <p>Bag</p>
            </NavLink>
            <NavLink to="/account">
              <span className="las la-user" />
              <p>Account</p>
            </NavLink>
          </div>
        </div>
      
        <div className="track__container">
          <NavLink to="/">
            <span className="las la-angle-left" />
            <p>Order #1233341</p>
          </NavLink>
        </div>
      </div>
      <div className="track__wrapper">
        <div className="track__card__container">
          <div className="track__item__container">
            <span className="las la-bullseye"></span>
            <div className="item__column__right">
              <p>Target</p>
              <small>12/04/2021, 01:55PM | 3 items | UGX 15,400</small>
            </div>
          </div>
          <div className="track__item__wrapper">
          <div className="track__item__container2">
            <span className="las la-check"></span>
            <div className="item__column__right">
              <p>Order Confirmed</p>
              <small>12/04/2021, 01:55PM</small>
            </div>
          </div>
          <div className="track__item__container2">
            <span className="las la-check"></span>
            <div className="item__column__right">
              <p>Shipped</p>
              <small>15/04/2021, 09:55AM</small>
            </div>
          </div>
          </div>
          <div className="track__item__container3">
            <span className="las la-check"></span>
            <div className="item__column__right">
              <p>Delivered</p>
              <small>The delivery partner is on his way to deliver your order</small>
            </div>
          </div>
          <div className="track__items__detail__container">
              <small>3 ITEMS</small>
              <div className="track__image__container">
                <img src={img} alt="images" />
                <div className="track__container__column">
                  <p>Unisex Breathable Sport Sneakers</p>
                  <div>
                    <div className="track__right__container">
                      <div className="track__left">
                        <small>Size:</small>
                        <p>Medium</p>
                      </div>
                      <div className="track__right">
                        <small>Color:</small>
                        <p className="white"></p>
                      </div>
                    </div>
                  </div>
                  <div className="track__lower">
                    <p>X2</p>
                    <small>UGX 15,000</small>
                  </div>
                </div>
              </div>
          </div>
          <div className="track__items__detail__container">
            <div className="track__image__container">
              <img src={img} alt="images" />
              <div className="track__container__column">
                <p>Fingerprint Touch Bluetooth</p>
                <div>
                  <div className="track__right__container">
                    <div className="track__left">
                      <small>Size:</small>
                      <p>Medium</p>
                    </div>
                    <div className="track__right">
                      <small>Color:</small>
                      <p></p>
                    </div>
                  </div>
                </div>
                <div className="track__lower">
                  <p>X1</p>
                  <small>UGX 8,000</small>
                </div>
              </div>
            </div>
          </div>
          <div className="track__main">
            <p>Subtotal</p>
            <p>UGX 12,000</p>
          </div>
          <div className="track__main">
            <p>Delivery</p>
            <p className="green">Free</p>
          </div>
          <div className="dotted__line"></div>
          <div className="bolded__flex">
            <p>Total</p>
            <p>UGX 14,900</p>
          </div>
          <small className="small">inclusive of taxes</small>
          <div className="dotted__line2"></div>
          <p className="green">You are about to save UGX 17,000 on the order</p>
          <div className="solid__line"></div>
          <h4>YOUR DELIVERY DETAILS</h4>
          <p>Shrey Karah</p>
          <p>Cash on delivery</p>
          <p>+256 76 633 4574</p>
          <p>Cham Towers, Plot 12 Nkruma Rd</p>
          <p>Kampala, Uganda</p>
        </div>
      </div>
    </>
  );
}

export default TrackOrder;
