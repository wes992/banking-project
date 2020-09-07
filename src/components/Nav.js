import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  
  const checkRoute = () => {
    const active = document.querySelectorAll("a.item");

    active.forEach((link) => {
      setTimeout(() => {
        if (link.pathname === window.location.pathname) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      }, 100);
    });
  };

  checkRoute()

  return (
    <nav className="nav" onClick={checkRoute}>
      <div className="appBottomMenu no-border">
        <Link to="/spending" className="item">
          <div className="col">
            <ion-icon name="pulse-outline"></ion-icon>
            <strong>Spending</strong>
          </div>
        </Link>
        <Link to="/accounts" className="item">
          <div className="col">
            <ion-icon name="card-outline"></ion-icon>
            <strong>Accounts</strong>
          </div>
        </Link>
        <Link to="/rewards" className="item">
          <div className="col">
            <ion-icon name="cash-outline"></ion-icon>
            <strong>Rewards</strong>
          </div>
        </Link>
        <Link to="/bills" className="item">
          <div className="col">
            <ion-icon name="calendar-outline"></ion-icon>
            <strong>Upcoming Bills</strong>
          </div>
        </Link>
        <Link to="/settings" className="item">
          <div className="col">
            <ion-icon name="settings-outline"></ion-icon>
            <strong>Settings</strong>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
