import React from 'react';

import monthlyBills from './monthlyBills';

const Bills = () => {

    return(
      <div>
        {/* <div classNameName="appHeader">
          <div classNameName="left">
            <a href="/accounts" className="headerButton goBack">
              <ion-icon name="chevron-back-outline"></ion-icon>
            </a>
          </div>
          <div classNameName="pageTitle">Bills</div>
          <div classNameName="right">
            <a href="/accounts" classNameName="headerButton">
              <ion-icon
                classNameName="icon"
                name="notifications-outline"
              ></ion-icon>
              <span classNameName="badge">4</span>
            </a>
          </div>
        </div> */}
        <div className="appHeader">
        <div className="left">
            <a href="/accounts" className="headerButton goBack">
              <h5>MyBank &trade;</h5>
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
                  {monthlyBills.map(bill => {
                    return (
                    <div className="col-6 mb-2">
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
                    {/* <div className="col-6 mb-2">
                        <div className="bill-box">
                            <div className="img-wrapper">
                                <img src="assets/img/sample/brand/2.jpg" alt="img" className="image-block imaged w48"/>
                            </div>
                            <div className="price">$ 8</div>
                            <p>Monthly Payment </p>
                            <a href="/accounts" classNameName="btn btn-primary btn-block btn-sm">PAY NOW</a>
                        </div>
                    </div>
                    <div className="col-6 mb-2">
                        <div className="bill-box">
                            <div className="img-wrapper">
                                <img src="assets/img/sample/brand/3.jpg" alt="img" className="image-block imaged w48"/>
                            </div>
                            <div className="price">$ 15</div>
                            <p>Envato Elements Subscription</p>
                            <a href="/accounts" className="btn btn-primary btn-block btn-sm">PAY NOW</a>
                        </div>
                    </div>
                    <div className="col-6 mb-2">
                        <div className="bill-box">
                            <div className="img-wrapper">
                                <img src="assets/img/sample/brand/4.jpg" alt="img" className="image-block imaged w48"/>
                            </div>
                            <div className="price">$ 49</div>
                            <p>Subscription Fees</p>
                            <a href="/accounts" className="btn btn-primary btn-block btn-sm">PAY NOW</a>
                        </div>
                    </div>
                    <div className="col-6 mb-2">
                        <div className="bill-box">
                            <div className="img-wrapper">
                                <img src="assets/img/sample/brand/5.jpg" alt="img" className="image-block imaged w48"/>
                            </div>
                            <div className="price">$ 12</div>
                            <p>Pro Membership</p>
                            <a href="/accounts" className="btn btn-primary btn-block btn-sm">PAY NOW</a>
                        </div>
                    </div>
                    <div className="col-6 mb-2">
                        <div className="bill-box">
                            <div className="img-wrapper">
                                <img src="assets/img/sample/brand/1.jpg" alt="img" className="image-block imaged w48"/>
                            </div>
                            <div className="price">$ 14</div>
                            <p>Prime Monthly Subscription</p>
                            <a href="/accounts" className="btn btn-primary btn-block btn-sm">PAY NOW</a>
                        </div>
                    </div>
                    <div className="col-6 mb-2">
                        <div className="bill-box">
                            <div className="img-wrapper">
                                <img src="assets/img/sample/brand/2.jpg" alt="img" className="image-block imaged w48"/>
                            </div>
                            <div className="price">$ 8</div>
                            <p>Monthly Payment </p>
                            <a href="/accounts" className="btn btn-primary btn-block btn-sm">PAY NOW</a>
                        </div>
                    </div>
                    <div className="col-6 mb-2">
                        <div className="bill-box">
                            <div className="img-wrapper">
                                <img src="assets/img/sample/brand/3.jpg" alt="img" className="image-block imaged w48"/>
                            </div>
                            <div className="price">$ 15</div>
                            <p>Envato Elements Subscription</p>
                            <a href="/accounts" className="btn btn-primary btn-block btn-sm">PAY NOW</a>
                        </div>
                    </div> */}
                </div>
            </div>



            <div className="tab-pane fade" id="paid" role="tabpanel">
                <div className="row">
                    <div className="col-6 mb-2">
                        <div className="bill-box">
                            <div className="img-wrapper">
                                <img src="/bills" alt="img" className="image-block imaged w48"/>
                            </div>
                            <div className="price">$ 14</div>
                            <p>Prime Monthly Subscription</p>
                            <a href="/accounts" className="btn btn-primary btn-block btn-sm">DETAIL</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
        </div>
    )
}

export default Bills;