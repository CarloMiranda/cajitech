import React from 'react';
import codecombat from '/workimages/codecombat.png';
import gamerszone from '/workimages/gamerszone.png';

export const Works = () => {

    return (
        <section className="work section-padding prelative" data-scroll-index='5'>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="sectioner-header text-center">
                        <h1>Explore Our Masterpieces</h1>
                        <span className="line"></span>
                        <p>Step into a realm of innovation and creativity as you explore our latest works. Each project is a testament to our commitment to excellence, showcasing unique solutions that redefine industry standards. Dive into a world where imagination meets expertise, and discover the extraordinary in every detail.</p>
                        </div>
                        <div className="section-content">
                            <div className="row shadow mb-5 p-4 rounded" data-aos="flip-down" data-aos-duration="3000">
                                <div className="project-text col-md-6 pt-4 pt-3">
                                    <div className='pt-3'>
                                        <h1>Code Combat</h1>
                                        <p className='my-5'>A game website where you can enhance your javascript skills through interactive chalenges and gameplay</p>
                                        <div className='d-flex'>    
                                            <a href="#" className='about-btn'>Take a look</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-img col-md-6 mt-4">
                                    <div className="img-wrapper bg-dark">
                                        <img src={ codecombat } alt="Project Image" />
                                    </div>
                                </div>
                            </div>
                            <div className="row shadow mb-5 p-4 rounded" data-aos="flip-down" data-aos-duration="3000">
                                <div className="project-text col-md-6 pt-4 pt-3">
                                    <div className='pt-3'>
                                        <h1>Gamers Zone</h1>
                                        <p className='my-5'>This is a website where you can view details about the Arsenal, map, skins, agents, and skills of the Valorant game.</p>
                                        <div className='d-flex'>    
                                            <a href="#" className='about-btn'>Take a look</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-img col-md-6 mt-4">
                                    <div className="img-wrapper bg-dark">
                                        <img src={ gamerszone } alt="Project Image" />
                                    </div>
                                </div>
                            </div>
                            <div className="row shadow mb-5 p-4 rounded" data-aos="flip-down" data-aos-duration="3000">
                                <div className="project-text col-md-6 pt-4 pt-3">
                                    <div className='pt-3'>
                                        <h1>Code Combat</h1>
                                        <p className='my-5'>A game website where you can enhance your javascript skills through interactive chalenges and gameplay</p>
                                        <div className='d-flex'>    
                                            <a href="#" className='about-btn'>Take a look</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-img col-md-6 mt-4">
                                    <div className="img-wrapper bg-dark">
                                        <img src={ codecombat } alt="Project Image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        
    );
}
