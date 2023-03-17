import React from 'react'
import qr from "../../assets/images/qr.png"
import "./Header.scss"

function Header() {
  return (
    <div className="header__container">
      <h1 className="header__title">Which One is Real?</h1>
      <div>
        <img src={qr} alt="" />
        <h2>
          Go to <a href="https://bit.ly/3JPBMpa">bit.ly/3JPBMpa</a> to vote!
        </h2>
      </div>
    </div>
  );
}

export default Header