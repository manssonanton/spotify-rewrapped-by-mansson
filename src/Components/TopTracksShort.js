import React from 'react';
import { useStateValue } from "./StateProvider";
import './TopTracks.scss';
import ScrollAnimation from 'react-animate-on-scroll';

function TopTracksShort() {
    const [{ top_tracks_short }] = useStateValue();
    return (
        
        <div className="topTracks">
                <ScrollAnimation delay={600}
                    animateIn='bounceIn'
                    initiallyVisible={true}>
                    <h2>Top Tracks last month</h2>
                </ScrollAnimation>
                <div className="artist-details">
                <div className="Honerable-mentions">
                        {top_tracks_short?.items.map((item) => (
                            <TracksList key={item.id} tracks={item} />
                        ))}
                    </div>

                    <div className="best-artist">
                        <div className="image-details">
                            <ScrollAnimation delay={1600}
                                animateIn='bounceInLeft'
                                initiallyVisible={false}>
                                <img src={top_tracks_short?.items[4].album.images[0].url} className="image-4"></img>
                            </ScrollAnimation>
                            <ScrollAnimation delay={1500}
                                animateIn='bounceInLeft'
                                initiallyVisible={false}>
                                <img src={top_tracks_short?.items[3].album.images[0].url} className="image-3"></img>
                            </ScrollAnimation>
                            <ScrollAnimation delay={1300}
                                animateIn='bounceInLeft'
                                initiallyVisible={false}>
                                <img src={top_tracks_short?.items[2].album.images[0].url} className="image-2"></img>
                            </ScrollAnimation>
                            <ScrollAnimation delay={1100}
                                animateIn='bounceInLeft'
                                initiallyVisible={false}>
                                <img src={top_tracks_short?.items[1].album.images[0].url} className="image-1"></img>
                            </ScrollAnimation>
                            <ScrollAnimation delay={900}
                                animateIn='bounceInLeft'
                                initiallyVisible={false}>
                                <img src={top_tracks_short?.items[0].album.images[0].url} className="image-0"></img>
                            </ScrollAnimation>
                        </div>
                    </div>

                </div>
            </div>

    );
}

function TracksList(tracks) {
    // console.log("test");
    // console.log(tracks);
    return (
        <ScrollAnimation
            animateIn='bounceIn'>
            <li className="artist">
                {/* <img src={tracks.tracks.album.images[0].url}></img> */}
                <p>{tracks.tracks.name}</p>
            </li>
        </ScrollAnimation>

    );
}
export default TopTracksShort;

