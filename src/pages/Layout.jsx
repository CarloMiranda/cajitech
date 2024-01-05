import React, { useEffect } from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";
import ScrollToTopButton from "./ScrollToTopButton";
import logo from '/public/images/logo.png';
import logoBlack from '/public/images/logo-black.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FaFacebook, FaInstagram } from "react-icons/fa";




export const Layout = () => {
    
    const location = useLocation();

  
       
        // useEffect for scroll event listener
        useEffect(() => {
        const handleScroll = () => {
            const bodyScroll = window.scrollY;
            const navbar = document.querySelector(".navbar");
            const navbarLogoImg = document.querySelector('.navbar-logo img');
            
            // Modify state or perform other actions based on scroll
            if (bodyScroll > 50 && location.pathname === `/` ) {
                navbarLogoImg.src = logoBlack;
                navbar.classList.add("nav-scroll");
            } else {
                navbarLogoImg.src = logo;
                navbar.classList.remove("nav-scroll");
            }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        // Cleanup scroll event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
        }, []); 


        

    useEffect(() => {
        if (location.pathname === '/') {
            document.title = 'Home | Cajitech';
        } else if (location.pathname === '/contact') {
            document.title = 'Contact | Cajitech';
        } else if (location.pathname === '/about') {
            document.title = 'About | Cajitech';
        } else if (location.pathname === '/works') {
            document.title = 'Works | Cajitech';
        } else if (location.pathname === '/features') {
            document.title = 'Features | Cajitech';
        } else if (location.pathname === '/team') {
            document.title = 'Team | Cajitech';
        } else if (location.pathname === '/testimonials') {
            document.title = 'Testimonials | Cajitech';
        } else if (location.pathname === '/faq') {
            document.title = 'FAQ | Cajitech';
        }
    }, [location]);


    return(
        <div>
            
        {/* Navbar */}

        <nav className={`navbar navbar-expand-lg ${location.pathname === `/` ? `navbar` : `navbar-color`} `}>
            <div className="container"> 
                <a className="navbar-brand navbar-logo" href="#"> 
                    <img src={ logo }  alt="logo" className="logo-1" /> 
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <FontAwesomeIcon icon={faBars} /> </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/" className={` nav-link ${location.pathname === `/` ? `fw-bold active` : ``} `}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className={` nav-link ${location.pathname === `/about` ? `fw-bold active` : ``}`}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/features" className={` nav-link ${location.pathname === `/features` ? `fw-bold active` : ``}`}>Features</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/works" className={` nav-link ${location.pathname === `/works` ? `fw-bold active` : ``}`}>Our Works</Link> 
                        </li>
                        <li className="nav-item">
                            <Link to="/team" className={` nav-link ${location.pathname === `/team` ? `fw-bold active` : ``}`}>Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/testimonials" className={` nav-link ${location.pathname === `/testimonials` ? `fw-bold active` : ``}`}>Testimonials</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/faq" className={` nav-link ${location.pathname === `/faq` ? `fw-bold active` : ``}`}>Faq</Link> 
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className={` nav-link ${location.pathname === `/contact` ? `fw-bold active` : ``}`}>Contact</Link> 
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

         {/* End Navbar   */}

            <main>
                <div>
                    <Outlet />
                </div>
            </main>
                
            <footer className="footer-copy">
                <section className="download section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="sectioner-header text-center white">
                                <h3>Explore, Connect, Inspire: Your Journey with Cajitech</h3>
                                <span className="line"></span>
                                <p className="white">Thank you for exploring our world! Cagitech is more than a website; it's a community where inspiration meets innovation. If you have questions, suggestions, or just want to chat, we're here for you. Your journey with us is the heartbeat of our mission. Stay connected, stay inspired, and thank you for being a part of Cajitech.</p>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="section-content text-center">
                                <ul>
                                    <li><a href="#" className='facebook-btn btn' data-aos="fade-up" data-aos-duration="2000">< FaFacebook/></a></li>
                                    <li><a href="#" className='instagram-btn btn' data-aos="fade-up" data-aos-duration="3000"><FaInstagram/></a></li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                        <h5 className='mt-5 whitenpm run '>&copy; 2024 Cajitech. All rights reserved.</h5>                        
                </section>
                <ScrollToTopButton />
            </footer>
        </div>
    )
}