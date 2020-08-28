// import react
// import react dom
// component

import React from "react";
import PropTypes from 'prop-types'
import ReactDOM from "react-dom";
import './index.css'

const AddressLabel = ({info}) => {
  return (
    <div className="address-label">
    <p>{info.fullName}</p>
    <p>{info.streetAddress}</p>
    <p>{info.zipCode}</p>
    
    </div>
  )
}

const person = {
  fullName: "Abel Gechure",
  streetAddress: "1117 Birch Lane" ,
  zipCode: "Phillipsburg, NJ 08865 "
}

AddressLabel.propTypes = {
  info:PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    streetAddress: PropTypes.string.isRequired,
    zipCode: PropTypes.string.isRequired
  })

}


ReactDOM.render(
  <AddressLabel info={person} />,
  document.querySelector("#root")
)