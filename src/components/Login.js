import React from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';

const Login = () => {
    

        return ( 
            <div id="appCapsule">
                <div className="heroContainer">
                    <h2>Welcome to <strong>MyBank&trade;</strong></h2>
                    <h5>Your Ally in Digital Banking</h5>
                </div>
                <div className="formTitle section mt-2 text-center">
                    <h3>Please Log in</h3>
                </div>
                <div className="section mb-5 p-2">

                    <form action="/accounts">
                        <div className="card">
                            <div className="card-body pb-1">
                                <div className="form-group basic">
                                    <div className="input-wrapper">
                                        <label className="label" htmlFor="email1">E-mail</label>
                                        <input type="email" className="form-control" id="email1" placeholder="Your e-mail" />
                                        <i className="clear-input"><ion-icon name="close-circle"></ion-icon></i>
                                    </div>
                                </div>
                
                                <div className="form-group basic">
                                    <div className="input-wrapper">
                                        <label className="label" htmlFor="password1">Password</label>
                                        <input type="password" className="form-control" id="password1" placeholder="Your password" />
                                        <i className="clear-input"><ion-icon name="close-circle"></ion-icon></i>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="form-links mt-2">
                            <div>
                                <a href="/">Register Now</a>
                            </div>
                            <div><a href="/">Forgot Password?</a></div>
                        </div>

                        <p className='loginParagraph small'>For the purposes of this demo, login form and links do nothing. Click login to proceed</p>

                        <div className="form-button-group  transparent">
                            <Link to='/accounts'>
                                <button type="submit" id='loginBtn' className="btn btn-primary btn-block btn-lg">Log in</button>
                            </Link>
                        </div>

                    </form>
                </div>

            </div>

         );
}
 
export default Login;

$(".clear-input").click(function () {
    $(this).parent(".input-wrapper").find(".form-control").focus();
    $(this).parent(".input-wrapper").find(".form-control").val("");
    $(this).parent(".input-wrapper").removeClass("not-empty");
});
// active
$(".form-group .form-control").focus(function () {
    $(this).parent(".input-wrapper").addClass("active");
}).blur(function () {
    $(this).parent(".input-wrapper").removeClass("active");
})
// empty check
$(".form-group .form-control").keyup(function () {
    var inputCheck = $(this).val().length;
    if (inputCheck > 0) {
        $(this).parent(".input-wrapper").addClass("not-empty");
    }
    else {
        $(this).parent(".input-wrapper").removeClass("not-empty");
    }
});