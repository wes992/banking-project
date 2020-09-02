import React from "react";

const Account = ({ accounts }) => {
  return accounts.map((account) => (
    <div className="accountInfoContainer">
      <div className="row">
        <div className="accountInfo col-sm-12 col-md-8">
          <div className="row">
            <div className="accountName col-sm-12 col-md-8">
              {account.nickname}
            </div>
            <div className="accountNum col-sm-12 col-md-4">
              {account.maskedNumber}
            </div>
          </div>
          <div className="accountBalance">
            {account.formattedCurrentBalance}
          </div>
        </div>
        <div className="rewardsInfo col-sm-12 col-md-4">
          <span>
            Rewards: {account.isEnrolledInRewards ? "true" : "false"}{" "}
          </span>
        </div>
      </div>
    </div>
  ));
};

export default Account;
