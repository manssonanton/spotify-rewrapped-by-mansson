import React from 'react';
import { useStateValue } from "./StateProvider";
import './NewReleases.scss';
import ScrollAnimation from 'react-animate-on-scroll';

function NewReleases() {
    const [{ top_artists_short }] = useStateValue();

    return (
            <div className="commingSoon">
                <ScrollAnimation
                    animateIn='fadeIn'
                    initiallyVisible={false}>
                    <h2>More comming soon...</h2>
                </ScrollAnimation>
            </div>
    );
}
export default NewReleases;

