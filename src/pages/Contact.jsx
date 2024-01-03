

export const Contact = () => {


    return(
        <section className="contact section-padding" data-scroll-index='6'>
            <div className="container mt-5">
                <div className="row">
                <div className="col-md-12">
                    <div className="sectioner-header text-center">
                    <h1>Get in Touch</h1>
                    <span className="line"></span>
                    <h5>We'd Love to Hear from You!</h5>
                    <p>Have questions, feedback, or just want to say hello? We're here and ready to listen. Your thoughts matter, and we're committed to providing the best possible experience for you. Reach out to us via the form below, and we'll get back to you as soon as possible. Thank you for choosing [Your Brand]. We appreciate your trust and look forward to connecting with you!</p>
                    </div>
                    <div className="section-content">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-8">
                        <form id="contact_form" action="">
                            <div className="row">
                            <div className="col">
                                <input type="text" id="your_name" className="form-input w-100" name="full-name" placeholder="Full Name" required />
                            </div>
                            <div className="col">
                                <input type="email" id="email" className="form-input w-100" name="email" placeholder="Email" required />
                            </div>
                            </div>
                            <input type="text" id="subject" className="form-input w-100" name="subject" placeholder="Subject" />
                            <textarea className="form-input w-100" id="message" placeholder="Message" name="message"></textarea>
                            <button className="btn-grad w-100 text-uppercase" type="submit" name="button">submit</button>
                        </form>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4">
                        <div className="contact-info white">
                            <div className="contact-item media"> <i className="fa fa-map-marker-alt media-left media-right-margin"></i>
                            <div className="media-body">
                                <p className="text-uppercase">Address</p>
                                <p className="text-uppercase">Manila, Philipines</p>
                            </div>
                            </div>
                            <div className="contact-item media"> <i className="fa fa-mobile media-left media-right-margin"></i>
                            <div className="media-body">
                                <p className="text-uppercase">Phone</p>
                                <p className="text-uppercase"><a className="text-white" href="tel:+15173977100">009900990099</a> </p>
                            </div>
                            </div>
                            <div className="contact-item media"> <i className="fa fa-envelope media-left media-right-margin"></i>
                            <div className="media-body">
                                <p className="text-uppercase">E-mail</p>
                                <p className="text-uppercase"><a className="text-white" href="mailto:abcdefg@gmail.com">cajitech@gmail.com</a> </p>
                            </div>
                            </div>
                            <div className="contact-item media"> <i className="fa fa-clock media-left media-right-margin"></i>
                            <div className="media-body">
                                <p className="text-uppercase">Working Hours</p>
                                <p className="text-uppercase">Mon-Fri 9.00 AM to 5.00PM.</p>
                            </div>
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