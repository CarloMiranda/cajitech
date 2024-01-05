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
                    <p>We are a community driven by the relentless pursuit of excellence. Our story unfolds in the intersection of technology and human values, crafting solutions that resonate with impact. We take pride in our diverse talents, united in a shared commitment to redefine possibilities. Rooted in integrity and powered by passion, Cajitech is more than a name – it's a promise to deliver cutting-edge solutions with a human touch. Join us in shaping the future, where every idea is a catalyst for transformation.</p>
                    </div>
                    <div className="section-content text-center">
                    <div className="row">
                        <div className="col-md-4">
                        <div className="icon-box wow fadeInUp" data-wow-delay="0.2s" data-aos="zoom-in" data-aos-duration="2000"> <i aria-hidden="true"><FontAwesomeIcon className='icon' icon={faPhone} /></i> 
                            <h5>Support</h5>
                            <p>We pride ourselves on providing unparalleled support, ensuring that every step of your journey is met with dedicated assistance and expertise.</p>
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div className="icon-box wow fadeInUp" data-wow-delay="0.4s" data-aos="zoom-in" data-aos-duration="2500"> <i aria-hidden="true"><FontAwesomeIcon className='icon' icon={faMobile} /></i>
                            <h5>Cross Platform</h5>
                            <p>Our commitment to cross-platform excellence means that your experiences seamlessly transcend device boundaries, offering a unified and cohesive interaction.</p>
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div className="icon-box wow fadeInUp" data-wow-delay="0.6s" data-aos="zoom-in" data-aos-duration="3000"> <i className="fa fa-bolt" aria-hidden="true"><FontAwesomeIcon className='icon' icon={faBolt} /></i>
                            <h5>Fast</h5>
                            <p>In the realm of speed, Cajitech sets the pace, delivering solutions that are not just efficient but empower you to navigate through innovation swiftly and effortlessly.</p>
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