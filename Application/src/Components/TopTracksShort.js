import React from 'react';
import { useStateValue } from "./StateProvider";
import './TopTracks.scss';

function TopTracksShort() {
    const [{ top_tracks_short }] = useStateValue();
    return (
        <div className="topTracks">
            <div className="tracks-details">
                <div className="left">
                </div>
                <div className="right">
                </div>

            </div>
        </div>
    );
}
export default TopTracksShort;

