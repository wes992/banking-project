import React, { Component } from 'react';
import bankAccounts from '../accountData/bankAccounts';



class Account extends Component {

    renderAccounts = () => 
        bankAccounts.map((account, number) => 
            <div key={number} className="accountInfoContainer">
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
                        <span>Rewards: {account.isEnrolledInRewards ? 'true' : 'false'} </span>
                    </div>
                </div>
            </div>
        );

    render() {
    return ( 
        this.renderAccounts()
     );
    }
}
 
export default Account;