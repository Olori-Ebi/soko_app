import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import img from '../../images/1.jpg';
import img4 from '../../images/2 (1).jpg';
import img5 from '../../images/2 (2).jpg';
import img6 from '../../images/4 (1).jpg';
import Footer from '../Footer/Footer';
import './Home.css';

function Home () {
  const [bag, setBag] = useState ([]);
  const dataValues = [
    {id: 1, item: 'Electronics', figure: 4},
    {id: 2, item: 'Shoes', figure: 3},
    {id: 3, item: 'Books', figure: 2},
    {id: 4, item: 'Tech', figure: 5},
  ];

  const itemValues = [
    {id: 1, image: img, title: 'Bluetooth 5.0 Earphones', amount: 14500},
    {
      id: 2,
      image: img4,
      title: 'Women Fashion Cashual Sneakers Socks Shoes - Black',
      amount: 14500,
    },
    {
      id: 3,
      image: img5,
      title: 'Trending Female Stockings Sneakers',
      amount: 14500,
    },
    {
      id: 3,
      image: img6,
      title: 'Unisex Breathable Sport Sneakers',
      amount: 14500,
    },
  ];

  const [activeID, setActiveID] = useState ();
  const addToBag = id => {
    const itemAdded = itemValues.find (item => item.id === id);
    setBag ([...bag, itemAdded]);
  };

  const removeFromBag = (id, index) => {
    let bagItems = [...bag];
    bagItems.splice (index, 1);
    setBag (bagItems);
  };
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
            <div className="home__body__column">
              <div className="home__body__left">
                <ul>
                  {dataValues.map (data => (
                    <li
                      onClick={() => setActiveID (data.id)}
                      className={activeID === data.id ? 'active' : 'null'}
                    >
                      <NavLink to="/">
                        {' '}{data.item} <span>({data.figure})</span>{' '}
                      </NavLink>
                      {' '}
                    </li>
                  ))}
                </ul>
              </div>
              <a className="categories">
                View all categories
                {' '}
                <span className="las la-chevron-right" />
                {' '}
              </a>
            </div>
            <div className="home__body__center">
              <div className="home__body__input">
                <input type="text" placeholder="Search for products" />
                <span className="las la-search" />
              </div>
              <div className="home__center__container">
                <p>
                  Electronics <span>{itemValues.length}</span>{' '}
                </p>
              </div>
              {itemValues.map (item => (
                <div className="home__center__main">
                  <img src={item.image} />
                  <NavLink to={`/single/${item.id}`}>
                    <div className="home__center__details">
                      <p>{item.title}</p>
                      <p><small>UGX</small>{item.amount} </p>
                    </div>
                  </NavLink>
                  <button onClick={() => addToBag (item.id)}>
                    <span className="las la-plus" /> Add
                  </button>
                </div>
              ))}
            </div>
            <div className="home__body__right">
              {bag.length === 0 &&
                <div className="home__right__container">
                  <p>
                    Bag <span>{bag.length}</span>{' '}
                  </p>
                  <span className="las la-frown" />
                  <p>It's empty here</p>
                  <p>Start shopping to add items to your bag</p>
                </div>}
              {bag.length > 0 &&
                bag.map ((bagitem, index) => (
                  <div className="home__right__main">
                    <img src={bagitem.image} />
                    <Link>
                      <div className="home__center__details">
                        <p>{bagitem.title}</p>
                        <p><small>UGX</small>{bagitem.amount} </p>
                      </div>
                    </Link>
                    <button onClick={() => removeFromBag (bagitem.id, index)}>
                      <span className="las la-trash" />
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
