import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {


  const checkRoute = () => {	
    const active = document.querySelectorAll('a.item')

    active.forEach(link => {setTimeout(() => {
      if(link.pathname === window.location.pathname){
        link.classList.add('active')
      } else {
        link.classList.remove('active')
      };
    }, 250);
  })
  }
  

  const appBottomStyle = {
    'position': 'fixed',
    'bottom' : 0,
    'zIndex': 1,
    'paddingBottom': 0
  }

  return (
    <nav className="nav">
            <div className="appBottomMenu no-border" style={appBottomStyle}>
                <Link to="/spending" className="item" onClick={checkRoute}>
                    <div className="col">
                        <ion-icon name="pulse-outline"></ion-icon>
                        <strong>Spending</strong>
                    </div>
                </Link>
                <Link to='/' className="item active" onClick={checkRoute}>
                    <div className="col">
                        <ion-icon name="card-outline"></ion-icon>
                        <strong>Accounts</strong>
                    </div>
                </Link>
                <Link to='/rewards' className="item" onClick={checkRoute}>
                    <div className="col">
                        <ion-icon name="cash-outline" onClick={checkRoute}></ion-icon>
                        <strong>Rewards</strong>
                    </div>
                </Link>
                <Link to="/bills" className="item">
                    <div className="col">
                        <ion-icon name="calendar-outline" onClick={checkRoute}></ion-icon>
                        <strong>Upcoming Bills</strong>
                    </div>
                </Link>
                <Link to="/settings" className="item" onClick={checkRoute}>
                    <div className="col">
                        <ion-icon name="settings-outline"></ion-icon>
                        <strong>Settings</strong>
                    </div>
                </Link>
            </div>
      {/* <div
        class="appBottomMenu"
        // style="position: relative; z-index: 0; padding-bottom: 0;"
      >
        <a href="#" class="item active">
          <div class="col">
            <ion-icon name="pulse-outline"></ion-icon>
            <strong>Item 1</strong>
          </div>
        </a>
        <a href="#" class="item">
          <div class="col">
            <ion-icon name="card-outline"></ion-icon>
            <strong>Item 2</strong>
          </div>
        </a>
        <a href="#" class="item">
          <div class="col">
            <ion-icon name="cash-outline"></ion-icon>
            <strong>Item 3</strong>
          </div>
        </a>
        <a href="#" class="item">
          <div class="col">
            <ion-icon name="calendar-outline"></ion-icon>
            <strong>Item 4</strong>
          </div>
        </a>
        <a href="javascript:;" class="item">
          <div class="col">
            <ion-icon name="settings-outline"></ion-icon>
            <strong>Item 5</strong>
          </div>
        </a>
      </div> */}
    </nav>
  );
};

export default Nav;
