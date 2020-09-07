import React, { Component } from "react";
import config from "../accountData/config";

class Rewards extends Component {

  handleClick = async (accountId) => {
    if (accountId.isEnrolledInRewards) {
      try {
        const account = this.props.accounts.find((account) => account.number === accountId);

        const redeemAmount = prompt(
          "How many points would you like to redeem?"
        );
        const request = await fetch(
          config.url + `/api/${accountId.number}/redeem`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
              redeemAmount: redeemAmount,
            }),
          }
        )
          // .then((res) => res.json())
          // .then((res) => console.log(res));
          const json = await request.json(); //This is the line that is throwing 'cannot find property json of undefined' error
          
          if ((1 > redeemAmount) || (redeemAmount > 10000) || (redeemAmount === null)) {
            return alert('Please try again, with numbers greater than 0')
          }
          if(redeemAmount > 0) {
            return alert(
              `Successfully redeemed ${redeemAmount} points! Your updated rewards balance is ${json}`
              );
            }
            if (json.status === 400) {
              return alert(`You don't have enough points to do that. Your available balance is ${account.rewardsPoints}, try again with a number less that that.`)
            }


        this.setProps(previousState => ({
          accounts: previousState.accounts.map(account =>
            account.number === accountId.number ? { ...account, ...json } : account
          ),
        }));
      } catch (error) {
        console.error(error);
      }
      return;
    }
    if (accountId.isEligibleForRewards && !accountId.isEnrolledInRewards) {
      try {
        await fetch(config.url + `/api/${accountId.number}/enroll`, {
          method: "POST",
        }).then((res) => alert("Server responded with status " + res.status));
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("This account is not eligible for rewards at this time");
    }
  };

  render() {
    const { accounts } = this.props;

    return (
      <div className="accountsContainer">
        <div className="appHeader">
          <div className="left">
            <a href="/" className="headerButton goBack">
              <ion-icon name="chevron-back-outline"></ion-icon>
            </a>
          </div>
          <div className="pageTitle">Rewards</div>
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
        <span>
          <h3>Accounts Eligible for Rewads</h3>
        </span>
        {accounts.map((account) => {
          if (account.isEligibleForRewards) {
            return (
              <div key={account.number} className="card-block mb-2">
                <div className="card-main">
                  <div className="balance title">
                    <h5 className="title">{account.nickname}</h5>
                    <span className="balanceLabel label">
                      <h5
                        className="balanceLabel label"
                        onClick={() => this.handleClick(account)}
                      >
                        {account.isEnrolledInRewards
                          ? `${account.rewardsPoints} points`
                          : "Start Earning"}
                      </h5>
                    </span>
                  </div>
                  <div className="in">
                    <div className="card-number">
                      <span className="label">Account: </span>
                      {account.maskedNumber}
                    </div>
                    <div className="bottom"></div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default Rewards;
