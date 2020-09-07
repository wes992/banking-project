import React from 'react';


const Settings = () => {

    return(
        <div>
    
        <div className="appHeader">
            <div className="left">
                <a href="/accounts" className="headerButton goBack">
                <h5><strong>MyBank &trade;</strong></h5>
                </a>
            </div>
            <div className="pageTitle">
                Settings
            </div>
            <div className="right">
                <a href="/accounts" className="headerButton">
                    <ion-icon className="icon" name="notifications-outline"></ion-icon>
                    <span className="badge">4</span>
                </a>
            </div>
        </div>


        <div id="appCapsule">
            
            <div className="section mt-3 text-center">
                <div className="avatar-section">
                    <a href="/settings">
                    <ion-icon name="person" className='imaged w75 rounded'></ion-icon>
                        <span className="button">
                            <ion-icon name="camera-outline"></ion-icon>
                        </span>
                    </a>
                </div>
            </div>
    
            <div className="listview-title mt-1">Notifications</div>
            <ul className="listview image-listview text inset">
                <li>
                    <div className="item">
                        <div className="in">
                            <div>
                                Payment Alert
                                <div className="text-muted">
                                    Send notification when new payment received
                                </div>
                            </div>
                            <div className="custom-control custom-switch">
                                <input type="checkbox" className="custom-control-input" id="customSwitch4" defaultChecked/>
                                <label className="custom-control-label" htmlFor="customSwitch4"></label>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="/settings" className="item">
                        <div className="in">
                            <div>Notification Sound</div>
                            <span className="text-primary">Beep</span>
                        </div>
                    </a>
                </li>
            </ul>
    
            <div className="listview-title mt-1">Profile Settings</div>
            <ul className="listview image-listview text inset">
                <li>
                    <a href="/settings" className="item">
                        <div className="in">
                            <div>Change Username</div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/settings" className="item">
                        <div className="in">
                            <div>Update E-mail</div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/settings" className="item">
                        <div className="in">
                            <div>Address</div>
                            <span className="text-primary">Edit</span>
                        </div>
                    </a>
                </li>
                <li>
                    <div className="item">
                        <div className="in">
                            <div>
                                Private Profile
                            </div>
                            <div className="custom-control custom-switch">
                                <input type="checkbox" className="custom-control-input" id="customSwitch2" />
                                <label className="custom-control-label" htmlFor="customSwitch2"></label>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
    
            <div className="listview-title mt-1">Security</div>
            <ul className="listview image-listview text mb-2 inset">
                <li>
                    <a href="/settings" className="item">
                        <div className="in">
                            <div>Update Password</div>
                        </div>
                    </a>
                </li>
                <li>
                    <div className="item">
                        <div className="in">
                            <div>
                                2 Step Verification
                            </div>
                            <div className="custom-control custom-switch">
                                <input type="checkbox" className="custom-control-input" id="customSwitch3" defaultChecked/>
                                <label className="custom-control-label" htmlFor="customSwitch3"></label>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="/" className="item">
                        <div className="in">
                            <div>Log out all devices</div>
                        </div>
                    </a>
                </li>
            </ul>
            
    
        </div>
        </div>
    )
}

export default Settings;