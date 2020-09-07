import React from 'react';

import monthlyBills from './monthlyBills';

const Bills = () => {

    return(
      <div>
        <div className="appHeader">
          <div className="left">
              <a href="/accounts" className="headerButton goBack">
                <h5><strong>MyBank &trade;</strong></h5>
              </a>
          </div>
          <div className="pageTitle">
              Monthly Bills
          </div>
          <div className="right">
              <a href="/accounts" className="headerButton">
                  <ion-icon name="add-outline"></ion-icon>
              </a>
          </div>
        </div>

    <div className="extraHeader pr-0 pl-0">
        <ul className="nav nav-tabs lined" role="tablist">
            <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="/accountswaiting" role="tab">
                    Upcoming
                </a>
            </li>
        </ul>
    </div>


    <div id="appCapsule" className="extra-header-active">

        <div className="section tab-content mt-2 mb-1">

            <div className="tab-pane fade show active" id="waiting" role="tabpanel">
                <div className="row">
                  {monthlyBills.map((bill, index) => {
                    return (
                    <div className="col-6 mb-2" key={index}>
                        <div className="bill-box billList">
                            <div className="img-wrapper">
                                <img src="http://via.placeholder.com/50x50" alt="img" className="image-block imaged w48"/>
                            </div>
                            <div className="price">{bill.price}</div>
                            <p>{bill.name}</p>
                            <a href="/accounts" className="btn btn-primary btn-block btn-sm">PAY NOW</a>
                        </div>
                    </div> )
                  })}
                </div>
            </div>
        </div>
    </div>
  </div>
    )
}

export default Bills;