import React from 'react';
import './WorkPage.css';

function WorkPage() {
  return (
    <div id="workPage">
        {/* Nav : disappear animatino on scroll */}
        <nav>
            <div className="navLogo__container">
                <img
                    src="https://www.xpobrands.com.au/wp-content/themes/xpo-public/images/XPO-Logo.svg"
                    alt=""
                    />
            </div>
            <ul className="navLinks">
                <li className="navLink">Work</li>
                <li className="navLink">People</li>
                <li className="navLink">Ambassadors</li>
                <li className="navLink">Contact</li>
            </ul>
        </nav>
        {/* Header Info */}
        <header>
            <h1 className="headerTitle">Sponsorships & Partnerships</h1>
            <p className="headerParagraph">We have a proven track record of negotiating complementary partnerships and sponsorships. As a result, this has generated millions of consumer engagements and media impressions for our clients.
There are a wealth of brands, retailers and events that love mutually beneficial opportunities to extend reach and add value to their offer. Firstly, our job is to identify the perfect strategic partners. Then, we tell them your story and unite you both with a robust partnership plan that makes everyone happy. Finally, we’ll get the engagements rolling in for your next experiential, sampling or shopper activation. Partnered with our event planning expertise, a tight partnership creates the ideal mix to get the party started.</p>
        </header>
        {/* video banner */}
        <section id="videoBanner">
            <div className="videoBanner__container">
                <img
                    className="videoBanner__img"
                    src="http://www.xpobrands.com.au/wp-content/uploads/2020/08/sponsorships-partnerships-still.jpg"
                    alt=""
                />
                <div className="videoBanner__icon"><i class="fa-brands fa-youtube"></i></div>
                <div className="videoBanner__overlay"></div>
            </div>
        </section>
        {/* images : on hover, bring up information instead of having to click, and then on click expand image */}
        {/* other work section nav */}
        {/* footer */}
    </div>
  )
}

export default WorkPage