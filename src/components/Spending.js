import React from 'react';

const Spending = () => {

    return(
        <div>

        <div className="appHeader">
          <div className="left">
            <a href="/accounts" className="headerButton goBack">
            <h5>MyBank &trade;</h5>
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
                <div className='accountsContainer'>
                <h1>Spending Page</h1>
                <h1>Spending Page</h1>
                <h1>Spending Page</h1>
                <h1>Spending Page</h1>
                <h1>Spending Page</h1>
                <h1>Spending Page</h1>
                <h1>Spending Page</h1>
              </div>
              </div>
    )
}

export default Spending;