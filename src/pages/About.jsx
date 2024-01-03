import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMobile, faBolt } from '@fortawesome/free-solid-svg-icons';

export const About = () => {


    return(
        <section className="about section-padding prelative" data-scroll-index='1'>
            <div className="container mt-5">
                <div className="row">
                <div className="col-md-12">
                    <div className="sectioner-header text-center">
                    <h1>About</h1>
                    <span className="line"></span>
                    <p>Welcome to Cajitech – where innovation meets purpose. At Cajitech, we're not just a company; we're a community driven by the relentless pursuit of excellence. Our story unfolds in the intersection of technology and human values, crafting solutions that resonate with impact. We take pride in our diverse talents, united in a shared commitment to redefine possibilities. Rooted in integrity and powered by passion, Cajitech is more than a name – it's a promise to deliver cutting-edge solutions with a human touch. Join us in shaping the future, where every idea is a catalyst for transformation.</p>
                    </div>
                    <div className="section-content text-center">
                    <div className="row">
                        <div className="col-md-4">
                        <div className="icon-box wow fadeInUp" data-wow-delay="0.2s" data-aos="zoom-in" data-aos-duration="2000"> <i aria-hidden="true"><FontAwesomeIcon className='icon' icon={faPhone} /></i> 
                            <h5>Support</h5>
                            <p>Phasellus lobortis justo a magna facilisis, in commodo tellus rutrum. Sed vitae condimentum nulla.</p>
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div className="icon-box wow fadeInUp" data-wow-delay="0.4s" data-aos="zoom-in" data-aos-duration="2500"> <i aria-hidden="true"><FontAwesomeIcon className='icon' icon={faMobile} /></i>
                            <h5>Cross Platform</h5>
                            <p>Phasellus lobortis justo a magna facilisis, in commodo tellus rutrum. Sed vitae condimentum nulla.</p>
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div className="icon-box wow fadeInUp" data-wow-delay="0.6s" data-aos="zoom-in" data-aos-duration="3000"> <i className="fa fa-bolt" aria-hidden="true"><FontAwesomeIcon className='icon' icon={faBolt} /></i>
                            <h5>Fast</h5>
                            <p>Phasellus lobortis justo a magna facilisis, in commodo tellus rutrum. Sed vitae condimentum nulla.</p>
                        </div>
                        </div>
                    </div>
                    <a href="#" className="about-btn">Learn More</a> </div>
                </div>
                </div>
            </div>
        </section>
    )
}