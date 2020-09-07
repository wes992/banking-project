import React from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';

const Login = () => {
    

        return ( 
            <div id="appCapsule">

                <div class="section mt-2 text-center">
                    <h1>Log in</h1>
                </div>
                <div class="section mb-5 p-2">

                    <form action="/accounts">
                        <div class="card">
                            <div class="card-body pb-1">
                                <div class="form-group basic">
                                    <div class="input-wrapper">
                                        <label class="label" for="email1">E-mail</label>
                                        <input type="email" class="form-control" id="email1" placeholder="Your e-mail" />
                                        <i class="clear-input"><ion-icon name="close-circle"></ion-icon></i>
                                    </div>
                                </div>
                
                                <div class="form-group basic">
                                    <div class="input-wrapper">
                                        <label class="label" for="password1">Password</label>
                                        <input type="password" class="form-control" id="password1" placeholder="Your password" />
                                        <i class="clear-input"><ion-icon name="close-circle"></ion-icon></i>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="form-links mt-2">
                            <div>
                                <a href="/">Register Now</a>
                            </div>
                            <div><a href="/">Forgot Password?</a></div>
                        </div>

                        <div class="form-button-group  transparent">
                            <Link to='/accounts'>
                                <button type="submit" id='loginBtn' class="btn btn-primary btn-block btn-lg">Log in</button>
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