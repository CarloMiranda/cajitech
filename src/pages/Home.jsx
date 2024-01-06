import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import { About } from "./About";
import { Contact } from "./Contact";
import { Faq } from "./Faq";
import { Features } from "./Features";
import { Team } from "./Team";
import { Testimonial } from "./Testimonial";
import { Works } from "./Works";


export const Home = () => {

    return(
        <div>
            {/* Banner Start */}
            <section className="banner" data-scroll-index='0'>
                <div className="banner-overlay">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                            <div className="banner-text">
                                <h1 className="white" data-aos="zoom-in" data-aos-duration="1000">Welcome to Cajitech</h1>
                                <h4 className="white" data-aos="zoom-in" data-aos-duration="2000">Transforming Ideas into Extraordinary Experiences</h4>
                                <h5 className="banner-text white mb-5" data-aos="zoom-in" data-aos-duration="3000">Ready to Elevate Your Brand? Let's Create Something Exceptional Together!</h5>
                                <div className="row">
                                    <ul>
                                        <li>
                                            <a href="#" className='bg-light mx-3 p-3 rounded btn' data-aos="fade-right" data-aos-duration="3000"><strong>Book consultation for free <FaExternalLinkAlt className="mx-2" /></strong></a>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li><a href="#" className='facebook-btn mt-1 ml-3' data-aos="fade-right" data-aos-duration="2000"><FaFacebook /></a></li>
                                        <li><a href="#" className='instagram-btn btn mt-1' data-aos="fade-right" data-aos-duration="1000"><FaInstagram/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12" data-aos="fade-up" data-aos-duration="3000"> <img src="images/iphone-screen.png" className="img-fluid wow fadeInUp"/> </div>
                    </div>
                    </div>
                </div>
                <span className="svg-wave" data-aos="fade-up" data-aos-duration="3000"> <img className="svg-hero" src="images/applight-wave.svg" /> </span> 
            </section>

            < About />

            < Features />

            < Works />

            < Team />

            < Testimonial />

            < Faq />

            < Contact />
        </div>
    )
}