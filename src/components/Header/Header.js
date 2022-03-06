import React from 'react';
import "./Header.css"
// import { tabLabel } from './constant';
import { Link } from 'react-router-dom';




const Header = () => {
    // { activeTabName, onClickTab }
    // const { QUESTION_1, QUESTION_2, QUESTION_3, QUESTION_4, QUESTION_5, QUESTION_6 } = tabLabel;
    // const renderTabAnswer = (tabLabel, isActive) => (

    // )
    // const renderTabAnswer={}
    function clickMe() {
        const targetDiv = document.getElementById("answer1");
        const btn = document.getElementById("question1");
        btn.onclick = function () {
            if (targetDiv.style.display !== "none") {
                targetDiv.style.display = "none";
            } else {
                targetDiv.style.display = "block";
            }
        };
        const question2 = document.getElementById("answer2");
        const question2btn = document.getElementById("question2");
        question2btn.onclick = function () {
            if (question2.style.display !== "none") {
                question2.style.display = "none";
            } else {
                question2.style.display = "block";
            }
        };

        const question3 = document.getElementById("answer3");
        const question3btn = document.getElementById("question3");
        question3btn.onclick = function () {
            if (question3.style.display !== "none") {
                question3.style.display = "none";
            } else {
                question3.style.display = "block";
            }
        };

        const question4 = document.getElementById("answer4");
        const question4btn = document.getElementById("question4");
        question4btn.onclick = function () {
            if (question4.style.display !== "none") {
                question4.style.display = "none";
            } else {
                question4.style.display = "block";
            }
        };

        const question5 = document.getElementById("answer5");
        const question5btn = document.getElementById("question5");
        question5btn.onclick = function () {
            if (question5.style.display !== "none") {
                question5.style.display = "none";
            } else {
                question5.style.display = "block";
            }
        };

        const question6 = document.getElementById("answer6");
        const question6btn = document.getElementById("question6");
        question6btn.onclick = function () {
            if (question6.style.display !== "none") {
                question6.style.display = "none";
            } else {
                question6.style.display = "block";
            }
        };
    }
    return (

        <body>
            <header class="showcase">

                <nav class="showcase-top">
                    <img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png" />
                    <Link to="/signin">
                        <button class="submit" type="submit">sign In</button>
                    </Link>
                    <select>
                        <option value="/kw/">Hindi</option>
                        <option value="/kw-en/">English</option>
                    </select>
                </nav>

                <div class="get-started-container">
                    <h1>Unlimited movies, TV <br /> shows, and more.</h1>
                    <p class="para-1">Watch anywhere. Cancel anytime.</p>
                    <p class="para-2">Ready to watch? Enter your email to create or restart your membership.</p>
                    <input type="text" name="email" placeholder="Email Address" />
                    <Link to="/netflixshow">
                        <button type="submit" >Get Started </button>

                    </Link>
                </div>
            </header>


            <section class="main-section">

                <div class="section-container">
                    <div class="left-column">
                        <h1>Enjoy on your TV.</h1>
                        <h3>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h3>
                    </div>
                    <div class="right-column">
                        <img src="/images/tv.png" />
                        <video class="video-1" autoplay="" playsinline="" muted="" loop="">
                            <source src="/images/video1.m4v" type="video/mp4" />
                        </video>
                    </div>
                </div>

                <div class="section2-container">
                    <div class="left-column">
                        <img src="/images/download.jpg" />
                        <div class="box">
                            <img class="boxshot" src="/images/boxshot.png" />
                            <p>
                                Stranger Things
                                <br />
                                <a href="#">Downloading...</a>
                            </p>
                            <img class="download-gif"
                                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" />
                        </div>
                    </div>
                    <div class="right-column">
                        <h1>Download your shows to watch offline.</h1>
                        <h3>Save your favorites easily and always have something to watch.</h3>
                    </div>
                </div>

                <div class="section-container">
                    <div class="left-column">
                        <h1>Watch everywhere.</h1>
                        <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</h3>
                    </div>
                    <div class="right-column">
                        <img src="/images/computer.png" />
                        <video class="video-2" autoplay="" playsinline="" muted="" loop="">
                            <source src="/images/video2.m4v" type="video/mp4" />
                        </video>
                    </div>
                </div>

                <div class="section2-container">
                    <div class="left-column">
                        <img src="/images/create_profile.png" />
                    </div>
                    <div class="right-column">
                        <h1>Create profiles for kids.</h1>
                        <h3>Send kids on adventures with their favorite characters in a space made just for them—free with your
                            membership.</h3>
                    </div>
                </div>
            </section>

            <section class="question-container">
                <h1>Frequently Asked Questions</h1>

                <button onClick={clickMe} id="question1" type="button">
                    What is Netflix?
                    <img src="images/plus.png" />
                </button>
                {/* {activeTabName === QUESTION_1 && ( */}
                <div id="answer1" class="answer1">
                    <p>
                        Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime,
                        documentaries, and more on thousands of internet-connected devices.
                        <br /><br />
                        You can watch as much as you want, whenever you want without a single commercial – all for one low
                        monthly price. There's always something new to discover and new TV shows and movies are added every
                        week!
                    </p>
                </div>
                {/* )}  */}
                <br />

                <button onClick={clickMe} id="question2" type="button">
                    How much does Netflix cost?
                    <img src="images/plus.png" />
                </button>
                <div id="answer2" class="answer2">
                    <p>
                        Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed
                        monthly fee. Plans range from USD7.99 to USD14.99 a month. No extra costs, no contracts.
                    </p>
                </div>
                <br />

                <button onClick={clickMe} id="question3" type="button">
                    Where can I watch?
                    <img src="images/plus.png" />
                </button>
                <div id="answer3" class="answer3">
                    <p>
                        Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com
                        from your personal computer or on any internet-connected device that offers the Netflix app, including
                        smart TVs, smartphones, tablets, streaming media players and game consoles.
                        <br /><br />
                        You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to
                        watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                    </p>
                </div>
                <br />

                <button onClick={clickMe} id="question4" type="button">
                    How do I cancel?
                    <img src="images/plus.png" />
                </button>
                <div id="answer4" class="answer4">
                    <p>
                        Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account
                        online in two clicks. There are no cancellation fees start or stop your account anytime.
                    </p>
                </div>
                <br />

                <button onClick={clickMe} id="question5" type="button">
                    What can I watch on Netflix?
                    <img src="images/plus.png" />
                </button>
                <div id="answer5" class="answer5">
                    <p>
                        Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix
                        originals, and more. Watch as much as you want, anytime you want.
                    </p>
                </div>
                <br />

                <button onClick={clickMe} id="question6" type="button">
                    Is Netflix good for kids?
                    <img src="images/plus.png" />
                </button>
                <div id="answer6" class="answer6">
                    <p>
                        The Netflix Kids experience is included in your membership to give parents control while kids enjoy
                        family-friendly TV shows and movies in their own space.
                        <br /><br />
                        Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of
                        content kids can watch and block specific titles you dont want kids to see.
                    </p>
                </div>
            </section>

            <div class="email-address-container">
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <input type="text" name="email" placeholder="Email Address" />
                <Link to="/netflixshow">
                    <button type="submit">Get Started </button>
                </Link>
            </div>

            <footer>
                <h5>Questions? Contact us.</h5>
                <div class="content">
                    <div class="middle box">
                        <div><a href="#">FAQ</a></div>
                        <div><a href="#">Investor Relations</a></div>
                        <div><a href="#">Privacy</a></div>
                        <div><a href="#">Speed Test</a></div>
                        <br /><br />
                        <select>
                            <option value="/kw-en/">English</option>
                            <option value="/kw/">India</option>
                        </select>
                        <br /><br />
                        <p>Netflix India</p>
                    </div>

                    <div class="middle box">
                        <div><a href="#">Help Center</a></div>
                        <div><a href="#">Jobs</a></div>
                        <div><a href="#">Cookie Preferences</a></div>
                        <div><a href="#">Legal Notices</a></div>
                    </div>

                    <div class="middle box">
                        <div><a href="#">Account</a></div>
                        <div><a href="#">Ways to Watch</a></div>
                        <div><a href="#">Corporate Information</a></div>
                        <div><a href="#">Mobile Application Design</a></div>
                        <div><a href="#">Only on Netflix</a></div>
                    </div>

                    <div class="middle box">
                        <div><a href="#">Media Center</a></div>
                        <div><a href="#">Terms of Use</a></div>
                        <div><a href="#">Contact Us</a></div>
                    </div>
                </div>

            </footer>

        </body>

    );
};

export default Header;