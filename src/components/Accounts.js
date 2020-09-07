import React from 'react';
import Account from './Account';

const Accounts = ({accounts}) => {

    return ( 
        <div className="accountsContainer">
                    <div className="appHeader">
            <div className="left">
                <a href="/accounts" className="headerButton goBack">
                    <ion-icon name="chevron-back-outline"></ion-icon>
                </a>
            </div>
            <div className="pageTitle">
                Home
            </div>
            <div className="right">
                <a href="/accounts" className="headerButton">
                    <ion-icon className="icon" name="notifications-outline"></ion-icon>
                    <span className="badge">4</span>
                </a>
            </div>
        </div>
            <h3>Current Accounts</h3>
            <Account accounts={accounts}/>
        </div>
     );
}
 
export default Accounts;