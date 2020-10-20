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
                    <div className="image-details">
                        <img src={top_artists_short?.items[4].images[0].url} className="image-4"></img>
                        <img src={top_artists_short?.items[3].images[0].url} className="image-3"></img>
                        <img src={top_artists_short?.items[2].images[0].url} className="image-2"></img>
                        <img src={top_artists_short?.items[1].images[0].url} className="image-1"></img>
                        <img src={top_artists_short?.items[0].images[0].url} className="image-0"></img>
                    </div>
                </div>
                <div className="Honerable-mentions">
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
                {/* <img src={artist.artist.images[0].url}></img> */}
                {artist.artist.name}
        </li>
    );
}
export default TopArtistsShort;

