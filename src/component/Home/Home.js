import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import img from '../../images/1.jpg';
import img4 from '../../images/2 (1).jpg';
import img5 from '../../images/2 (2).jpg';
import img6 from '../../images/4 (1).jpg';
import Footer from '../Footer/Footer';
import './Home.css';

function Home () {
  return (
    <div className="home__wrapper">
      <div className="home">
        <div className="home__container">
          <div className="home__headerLeft">
            <span className="las la-store-alt" />
            <div className="home__headerLeft__fDC">
              <p className="bold">Target</p>
              <p className="grey">
                Cham Towers, Plot 12 Nkruma Rd, Kampala, Ug
              </p>
            </div>
          </div>
          <div className="home__headerRight">
            <NavLink to="/bag">
              <span className="las la-shopping-bag" />
              <p>Bag</p>
            </NavLink>
            <NavLink to="/account">
              <span className="las la-user" />
              <p>Account</p>
            </NavLink>
          </div>
        </div>
        <div className="home__body">
          <div className="home__body__container">
            <div className="home__body__left">
              <ul>
                <li><a>Electronics <span>(12)</span> </a> </li>
                <li><a>Face Masks <span>(3)</span> </a> </li>
                <li><a>Fresh Food <span>(8)</span> </a> </li>
                <li><a>Grocery <span>(6)</span> </a> </li>
                <li><a>Home <span>(24)</span> </a> </li>
                <li><a>Kids <span>(9)</span> </a> </li>
                <li>
                  <a>
                    View all categories
                    {' '}
                    <span className="las la-chevron-right" />
                    {' '}
                  </a>
                  {' '}
                </li>
              </ul>
            </div>
            <div className="home__body__center">
              <div className="home__body__input">
                <input type="text" placeholder="Search for products" />
                <span className="las la-search" />
              </div>
              <div className="home__center__container">
                <p>
                  Electronics <span>12</span>{' '}
                </p>
              </div>
              <div className="home__center__main">
                <img src={img} />
                <Link to="/single">
                  <div className="home__center__details">
                    <p>Bluetooth 5.0 Earphones</p>
                    <p><small>UGX</small> 14,500</p>
                  </div>
                </Link>
                <button><span className="las la-plus" /> Add</button>
              </div>
              <div className="home__center__main">
                <img src={img4} />
                <Link>
                  <div className="home__center__details">
                    <p>Women Fashion Cashual Sneakers Socks Shoes - Black</p>
                    <p><small>UGX</small> 15,000</p>
                  </div>
                </Link>
                <button><span className="las la-plus" /> Add</button>
              </div>
              <div className="home__center__main">
                <img src={img5} />
                <Link>
                  <div className="home__center__details">
                    <p>Trending Female Stockings Sneakers</p>
                    <p><small>UGX</small> 17,500</p>
                  </div>
                </Link>
                <button><span className="las la-plus" /> Add</button>
              </div>
              <div className="home__center__main">
                <img src={img6} />
                <Link>
                  <div className="home__center__details">
                    <p>Unisex Breathable Sport Sneakers </p>
                    <p><small>UGX</small> 18,000</p>
                    <p className="cancel"><small>UGX</small> 20,000</p>
                  </div>
                </Link>
                <button><span className="las la-plus" /> Add</button>
              </div>
            </div>
            <div className="home__body__right">
              <div className="home__right__container">
                <p>
                  Bag <span>0</span>{' '}
                </p>
                <span className="las la-frown" />
                <p>It's empty here</p>
                <p>Start shopping to add items to your bag</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
