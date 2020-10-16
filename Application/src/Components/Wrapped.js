import React, { useEffect } from 'react';
import User from './User';
import TopArtistsShort from './TopArtistsShort'
import TopTracksShort from './TopTracksShort'
import './Wrapped.scss';
import { useStateValue } from "./StateProvider";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

function Wrapped() {

    const [{ scrollnumber }, dispatch] = useStateValue();
    let prev = 1;

    useEffect(() => {
        if (prev < scrollnumber) {
            prev = scrollnumber;
            scroller.scrollTo(scrollnumber, {
                duration: 1000,
                delay: 100,
                smooth: true,
            })
        } else {
            prev = scrollnumber;
            scroller.scrollTo(scrollnumber, {
                duration: 1000,
                delay: 100,
                smooth: true,
            })
        }

    }, [scrollnumber]);


    const scrollDown = () => {
        if (scrollnumber < 15) {
        dispatch({
            type: "SCROLL_DOWN",
            scrollnumber: (scrollnumber + 1),
        });
    }
    };
    const scrollUp = () => {
        if (scrollnumber > 1) {
            dispatch({
                type: "SCROLL_UP",
                scrollnumber: (scrollnumber - 1),
            });
        }
    };

    return (
        <section className="wrapped">
            <div className="logo">
                <p>Rewrapped by Anton</p>
            </div>
            <div className="scroll">
                <a onClick={scrollUp} ><ExpandLessIcon fontSize="large" /></a>
                <p>{scrollnumber} / 15</p>
                <a onClick={scrollDown} ><ExpandMoreIcon fontSize="large" /></a>
            </div>
            <div className="socialMedia">
                <a href=""><GitHubIcon fontSize="small" /></a>
                <a href=""><LinkedInIcon fontSize="small" /></a>
                <a href=""><InstagramIcon fontSize="small" /></a>
            </div>
            <div className="components">
                <Element name="1" ><User /></Element>
                <Element name="2" ><TopArtistsShort /></Element>
                <Element name="3" ><TopTracksShort /></Element>

                {/* <TopTracksShort name="3" /> */}
            </div>
        </section>
    );
}

export default Wrapped;


