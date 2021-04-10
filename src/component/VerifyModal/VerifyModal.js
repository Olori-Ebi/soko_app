import React, {useState} from 'react';
import './VerifyModal.css';

function VerifyModal({closeModal, handleChange, handleSubmit}) {
  return (
    <div className="verify">
      <div className="verify__card">
        <div className="verify__header">
          <p />
          <h3>Verify your number</h3>
          <span onClick={closeModal} className="las la-times" />
        </div>
        <div className="verify__main">
          <p>
            Please enter verification code sent via SMS to +256 76 633 6574
          </p>
          <div className="verify__inputs">
            <form onKeyPress={handleSubmit}>
              <input
                type="number"
                name="num1"
                onChange={handleChange}
                min="1"
                max="9"
              />
              <input
                type="number"
                name="num2"
                onChange={handleChange}
                min="1"
                max="9"
              />
              <input
                type="number"
                name="num3"
                onChange={handleChange}
                min="1"
                max="9"
              />
              <input
                type="number"
                name="num4"
                onChange={handleChange}
                min="1"
                max="9"
              />
            </form>
          </div>
          <p>Resend Code</p>
        </div>
      </div>
    </div>
  );
}

export default VerifyModal;
