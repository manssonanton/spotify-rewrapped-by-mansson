import React from 'react';
import { useStateValue } from "./StateProvider";
import './TopArtists.scss';

function TopArtistsShort() {
    const [{ top_artists_short, top_tracks_short }, dispatch] = useStateValue();

    // const artists = top_artists_short.items.map((artist) => {

    //     return (
    //         <ArtistList artist={artist} />
    //     );
    // });

    return (
        <div className="topArtists">
            {/* <header>
                <span>Past Month</span>
                <div className="bar"></div>
            </header> */}
            <div >
                <div className="artist-details">
                    <h2>Top Artists</h2>
                    {top_artists_short?.items.map((item) => (
                        <ArtistList key={item.id} artist={item} />
                    ))}
                </div>
                <div className="tracks-details">
                    <h2>Top Tracks</h2>
                    {top_tracks_short?.items.map((item) => (
                        <ArtistList key={item.id} artist={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}


function ArtistList(artist) {
    console.log(artist.artist);
    return (
        <li className="artist">
            <div className="artist-card">
                {/* <img src={artist.artist.images[0].url}></img> */}
                {artist.artist.name}
            </div>

        </li>
    );
}
export default TopArtistsShort;

