import React from 'react';
import User from './User';
import TopArtistsShort from './TopArtistsShort'
import TopTracksShort from './TopTracksShort'
import './Wrapped.scss';

function Wrapped() {
    return (
        <section className="wrapped">
            <User />
            <TopArtistsShort />
            <TopTracksShort />
        </section>
    );
}
export default Wrapped;


