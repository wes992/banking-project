import React, {Component} from "react";
// import { Link } from "react-router-dom";
// import axios from 'axios';
import { Link } from "react-router-dom";


class Account extends Component {
  
  
  render() {
  const {accounts} = this.props

  return (
    <div>
    <div className="appHeader">
    <div className="left">
      <a href="/accounts" className="headerButton goBack">
      <h5>MyBank &trade;</h5>
      </a>
    </div>
    <div className="pageTitle">Accounts</div>
    <div className="right">
      <a href="/accounts" className="headerButton">
        <ion-icon
          className="icon"
          name="notifications-outline"
        ></ion-icon>
        <span className="badge">4</span>
      </a>
    </div>
  </div>


    {accounts.map(account => (
      <Link to='/rewards' key={account.number}>
        <div className="card-block mb-2">
          <div className="card-main">
              <div className="balance title">
                    <h5 className="title">{account.nickname}</h5>
                  <span className="balanceLabel label">BALANCE</span>
                  <h5 className="title">{account.formattedCurrentBalance}</h5>
              </div>
              <div className="in">
                  <div className="card-number">
                      <span className="label">Account:  </span>
                      {account.maskedNumber}
                  </div>
                  <div className="bottom">
                      <div className="card-expiry">
                          <span className="label">{account.isEligibleForRewards ? 'Rewards:' : ''}  </span>
                          {(!account.isEnrolledInRewards && account.isEligibleForRewards) ? 'Start earning?' : ''}
                          {account.isEnrolledInRewards ? `${account.rewardsPoints} points`: ''}
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </Link>
    ))}
</div>
  );
}
};

export default Account;
