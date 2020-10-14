import React from 'react';
import { useStateValue } from "./StateProvider";
import './User.scss';

function User({ spotify }) {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="user">
            <header>
                <span>Spotify rewrapped by Anton</span>
                <div className="bar"></div>
            </header>
            <div className="user-details">
                <div className="left">
                    <h2>Welcome {user?.display_name}</h2>
                    <h2>You currently have {user?.followers.total} followers on Spotify.</h2>
                    <h2>You are a {user?.product} user and here is your music year.</h2>
                    <a href={user?.external_urls.spotify}>Link to spotify profile</a>
                </div>
                <div className="right">
                    <img alt={user?.display_name} src={user?.images[0].url} />

                </div>

            </div>
        </div>
    );
}
export default User;

