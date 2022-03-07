import React from 'react'
import { Link } from 'react-router-dom';
import "./SignInPage.css";


const SignInPage = () => {
    return (

        <body>
            <div class="upper">
                <div class="logo">
                    <Link to="/">
                        <img src="images/logo.png" class="img-logo" />
                    </Link>
                </div>
                <div class="login-div">
                    <form class="login">
                        <h1>Sign In</h1>

                        <div class="input-text">
                            <input type="text" id="inputEmail" name="email" placeholder="Email or phone number" required />
                            {/* onfocus="inputOnFocus(this)" onblur="inputOnBlur(this)"
                            <div class="warning-input" id="warningEmail">
                                Please enter a valid email or phone number.
                            </div> */}
                        </div>

                        <div class="input-text">
                            <input type="password" id="inputPassword" name="password" placeholder="Password" required />
                            {/* onfocus="inputOnFocus(this)" onblur="inputOnBlur(this)"  */}
                            {/* <div class="warning-input" id="warningPassword">
                                Your password must contain between 4 and 60 characters.
                            </div> */}
                        </div>

                        <div>

                            <Link to="/netflixshow">
                                <button class="signin-button">Sign In</button>
                            </Link>

                        </div>
                        <div class="remember-flex">
                            <div>
                                <input type="checkbox" />
                                <label class="color_text">Remember me</label>
                            </div>
                            <div class="help">
                                <a class="color_text" href="#">Need help?</a>
                            </div>
                        </div>

                        <div class="new-members">
                            New to Netflix? <b class="signup-link">Sign up now</b>.
                        </div>
                        <div class="protection color_link help">
                            This page is protected by Google reCAPTCHA to ensure you're not a bot. <b className='learn-more'>Learn more.</b>
                        </div>
                    </form>
                </div>
            </div>
            <div class="bottom">
                <div class="bottom-width">
                    Questions? Call <a href="tel:1-844-542-4813" class="tel-link">1-844-542-4813</a>
                    <div>
                        <ul class="bottom-flex">
                            <li class="list-bottom">
                                <a href="#" class="link-bottom">
                                    FAQ
                                </a>
                            </li>
                            <li class="list-bottom">
                                <a href="#" class="link-bottom">
                                    Help Center
                                </a>
                            </li>
                            <li class="list-bottom">
                                <a href="#" class="link-bottom">
                                    Terms of Use
                                </a>
                            </li>
                            <li class="list-bottom">
                                <a href="#" class="link-bottom">
                                    Privacy
                                </a>
                            </li>
                            <li class="list-bottom">
                                <a href="#" class="link-bottom">
                                    Cookie Preferences
                                </a>
                            </li>
                            <li class="list-bottom">
                                <a href="#" class="link-bottom">
                                    Corporate information
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <select class="fa select-language">
                            <option> &#xf0ac; &nbsp;&nbsp;&nbsp;English</option>
                            <option> &#xf0ac; &nbsp;&nbsp;&nbsp;Hindi</option>
                        </select>
                    </div>
                </div>
            </div>
            <script src="js/script.js"></script>
        </body>



    );
};

export default SignInPage;