import React from 'react';
import { useStateValue } from "./StateProvider";
import './TopArtists.scss';

function TopArtistsShort() {
    const [{ top_artists_short, top_tracks_short }, dispatch] = useStateValue();

    return (
        <div className="topArtists">
            <h2>Top Artists last month</h2>
                <div className="artist-details">
                
                    <div className="best-artist">
                        <img src={top_artists_short?.items[0].images[0].url}></img>
                        <h3>{top_artists_short?.items[0].name}</h3>
                    </div>
                    <div className="Honerable mentions">
                        {top_artists_short?.items.map((item) => (
                            <ArtistList key={item.id} artist={item} />
                        ))}
                    </div>
                </div>
        </div>
    );
}


function ArtistList(artist) {
    // console.log(artist.artist);
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

