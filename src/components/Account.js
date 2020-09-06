import React, {Component} from "react";
// import { Link } from "react-router-dom";
// import axios from 'axios';
import { Link } from "react-router-dom";


class Account extends Component {

  state={
   accounts: this.props.accounts
  }
  
  
  render() {
  const {accounts} = this.props

  return (
    accounts.map(account => (
      <div key={account.number} className="card-block mb-2">
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
                    <Link to='/rewards'>
                      <span className="label">{account.isEligibleForRewards ? 'Rewards:' : ''}  </span>
                      {(!account.isEnrolledInRewards && account.isEligibleForRewards) ? 'Start earning?' : ''}
                      {account.isEnrolledInRewards ? `${account.rewardsPoints} points`: ''}
                    </Link>
                  </div>
              </div>
          </div>
      </div>
  </div>
    ))
  );
}
};

export default Account;
