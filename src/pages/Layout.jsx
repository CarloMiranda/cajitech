import React, { useEffect } from 'react';
import logo from '/public/images/logo.png';
import logoBlack from '/public/images/logo-black.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


import { About } from './About';
import { Projects } from './Features';
import { Team } from './Team';
import { Testimonial } from './Testimonial';
import { Faq } from './Faq';
import { Contact } from './Contact';
import { Footer } from './footer';


export const Layout = () => {
    // State for the video popup
    // const [isVideoPopupVisible, setVideoPopupVisible] = useState(false);

  
    // useEffect for scroll event listener
    useEffect(() => {
      const handleScroll = () => {
        const bodyScroll = window.scrollY;
        const navbar = document.querySelector(".navbar");
        const navbarLogoImg = document.querySelector('.navbar-logo img');
  
        // Modify state or perform other actions based on scroll
        if (bodyScroll > 50) {
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


    return(
        <div>
            
        {/* Navbar */}

        <nav className="navbar navbar-expand-lg">
            <div className="container"> 
                <a className="navbar-brand navbar-logo" href="#"> 
                    <img src={logo} alt="logo" className="logo-1" /> 
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <FontAwesomeIcon icon={faBars} /> </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"> <a className="nav-link" href="" data-scroll-nav="0">Home</a> </li>
                        <li className="nav-item"> <a className="nav-link" href="#" data-scroll-nav="1">About</a> </li>
                        <li className="nav-item"> <a className="nav-link" href="#" data-scroll-nav="2">Features</a> </li>
                        <li className="nav-item"> <a className="nav-link" href="#" data-scroll-nav="3">Team</a> </li>
                        <li className="nav-item"> <a className="nav-link" href="#" data-scroll-nav="4">Testimonials</a> </li>
                        <li className="nav-item"> <a className="nav-link" href="#" data-scroll-nav="5">Faq</a> </li>
                        <li className="nav-item"> <a className="nav-link" href="#" data-scroll-nav="6">Contact</a> </li>
                    </ul>
                </div>
            </div>
        </nav>

         {/* End Navbar   */}


         {/* Banner Start */}
            <section className="banner" data-scroll-index='0'>
            <div className="banner-overlay">
                <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-12">
                    <div className="banner-text">
                        <h2 className="white">Welcome to Cajitech's Creative Haven 🚀</h2>
                        <h6 className="white">Transforming Ideas into Extraordinary Experiences</h6>
                        <p className="banner-text white">Your vision, our passion! We specialize in crafting unique digital solutions tailored just for you. Explore our portfolio and let's embark on a journey to bring your dreams to life.</p>
                        <p className="banner-text white">Ready to Elevate Your Brand? Let's Create Something Exceptional Together!</p>
                        <ul>
                            <li><a href="#" className='bg-light p-3 rounded btn'><strong>Book consultation for free</strong></a></li>
                            <li><a href="#" className='btn bg-secondary white'>Facebook</a></li>
                            <li><a href="#" className='btn bg-secondary white'>Instagram</a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-md-4 col-sm-12"> <img src="images/iphone-screen.png" className="img-fluid wow fadeInUp"/> </div>
                </div>
                </div>
            </div>
            <span className="svg-wave"> <img className="svg-hero" src="images/applight-wave.svg" /> </span> </section>

            {/* Banner End  */}

            {/* About End */}
                < About />


            {/* Features Start */}
                < Projects />

            {/* Team Start */}
                < Team />


            {/* Testimonial Start */}
                < Testimonial />


            {/* FAQ Start */}
                < Faq />

            {/* Contact Start */}
                < Contact />



            < Footer />

            

        </div>
    )
}