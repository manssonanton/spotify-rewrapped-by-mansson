import React from 'react';
import './Login.scss';
import { accessUrl } from "../Shared/Spotify";
import ScrollAnimation from 'react-animate-on-scroll';

function Login() {
    return (
        <div className="login">
            <div className="right-side">
                <ScrollAnimation delay={200}
                    animateIn='fadeInDown'
                    initiallyVisible={false}>
                    <h1 className="yellow">2021</h1>
                </ScrollAnimation>
                <ScrollAnimation delay={1000}
                    animateIn='fadeInLeftBig'
                    initiallyVisible={false}>
                    <h1 className="green">2020</h1>
                </ScrollAnimation>
                <ScrollAnimation delay={400}
                    animateIn='fadeInUp'
                    initiallyVisible={false}>
                    <h1 className="white">2019</h1>
                </ScrollAnimation>
            </div>
            <div className="left">
                <ScrollAnimation delay={600}
                    animateIn='bounceInRight'
                    initiallyVisible={false}>
                    <h2 className="blue">Ready to rewrap</h2>
                </ScrollAnimation>
                <ScrollAnimation delay={700}
                    animateIn='bounceInLeft'
                    initiallyVisible={false}>
                <h2 className="right-text">Your spotify year</h2>
                </ScrollAnimation>
                <ScrollAnimation delay={800}
                    animateIn='bounceInRight'
                    initiallyVisible={false}>
                <h2 className="green left-text">Before the end</h2>
                </ScrollAnimation>
                <ScrollAnimation delay={900}
                    animateIn='bounceInLeft'
                    initiallyVisible={false}>
                <h2 className="white right-text">Of the year?</h2>
                </ScrollAnimation>
                <ScrollAnimation delay={1900}
                    animateIn='fadeIn'
                    initiallyVisible={false}>
                <h3>This is your spotify highlights rewrapped by Anton.</h3>
                {/* <p>See your top played artists and tracks over the last month and years.</p> */}
                <a href={accessUrl} > Login with Spotify</a>
                </ScrollAnimation>
            </div>
        </div>

    );
}
export default Login;


