import React, { useRef, useState } from 'react';
import {NavLink} from 'react-router-dom';
import img from '../../images/1.jpg';
import img2 from '../../images/2.jpg';
import img6 from '../../images/3.jpg';
import img7 from '../../images/4.jpg';
import img9 from '../../images/5.jpg';
import img8 from '../../images/4 (1).jpg';
import img3 from '../../images/3.jpg';
import mask from '../../images/mask.jpg';
import stool from '../../images/stool.jpg';
import Footer from '../Footer/Footer';
import Carousel from 'react-elastic-carousel'
import './Single.css';


function SingleItem () {
  const listRef = useRef(null);
  const [count, setCount] = useState(1)

  const scrollLeft = () => {
    if(listRef.current) {
      listRef.current.scrollBy({
        top:0,
        left: 200,
        behavior: "smooth"
      })
    }
  }

  const scrollRight = () => {
    if(listRef.current) {
      listRef.current.scrollBy({
        top:0,
        left: -200,
        behavior: "smooth"
      })
    }
  }

  const increment = () => {
    setCount(count+1)
  }

  const decrement = (e) => {
    count <= 1 ? setCount(1): setCount(count-1)
  }


  return (
    <>
    <div className="single">
      <div className="single__container">
        <div className="single__headerLeft">
          <span className="las la-store-alt" />
          <div className="single__headerLeft__fDC">
            <p className="bold">Target</p>
            <p className="grey">
              Cham Towers, Plot 12 Nkruma Rd, Kampala, Ug
            </p>
          </div>
        </div>
        <div className="single__headerRight">
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
    
      <div className="single__container">
        <NavLink to="/">
          <span className="las la-angle-left" />
          <p>Fingerprint Touch Bluetooth</p>
        </NavLink>
      </div>
    </div>
    <div className="single__">
      <div className="single__main">
          <Carousel>
            <img src={img} alt="stool jpeg" />
            <img src={img2} alt="stool jpeg" />
            <img src={img3} alt="stool jpeg" />
          </Carousel>
        <div>
          <h4>Fingerprint Touch Bluetooth 5.0 Earphones Wireless 4D Stereo Headphones</h4>
          <p>
          Thank you for purchasing the products in our store. we hope to give you a pleasant shopping experience. <br/><br/>
<strong>1.</strong> Our electronic products of this shop, after along time of transportation, please charge the first time after receiving.<br/><br/>
<strong>2.</strong> Our store mainly sells electronic product and is updated daily. please pay more attention to our shop.<br/><br/>
<strong>3.</strong> We QC the products during shipment to ensure that the products are delivered to you with the best quality.<br /><br/>

For more phone models and colors, click seller Information to enter our store for purchase
          </p>
          <h2>UGX 118,400</h2>
          <small>UGX 148,000</small>
          <div className="width">
            <div>
              <span onClick={decrement} className="las la-minus"></span>
              <input value={count} />
              <span onClick={increment} className="las la-plus"></span>
            </div>
          </div>
          <div className="single__buttons">
            <button>Add to Bag</button>
            <NavLink to="/buy">
              <button>Buy Now</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
    <div className="single__w100">
      <div className="single__wContainer">
        <div className="single__wContainer__top">
          <p>RELATED PRODUCTS</p>
          <div>
            <span onClick={scrollLeft} className="las la-chevron-left"></span>
            <span onClick={scrollRight} className="las la-chevron-right active"></span>
          </div>
        </div>
        <div className="single__imageContainer" ref={listRef}>
          <div className="img__container">
            <img src={img} />
            <p>Bluetooth 5.0 Earphones</p>
            <p>UGX 14,500</p>
          </div>
          <div className="img__container">
            <img src={img2} />
            <p>Wireless 4D</p>
            <p>UGX 13,800</p>
          </div>
          <div className="img__container">
            <img src={img3} />
            <p>Fingerprint Touch</p>
            <p>UGX 15,000</p>
          </div>
          
          <div className="img__container">
            <img src={img} />
            <p>Bluetooth 5.0 Earphones</p>
            <p>UGX 14,500</p>
          </div>
          <div className="img__container">
            <img src={img2} />
            <p>Wireless 4D</p>
            <p>UGX 13,800</p>
          </div>
          <div className="img__container">
            <img src={img3} />
            <p>Fingerprint Touch</p>
            <p>UGX 15,000</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
}

export default SingleItem;
