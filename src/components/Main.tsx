import React from "react";
import '../assets/styles/Main.scss';
import logo from '../assets/images/EnergyGoLogo.png';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={logo} alt="EnergyGo Logo" />
        </div>
        <div className="content">
          <h1>EnergyGo</h1>
          <p>Ihre moderne Powerbank Solution</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
