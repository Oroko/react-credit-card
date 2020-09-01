// import react
// import react dom
// component

import React from "react";
//import PropTypes from 'prop-types'
import ReactDOM from "react-dom";
import './index.css'

const CreditCard =({info}) => {
  const {name,expirationDate,creditCardNumber,bankName} = info
  return (
    <div className="credit-card">
      <div className="bank-name"> {name}</div>
      <div className="card-number">{creditCardNumber}</div>
      <div className="first-four-digits">{creditCardNumber.substring(0,4)}</div>
      <div className="expiration">
        <span className="valid-thru">Valid Thru</span> {expirationDate}
      </div>
      <div className="bank">{bankName}</div>
    </div>
  )
}

const cardInfo = {
  name: "Abel Gechure",
  expirationDate: "08/19",
  creditCardNumber: "1234 5678 8765 4321",
  bankName: "Big Bank, Inc."
}



ReactDOM.render(
  <CreditCard info={cardInfo}/>,
  document.querySelector("#root")
)