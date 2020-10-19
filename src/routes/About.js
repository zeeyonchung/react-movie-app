import React from "react";
import './About.css';

function About(props) {
    console.log(props);
    return (
        <div className="about__container">
            <span>
                "Not a shred of evidence exists that life is serious."
            </span>
            <span>- Brendan Gill</span>
        </div>
    );
}

export default About;