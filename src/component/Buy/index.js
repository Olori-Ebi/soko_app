import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import AccountSubheader from '../AccountSubHeader/AccountSubheader';
import AddressModal from '../Modal/AddressModal';
import VerifyModal from '../VerifyModal/VerifyModal';
import './Buy.css';

function Buy () {
  const [modal, setModal] = useState(false);
  const [modal_, setModal_] = useState(false);
  const [number, setNumber] = useState('');
  const [numbers, setNumbers] = useState ({});
  const [verified, setVerified] = useState (false);
  const [cardState, setCardState] = useState(0)
  const [clicked, setClicked] = useState (false);
  const [count, setCount] = useState(1)
  const [count1, setCount1] = useState(1)

  const increaseCount = () => {
    setCount(count+1)
  }
  const increaseCount1 = () => {
    setCount1 (count1+1)
  }

  const reduceCount = () => {
    count <= 1 ? setCount(1) : setCount(count-1)
  }
  const reduceCount1 = () => {
    count1 <= 1 ? setCount1(1) : setCount1(count1-1)
  }

  const handleClicked = () => {
    setClicked(true)
    setCardState(cardState + 1)
  }

  console.log(cardState)

  const handleSubmit = e => {
    const fieldsValid =
      numbers?.num1 && numbers?.num2 && numbers?.num3 && numbers?.num4;

    if (fieldsValid) {
      setVerified (true);
      setModal(false)
    } else {
      setVerified(false)
    }
  };

  const handleChange = e => {
    setNumbers ({...numbers, [e.target.name]: e.target.value});
  };

  const handleModal = () => {
    return number.length < 10 ? null : setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }

  const handleModal2 = () => {
    setModal_(true)
  }

  const closeModal2 = () => {
    setModal_(false)
  }
  
  return (
    <>
    <AccountSubheader />
    <div className="buy__grid__wrapper">
        <div className="buy__grid">
          <div className="buy__grid__left">
            <div className="buy__width">
            <div className="buy__relative">
              <div className="buy__count">
                { verified? <p className="las la-check"></p> : <p>1</p> }
                <div className={verified ? 'buy__line__verified' : 'buy__line__unverified'}></div>
              </div>
              <div className="buy__details">
                <h3>Account</h3>
                <div className={verified ? 'dnone': 'dblock'}>
                <p className="mb-20">To place your order, log in by entering your 10 digit mobile number.</p>
                <small>Mobile Number</small>
                <div>
                  <div className="buy__inputField">
                    <p>+256</p>
                    <input type="number" value={number} onChange={(e) => {
                      setNumber(e.target.value)
                    }} placeholder="Enter mobile number" />
                  </div>
                  <button onClick={handleModal}>Login</button>
                </div>
                </div>
                <p className={verified ? 'dblock left': 'dnone'}>You are securely logged in</p>
              </div>
            </div>
            <div className="buy__relative">
              <div className={verified ?"complete__count" :"buy__count"}>
                {clicked ? (<p className="las la-check"></p>) : <p>2</p>}
              </div>
              <div className={(verified && cardState===0) ? "address__line__verified dnone":"address__line__unverified"}>
                </div>
              {verified && cardState < 2 && (
                <div className={(verified && cardState < 2) ? "address__line__verified":"address__line__unverified"}>
                </div>
              )}
              
              {verified && cardState === 2 && (
                <div className={(verified && cardState===2) ? "address__line__verified__ clicked":"address__line__unverified"}>
                </div>
              )}
              
              <div className="buy__details">
                <h3>Delivery address</h3>
                <div className="buy__delivery__container">
                  <div className="buy__delivery__details">
                  <p>Select your delivery address from the existing one or add new one</p>
                  { verified && cardState === 2 &&  (
                  <div className={cardState > 1 ? "address__column" : "dnone"}>
                      <p>Shrey Karah</p>
                      <small>Quench Ville, Plot 12 Nkrumah Rd Kampala, Uganda:<span> +256 76 633 4574</span></small>
                  </div>
                ) }
                  </div>
                  { cardState === 2 && (<button className={cardState < 2 ? "dnone":"dblock"}>Change Address</button>)}
                </div>
                { verified && cardState < 2 && ( <div className={cardState < 2 ? "address__flex" : "dnone"}>
                  <div onClick={handleClicked} className={(clicked && cardState===1) ? "address__flexLeft__clicked": "address__flexLeft__unclicked"}>
                    <p>Shrey Karah</p>
                    <small>Quench Ville, Plot 12 Nkrumah Rd Kampala, Uganda</small>
                    <p className="bold">+256 76 633 4574</p>
                    <span className={clicked ? "las la-check" : "dnone"}></span>
                  </div>
                  <div className="address__flexRight">
                    <div onClick={handleModal2}>
                      <span className="las la-plus"></span>
                      <p>Add New Address</p>
                    </div>
                  </div>
                </div>) }
              </div>
            </div>

            <div className="buy__relative">
              <div className={cardState === 2 ?"complete__count" :"buy__count"}>
                <p>3</p>
              </div>
              <div className="buy__details">
                <h3>Payment</h3>
                <div>
                  <p>Select your payment method</p>
                </div>
                {cardState===2 && (
                  <div>
                    <div>
                      <input type="radio" checked="checked" />
                      <p>Cash on delivery</p>
                    </div>
                    <button><NavLink to="/placeorder">Place Order</NavLink> </button>
                </div>
                ) }
              </div>
            </div>
          </div>
        </div>
        <div className="buy__grid__right">
          <div className="buy__cont">
            <div>
              <p>Bag</p>
              <span>0</span>
            </div>
            <a>Clear Bag</a>
          </div>
          <div className="buy__flex">
            <p>Earrings & Mangtika</p>
            <small>Per piece</small>
            <div className="dflex">
              <div className="buy__flexLeft">
                <p>UGX 118,400</p>
                <small>UGX 148,000</small>
              </div>
              <div className="buy__flexRight">
                <span onClick={reduceCount} className="las la-minus"></span>
                <p>{count}</p>
                <span onClick={increaseCount} className="las la-plus"></span>
              </div>
            </div>
          </div>
          <div className="buy__flex">
            <p>Earrings & Mangtika</p>
            <small>Pie piece</small>
            <div className="dflex">
              <div className="buy__flexLeft">
                <p>UGX 118,400</p>
                <small>UGX 148,000</small>
              </div>
              <div className="buy__flexRight">
                <span onClick={reduceCount1} className="las la-minus"></span>
                <p>{count1}</p>
                <span onClick={increaseCount1} className="las la-plus"></span>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="buy__subtotal">
            <p>Subtotal</p>
            <p>UGX 12,700</p>
          </div>
          <div className="buy__subtotal2">
            <p>Delivery</p>
            <p>Free</p>
          </div>
          <div className="dotted"></div>
          <div className="buy__subtotal3">
            <p>Total</p>
            <p>UGX 12,700</p>
          </div>
          <small>Inclusive of all taxes</small>
          <div className="dotted"></div>
          <p>Your about to save UGX 27,400 on this order</p>
        </div>
      </div>
      </div>
      { modal && (<VerifyModal closeModal={closeModal} handleChange = {handleChange} handleSubmit={handleSubmit} />)}
      { modal_ && (<AddressModal closeModal2={closeModal2} />)}
    </>
  );
}

export default Buy;
