import React, { Component } from 'react'

export default class HeaderContact extends Component {
  render(){
    return(
      <ul className="header-contact-ul">
        <li>
          <i className="fa fa-globe-asia"></i>
          <span className="header-contact-text">Trichy, TamilNadu - 620102</span>
        </li>
        <li>
          <i className="fas fa-envelope"></i>
          <span className="header-contact-text">chandruanju92@gmail.com</span>
        </li>
        <li>
          <i className="fas fa-address-card"></i>
          <span className="header-contact-text">+91-8438318184</span>
        </li>
      </ul>
    )
  }
}
