import React from "react";
import Row from "../components/Row/Row";
import requests from "../components/Row/requests";
import Banner from "../components/Row/Banner";
import Nav from "../components/Row/Nav";

const NetflixShow = () => {
    return (
        <div>
            <Nav />
            <Banner />
            <Row
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetFlixOriginals} isLargeRow={true} />
            <Row title="Trending Now" fetchUrl={requests.fetchTreding} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorroMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanticMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />


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
        </div>
    );
};

export default NetflixShow