import React from 'react';
import './Login.scss';
import { accessUrl } from "../Shared/Spotify";

function Login() {
    return (
        <div className="login">
            <div className="right">
                <h1 className="yellow">2021</h1>
                <h1 className="green">2020</h1>
                <h1 className="blue">2019</h1>
            </div>
            <div className="left">
                <h2 className="blue">Ready to rewrap</h2>
                <h2 className="right-text">Your spotify year</h2>
                <h2 className="green left-text">Before the end</h2>
                <h2 className="blue right-text">Of the year?</h2>
                <h3>This is your spotify highlights re-wrapped by Anton.</h3>
                {/* <p>See your top played artists and tracks over the last month and years.</p> */}
                <a href={accessUrl} > Login with Spotify</a>
            </div>
        </div>

    );
}
export default Login;


