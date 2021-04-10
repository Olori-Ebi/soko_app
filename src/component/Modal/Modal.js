import React from 'react';
import './Modal.css';

function Modal({closeModal}) {
  return (
    <div className="modal">
      <div className="modal__card">
        <div className="modal__header">
          <p>Edit Address</p>
          <span onClick={closeModal} className="las la-times" />
        </div>
        <form>
          <div>
            <label for="name">Name</label>
            <input type="text" value="Shrey Karah" />
          </div>
          <div>
            <label for="number">Number</label>
            <input type="text" value="+256 76 633 4574" />
          </div>
          <div>
            <label for="city">City</label>
            <input type="text" value="Kampala" />
          </div>
          <div>
            <label for="address">Address</label>
            <textarea
              type="text"
              value="Quench Ville, Plot 12 Nkrumah Rd, Kampala, Uganda"
            />
          </div>
          <div>
            <button>Edit Address</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
