import React, { Component } from "react";
import config from "../accountData/config";

class Rewards extends Component {


  handleClick = async (accountId) => {
    if (accountId.isEnrolledInRewards) {
      try {
        this.props.accounts.find((account) => account.number === accountId);

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
        const availablePoints = accountId.rewardsPoints;
        if ((redeemAmount > availablePoints) || (request.status === 400)) {
          return alert(`You don't have enough points to do that. Your redeemable balance is ${availablePoints -1}, try again with a number less that that.`)
        }
        if ((1 > redeemAmount) || (request.status === 500)) {
          return alert(`Please try again, with numbers between 1 and ${availablePoints -1}`)
        }
        const json = await request.json();
          if(redeemAmount > 0) {
            return alert(
              `Successfully redeemed ${redeemAmount} points! Your updated rewards balance is ${json}`
              );
            }
      } catch (error) {
        console.error(error);
      }
      return
    }
    if (accountId.isEligibleForRewards && !accountId.isEnrolledInRewards) {
      try {
        await fetch(config.url + `/api/${accountId.number}/enroll`, 
        {
          method: "POST",
          
        })
        .then((res) => (res.status === 200) ? alert(`You have been successfully enrolled into rewards! Start earning points now! status: ${res.status}`) : alert(`Sorry, there was an issue, try again  status: ${res.status}`))

        return
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
      <div >
        <div className="appHeader">
          <div className="left">
            <a href="/accounts" className="headerButton goBack">
            <h5><strong>MyBank &trade;</strong></h5>
            </a>
          </div>
          <div className="pageTitle">Eligible for Rewards</div>
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

        <div className="accountsContainer">
        <span>
          <h3>Let's redeem some points!</h3>
        </span>
        {accounts.map((account) => {
          if (account.isEligibleForRewards) {
            return (
              <div key={account.number} className="card-block mb-2"  onClick={() => this.handleClick(account)}>
                <div className="card-main">
                  <div className="balance title">
                    <h5 className="title">{account.nickname}</h5>
                    <span className="balanceLabel label">
                      <h5
                        className="balanceLabel label"
                      >
                        {account.isEnrolledInRewards
                          ? `Redeem ${account.rewardsPoints} points`
                          : "Enroll Now"}
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
      <div className="pyro">
        <div className="before"></div>
        <div className="after"></div>
      </div>
      </div>
    );
  }
}

export default Rewards;
