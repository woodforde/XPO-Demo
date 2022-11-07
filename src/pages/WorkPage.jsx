import React, { useEffect, useState } from 'react';
import './WorkPage.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImagePreview from '../components/ImagePreview';
import { useNavigate } from 'react-router-dom';

function WorkPage() {

    const exampleInformation = [
        {
            url: "https://www.xpobrands.com.au/wp-content/uploads/2020/06/Partnerships-Sponsorship-GoldenCircle-Experiential-Event-InMall-InfluencerEvent.jpg",
            info: "Sharing the sunshine with our long standing collaboration with Golden Circle and Sunnylife",
        },
        {
            url: "https://www.xpobrands.com.au/wp-content/uploads/2020/06/Sponsorships-Nestle-BlackRoast-ToughMudder-BrandedActivation-OnGround-SocialMedia-BrandExperience.jpg",
            info: "Bringing an intense taste to an intense race with the Nescafé Blend 43 Black Roast x Tough Mudder sponsorship",
        },
        {
            url: "https://www.xpobrands.com.au/wp-content/uploads/2020/06/Sponsorships-Afl-Milo-Activation-OnGround-BrandTalent-BrandAssets-Experiential-Partnership-Experience-Memorable-InSt.jpg",
            info: "Supporting the next generation of AFL superstars thanks to MILO's partnership with Auskick",
        },
        {
            url: "https://www.xpobrands.com.au/wp-content/uploads/2020/06/Sponsorships-TVWeek-Nescafe-Experience-BrandActivation-BrandAmbassador-BrandTalent-Sampling-TVWeek-NescafeGold-GoldL.jpg",
            info: "Bringing some Gold to the TV Week logies with our Nescafé partnership",
        },
        {
            url: "https://www.xpobrands.com.au/wp-content/uploads/2020/06/Partnerships-GoldenCircle-Sunnylife-Summer-BrandActivation-GoldCoast-ShoppingCentreTakeOver-Events-PR-Influencers-So.jpg",
            info: "Sharing the sunshine with our long standing collaboration with Golden Circle and Sunnylife",
        },
        {
            url: "https://www.xpobrands.com.au/wp-content/uploads/2020/06/Sponsorships-TVWeek-Logies-Nescafe-Experiential-Partnership-LogieRedCarpet-GoldCarpet-Experience-SocialMedia-Influen.jpg",
            info: "Taking Nescafé Gold to where all things shine at the TV Week Gold Logie Awards",
        },
        {
            url: "https://www.xpobrands.com.au/wp-content/uploads/2020/06/Partnerships-AFL-HalfTimeActivation-BrandExperience-InStadium-OnGround-Experience-ExperientialMarketing-MILO.jpg",
            info: "Celebrating MILO's partnership with",
        },
        {
            url: "https://www.xpobrands.com.au/wp-content/uploads/2020/06/Sponsorships-Nestle-BlackRoast-ToughMudder-Experience-Partnership-Experience-ExperientialMarketing-BrandAmbassadors-.jpg",
            info: "Bringing an intense taste to an intense race with the Nescafé Blend 43 Black Roast x Tough Mudder sponsorship",
        },
        {
            url: "https://www.xpobrands.com.au/wp-content/uploads/2020/06/Partnerships-Freedom-Nescafe-Sampling-Experience-GiftwithPurchase-NescafeGold-GiftCard-PrizePack-GWP.jpg",
            info: "Nescafé and Freedom brand collaboration",
        },
    ];

    const [showNavBubble, setShowNavBubble] = useState(false);
    const [expandNavBubble, setExpandNavBubble] = useState(false);

    const navigate = useNavigate();

    const controlNav = () => {
        if (window.scrollY > 100) {
            setShowNavBubble(true);
        } else {
            setShowNavBubble(false);
            setExpandNavBubble(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNav);
        return () => {
            window.removeEventListener('scroll', controlNav);
        }
    }, [])

  return (
    <div id="workPage">
        {/* Nav : disappear animation on scroll */}
        <div
            className={`navBubble ${showNavBubble && "navBubble--visible"} ${expandNavBubble && "navBubble--expanded"}`}
            onClick={() => setExpandNavBubble(!expandNavBubble)}    
        >
            {expandNavBubble && (
                <ul className="navBubble__links">
                    <li className="navBubble__link navLink--hover-underline">Work</li>
                    <li className="navBubble__link navLink--hover-underline">People</li>
                    <li className="navBubble__link navLink--hover-underline">Ambassadors</li>
                    <li className="navBubble__link navLink--hover-underline">Contact</li>
                </ul>
            )}
        </div>
        <nav>
            <div 
                className="navLogo__container"
                onClick={() => navigate("/")}
            >
                <img
                    src="https://www.xpobrands.com.au/wp-content/themes/xpo-public/images/XPO-Logo.svg"
                    alt=""
                    />
            </div>
            <ul className="navLinks">
                <li className="navLink navLink--hover-underline navLink--hover-block">Work</li>
                <li className="navLink navLink--hover-underline navLink--hover-block">People</li>
                <li className="navLink navLink--hover-underline navLink--hover-block">Ambassadors</li>
                <li className="navLink navLink--hover-underline navLink--hover-block">Contact</li>
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
        <section id="examples">
            <div className="exampleImage__list">
                { exampleInformation.map(({ url, info }, index) => (
                    <figure
                        key={index}
                        className="exampleImage__container"
                    >
                        <img className="exampleImage" src={url} alt="" />
                        <h3 className="exampleImage__text">{info}</h3>
                    </figure>
                ))}
            </div>
        </section>
        
        {/* other work section nav */}
        <section id="categories">
            <h2>See what else we can do.</h2>
            <ul className="categoryLinks">
                <li className="categoryLink">
                    Digital <br />
                    <span className="navLink--hover">Shopper</span>
                </li>
                <li className="categoryLink">
                    Set Design <br />
                    <span className="navLink--hover">& Builds</span>
                </li>
                <li className="categoryLink">
                    POS <br />
                    <span className="navLink--hover">Design</span>
                </li>
                <li className="categoryLink">
                    In Store <br />
                    <span className="navLink--hover">Sampling</span>
                </li>
                <li className="categoryLink">
                    Sponsorships <br />
                    <span className="navLink--hover">& Partnerships</span>
                </li>
                <li className="categoryLink">
                    Out of Store <br />
                    <span className="navLink--hover">Sampling</span>
                </li>
                <li className="categoryLink">
                    Experiential<br />
                    <span className="navLink--hover">Events</span>
                </li>
                <li className="categoryLink">
                    Roadshow & <br />
                    <span className="navLink--hover">Food Trucks</span>
                </li>
                <li className="categoryLink">
                    Content & <br />
                    <span className="navLink--hover">Production</span>
                </li>
                <li className="categoryLink">
                    Consumer <br />
                    <span className="navLink--hover">Promotions</span>
                </li>
                <li className="categoryLink">
                    Launch & Head <br />
                    <span className="navLink--hover">Office Events</span>
                </li>
                <li className="categoryLink">
                    Food <br />
                    <span className="navLink--hover">Service</span>
                </li>
            </ul>
            <p className="backToTop__para"><a href="#"><i class="fa-regular fa-circle-up"></i> Back to top</a></p>
        </section>
        {/* footer */}
        <footer>
            <div className="footer__container">
                <div className="footerInfo">
                    <img
                        className="footerInfo__logo"
                        src="https://www.xpobrands.com.au/wp-content/themes/xpo-public/images/XPO-Logo.svg"
                        alt=""
                    />
                    <p><strong>Sydney | Melbourne</strong></p>
                    <p>02 9966 4003</p>
                    <p>info@xpobrands.com.au</p>
                    <div className="footerLinks">
                        <div className="footerLink">
                            <a className="footerLink__anchor" href="">
                                <i class="fa-brands fa-facebook-f"></i>
                            </a>
                        </div>
                        <div className="footerLink">
                            <a className="footerLink__anchor" href="">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                        </div>
                        <div className="footerLink">
                            <a className="footerLink__anchor" href="">
                                <i class="fa-brands fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footerImages__container">
                    <img
                        className="footerImage footerImage--gradient" 
                        src="https://www.xpobrands.com.au/wp-content/themes/xpo-public/images/Footer-Element-Gradient-3.svg"
                        alt="" 
                    />
                    <img
                        className="footerImage footerImage--black" 
                        src="https://www.xpobrands.com.au/wp-content/themes/xpo-public/images/Footer-Element-Black-1.svg"
                        alt="" 
                    />
                    <img
                        className="footerImage footerImage--sticks" 
                        src="https://www.xpobrands.com.au/wp-content/themes/xpo-public/images/Footer-Element-Prong-2.svg"
                        alt="" 
                    />
                </div>
            </div>
        </footer>
    </div>
  )
}

export default WorkPage

