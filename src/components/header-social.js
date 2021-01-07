import React, { Component } from 'react'

export default class HeaderSocial extends Component {
  render(){
    return(
      <ul className="header-social">
        <li>
          <i className="fas fa-code-branch"></i>
          <span>@itsmechandru</span>
        </li>
        <li>
          <i className="fab fa-linkedin"></i>
          <span>/in/iamkuttychandru</span>
        </li>
      </ul>
    )
  }
}
