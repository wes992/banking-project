import React, {Component} from "react";
// import { Link } from "react-router-dom";
// import axios from 'axios';
import config from '../accountData/config';


class Account extends Component {

  state={
   accounts: this.props.accounts
  }
  
  handleClick = async (accountId) => {
    try {
      // the data associated to this account, if you need some more infos to send via fetch
      const account = this.props.accounts.find(account => account.number === accountId);

      const redeemAmount = 100;
      const request = await fetch(config.url + `/api/${accountId}/redeem`, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          'redeemAmount' : redeemAmount
        }),
      }).then(res=>res.json()).then(res=>console.log(res));
      const json = await request.json()

      this.setState(previousState => ({
        // map the previous account data
        // merge api response with previous account data
        // of other accounts, just keep them as is
        accounts: previousState.map(account => account.number === accountId ? {...account, ...json } : account)
      }));
    } catch(error) {
      console.error(error);
    }
  }
  render() {
  const {accounts} = this.props

  return (
    accounts.map((account, index) => (
      <div key={account.number} className="card-block mb-2">
      <div className="card-main">
          {/* <div className="card-button dropdown">
              <button type="button" className="btn btn-link btn-icon" data-toggle="dropdown">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="javacript:;">
                      <ion-icon name="pencil-outline"></ion-icon>Edit
                  </a>
                  <a className="dropdown-item" href="javacript:;">
                      <ion-icon name="close-outline"></ion-icon>Remove
                  </a>
                  <a className="dropdown-item" href="javacript:;">
                      <ion-icon name="arrow-up-circle-outline"></ion-icon>Upgrade
                  </a>
              </div>
          </div> */}
          <div className="balance title">
                <h1 className="title">{account.nickname}</h1>
              <span className="label">BALANCE</span>
              <h1 className="title">{account.formattedCurrentBalance}</h1>
          </div>
          <div className="in">
              <div className="card-number">
                  <span className="label">Account Number:  </span>
                  {account.maskedNumber}
              </div>
              <div className="bottom">
                  <div className="card-expiry">
                      <span className="label">{account.isEligibleForRewards ? 'Rewards:' : ''}  </span>
                      {(!account.isEnrolledInRewards && account.isEligibleForRewards) ? 'Start earning rewards?' : ''}
                      {account.isEnrolledInRewards ? `${account.rewardsPoints} points`: ''}
                  </div>
              </div>
          </div>
      </div>
  </div>// <div key={index} classNameName="accountInfoContainer">
    //       <div classNameName="accountInfo col-12">
    //     <button classNameName="accountInfoBtn">
    //         <div classNameName="row">
    //           <div classNameName="accountName col-8">
                // {account.nickname}
    //           </div>
    //           <div classNameName="accountNum col-4">
    //             {account.maskedNumber}
    //           </div>
    //         </div>
    //         <div classNameName="accountBalance">
    //           {account.formattedCurrentBalance}
    //         </div>
    //     </button>
    //     <div classNameName="row">

    //       <div classNameName="rewardsInfo col-12">
    //         <button classNameName='rewardsBtn' type='submit' account={account} onClick={() => this.handleClick(account.number)}>
              // {(!account.isEnrolledInRewards && account.isEligibleForRewards) ? 'Start earning rewards?' : ''}
              // {account.isEnrolledInRewards ? `Rewards balance: ${account.rewardsPoints} points`: ''}
    //         </button>
    //       </div>
    //     </div>

    //   </div>
    // </div>
    ))
  );
}
};

export default Account;
