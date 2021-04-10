import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import AccountHeader from '../AccountHeader/AccountHeader';
import Modal from '../Modal/Modal';
import './Address.css';

function Address () {
  const [openModal, SetOpenModal] = useState(false);

  const handleModal = () => {
    SetOpenModal(true)
  }

  const closeModal = () => {
    SetOpenModal(false)
  }

  return (
    <>
    <div className="address">
      <AccountHeader />
      <div className="address__container">
        <div className="address__containerLeft">
          <p>
            <NavLink to="/account">
              <span className="las la-clipboard-list" /> My order
            </NavLink>
          </p>
          <p className="active">
            <NavLink to="/address">
              <span className="las la-map-marker-alt" /> My addresses
            </NavLink>
          </p>
        </div>
        <div className="address__containerRight">
          <div className="address__lower__flex">
            <div className="address__containerRight__bottom">
              <p>Shrey Karah</p>
              <small>Quench Ville, Plot 12 Nkrumah Rd Kampala, Uganda</small>
              <p className="bold">+256 76 633 4574</p>
              <div className="flex">
                <h5><a onClick={handleModal}>Edit</a></h5>
                <h5><a>Delete</a></h5>
              </div>
            </div>
            <div className="address__containerRight__bottom">
              <div onClick={handleModal}>
                <span className="las la-plus" />
                <p>Add New Address</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {openModal && (<Modal closeModal={closeModal} />)}
    </>
  );
}

export default Address;
