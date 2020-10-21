import React from 'react';
import { useStateValue } from "./StateProvider";
import './TopArtists.scss';
import ScrollAnimation from 'react-animate-on-scroll';

function TopArtistsShort() {
    const [{ top_artists_short, top_tracks_short }, dispatch] = useStateValue();

    return (
        <ScrollAnimation delay={100}
            animateIn='fadeInUpBig'
            initiallyVisible={false}>

            <div className="topArtists">
                <ScrollAnimation delay={600}
                    animateIn='bounceIn'
                    initiallyVisible={false}>
                    <h2>Top Artists last month</h2>
                </ScrollAnimation>
                <div className="artist-details">
                    <div className="best-artist">
                        <div className="image-details">
                            <ScrollAnimation delay={1600}
                                animateIn='bounceInLeft'
                                initiallyVisible={false}>
                                <img src={top_artists_short?.items[4].images[0].url} className="image-4"></img>
                            </ScrollAnimation>
                            <ScrollAnimation delay={1500}
                                animateIn='bounceInLeft'
                                initiallyVisible={false}>
                                <img src={top_artists_short?.items[3].images[0].url} className="image-3"></img>
                            </ScrollAnimation>
                            <ScrollAnimation delay={1300}
                                animateIn='bounceInLeft'
                                initiallyVisible={false}>
                                <img src={top_artists_short?.items[2].images[0].url} className="image-2"></img>
                            </ScrollAnimation>
                            <ScrollAnimation delay={1100}
                                animateIn='bounceInLeft'
                                initiallyVisible={false}>
                                <img src={top_artists_short?.items[1].images[0].url} className="image-1"></img>
                            </ScrollAnimation>
                            <ScrollAnimation delay={900}
                                animateIn='bounceInLeft'
                                initiallyVisible={false}>
                                <img src={top_artists_short?.items[0].images[0].url} className="image-0"></img>
                            </ScrollAnimation>
                        </div>
                    </div>
                    <div className="Honerable-mentions">
                        {top_artists_short?.items.map((item) => (
                            <ArtistList key={item.id} artist={item} />
                        ))}
                    </div>
                </div>
            </div>
        </ScrollAnimation>
    );
}


function ArtistList(artist) {
    return (
        <ScrollAnimation delay={1200}
            animateIn='bounceIn'
            initiallyVisible={false}>
            <li className="artist">
                {/* <img src={artist.artist.images[0].url}></img> */}
                {artist.artist.name}
            </li>
        </ScrollAnimation>

    );
}
export default TopArtistsShort;

