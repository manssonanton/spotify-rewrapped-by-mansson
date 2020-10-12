import React from 'react';
import { useStateValue } from "./StateProvider";
import './User.scss';

function User({ spotify }) {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="user">
            <h1>Who are you?</h1>
            <div className="user_details">
                <div className="left">
                    <h2>{user?.display_name}</h2>
                    <h3>Followers: {user?.followers.total}</h3>
                    <h3>{user?.product}</h3>
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

