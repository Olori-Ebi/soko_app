import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
      <div className="home__footer">
          <div className="home__footer__container">
            <div className="footer__flex">
              <span className="las la-shipping-fast" />
              <p>Fast Delivery</p>
            </div>
            <div className="footer__flex">
              <span className="las la-certificate" />
              <p>Buyer Protection</p>
            </div>
            <div className="footer__flex">
              <span className="las la-sync-alt" />
              <p>Customer Support</p>
            </div>
          </div>
        </div>
        <div className="footer">
          <p>STORE DETAILS</p>
          <p>Target</p>
          <p>Cham Towers, Plot 12 Nkruma Rd, Kampala, Ug</p>
          <p><a><span className="lab la-whatsapp" /></a> Chat with us</p>
    </div>
    
    </>
  )
}

export default Footer
