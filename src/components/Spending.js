import React from 'react';

const Spending = () => {

    return(
        <div className="appHeader">
          <div className="left">
            <a href="/" className="headerButton goBack">
              <ion-icon name="chevron-back-outline"></ion-icon>
            </a>
          </div>
          <div className="pageTitle">Spending</div>
          <div className="right">
            <a href="/" className="headerButton">
              <ion-icon
                className="icon"
                name="notifications-outline"
              ></ion-icon>
              <span className="badge">4</span>
            </a>
          </div>
        </div>
    )
}

export default Spending;