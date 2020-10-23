import React from 'react';
import { useStateValue } from "./StateProvider";
import './TopTracks.scss';
import ScrollAnimation from 'react-animate-on-scroll';

function TopTracksShort() {
    const [{ top_tracks_short }] = useStateValue();
    return (
        <ScrollAnimation
            animateIn='slideInUp'
            initiallyVisible={false}>
            <div className="topTracks">
                <div className="tracks-details">
                    {top_tracks_short?.items.map((item) => (
                        <TracksList key={item.id} tracks={item} />
                    ))}
                </div>
            </div>
        </ScrollAnimation>
    );
}

function TracksList(tracks) {
    // console.log("test");
    // console.log(tracks);
    return (
        <ScrollAnimation
            animateIn='bounceIn'>
            <li className="tracks">
                <img src={tracks.tracks.album.images[0].url}></img>
                <p>{tracks.tracks.name}</p>
            </li>
        </ScrollAnimation>

    );
}
export default TopTracksShort;

