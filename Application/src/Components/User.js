import React from 'react';
import { useStateValue } from "./StateProvider";
import './User.scss';
import ScrollAnimation from 'react-animate-on-scroll';

function User({ spotify }) {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="user">
            <div className="user-details">
                <ScrollAnimation delay={300}
                    animateIn='slideInLeft'
                    initiallyVisible={false}>
                    <h2 className="pink">Welcome {user?.display_name}</h2>
                </ScrollAnimation>
                <ScrollAnimation delay={700}
                    animateIn='slideInRight'
                    initiallyVisible={false}>
                    <h2 className="green">You have {user?.followers.total} followers.</h2>
                </ScrollAnimation>
                <ScrollAnimation delay={1100}
                    animateIn='slideInLeft'
                    initiallyVisible={false}>
                    <h2 className="yellow">You are a {user?.product} user</h2>
                </ScrollAnimation>
                <ScrollAnimation delay={1500}
                    animateIn='slideInRight'
                    initiallyVisible={false}>
                    <h2 className="white">Here is your Spotify year.</h2>
                </ScrollAnimation>
                {/* <a href={user?.external_urls.spotify}>Link to spotify profile</a> */}
                {/* <div className="right">
                    <img alt={user?.display_name} src={user?.images[0].url} />

                </div> */}

            </div>
        </div>
    );
}
export default User;

