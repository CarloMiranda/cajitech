import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faBolt, faWrench, faUndo, faPodcast, faHandshake, faHandshakeAlt  } from '@fortawesome/free-solid-svg-icons';

export const Features = () => {

    return(
        <section className="feature section-padding" data-scroll-index='2'>
            <div className="container mt-5">
                <div className="row">
                <div className="col-md-12">
                    <div className="sectioner-header text-center">
                    <h1>Features</h1>
                    <span className="line"></span>
                    <p>Our features are more than capabilities; they are the building blocks of unparalleled user experiences, crafted to elevate and redefine your digital journey.</p>
                    </div>
                    <div className="section-content text-center">
                    <div className="row">
                        <div className="col-md-4 col-sm-12" data-aos="fade-right" data-aos-duration="3000">
                            <div className="media single-feature wow fadeInUp" data-wow-delay="0.2s">
                                <div className="media-body text-right media-right-margin">
                                <h5>Fast Processing</h5>
                                <p>Experience lightning-fast processing that sets your pace in the digital realm.</p>
                                </div>
                                <div className="media-right icon-border"> <span className="fa fa-bolt" aria-hidden="true"><FontAwesomeIcon className='icon' icon={faBolt} /></span> </div>
                            </div>
                            <div className="media single-feature wow fadeInUp" data-wow-delay="0.4s">
                                <div className="media-body text-right media-right-margin">
                                <h5>Responsiveness</h5>
                                <p>Enjoy unparalleled responsiveness, where every interaction feels effortless and immediate.</p>
                                </div>
                                <div className="media-right icon-border"> <span className="fa fa-battery-full" aria-hidden="true"><FontAwesomeIcon className='icon' icon={faMobile} /></span> </div>
                            </div>
                            <div className="media single-feature wow fadeInUp" data-wow-delay="0.6s">
                                <div className="media-body text-right media-right-margin">
                                <h5>User Friendly</h5>
                                <p>Navigate with ease through our user-friendly interfaces, designed for your comfort and delight.</p>
                                </div>
                                <div className="media-right icon-border"> <span className="fa fa-wifi" aria-hidden="true"><FontAwesomeIcon className='icon' icon={faHandshakeAlt} /></span> </div>
                            </div>
                        </div>
                            <div className="col-md-4 d-none d-md-block d-lg-block" data-aos="fade-up" data-aos-duration="1000">
                                <div className="feature-mobile"> <img src="images/iphone-screen-with-shadow.png" className="img-fluid wow fadeInUp"/> </div>
                            </div>
                        <div className="col-md-4 col-sm-12" data-aos="fade-left" data-aos-duration="3000">
                            <div className="media single-feature wow fadeInUp" data-wow-delay="0.2s">
                                <div className="media-left icon-border media-right-margin"> <span className="fa fa-check-double" aria-hidden="true"><FontAwesomeIcon className='icon' icon={faWrench} /></span> </div>
                                <div className="media-body text-left">
                                <h5>Regular Updates</h5>
                                <p>Stay at the forefront with regular updates, ensuring you always have the latest and greatest.</p>
                                </div>
                            </div>
                            <div className="media single-feature wow fadeInUp" data-wow-delay="0.4s">
                                <div className="media-left icon-border media-right-margin"> <span className="fa fa-dollar-sign" aria-hidden="true"><FontAwesomeIcon className='icon' icon={faUndo} /></span> </div>
                                <div className="media-body text-left">
                                <h5>Money Back Guaranted</h5>
                                <p>Rest easy with our money-back guarantee, because your satisfaction is our top priority.</p>
                                </div>
                            </div>
                            <div className="media single-feature wow fadeInUp" data-wow-delay="0.6s">
                                <div className="media-left icon-border media-right-margin"> <span className="fa fa-hdd" aria-hidden="true"><FontAwesomeIcon className='icon' icon={faPodcast } /></span> </div>
                                <div className="media-body text-left">
                                <h5>Free Web Hosting</h5>
                                <p>Benefit from free web hosting, as we support your journey to digital success.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}