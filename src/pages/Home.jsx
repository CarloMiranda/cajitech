import { About } from "./About"
import { Contact } from "./Contact"
import { Faq } from "./Faq"
import { Features } from "./Features"
import { Team } from "./Team"
import { Testimonial } from "./Testimonial"
import { Works } from "./Works"


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
                <span className="svg-wave"> <img className="svg-hero" src="images/applight-wave.svg" /> </span> 
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