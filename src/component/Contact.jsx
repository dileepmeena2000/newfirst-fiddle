import Aos from 'aos';
import React, { useEffect } from 'react'

function Contact() {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: false, // Animation should happen only once
    });
  }, []);
  return (
    <>
    <section className='bg-dark'>
        <div className="container">
            <div className="row">
                <div className="col-md-6 py-5 mt-5 d-lg-block d-none px-4 aos-init aos-animate" data-aos="fade-right">
                    <h1 className='heading8'>Know More</h1>
                    <h3 className='heading3' style={{color:"orange"}}>Contact Us</h3>
                    <p className='font3 fs-5'>
                         <span className='fs-4 mt-3' style={{color: 'rgb(251, 169, 25)'}}>Adress</span>
                        <br/>
                        S-357 2nd floor, Block S, Panchsheel Park South, Panchsheel Park,
                        <br/> New Delhi, Delhi 110017

                    </p>
                    <div>
                        <p className="font3 fs-5">
                            <span className='fs-4 ' style={{color: 'rgb(251, 169, 25)'}} >For
                                Enquiry</span>
                            <br/>
                            <a className="text-decoration-none text-white">Email:
                                customercare@firstfiddle.in</a>
                        </p>
                    </div>
                </div>

                    <div className="col-md-6 d-flex justify-content-end py-5 aos-init aos-animate" data-aos="filp-left">
                        <div className="card2">
                            <h1 className="heading8 text-center fs-1">Contact Us!</h1>
                            <form id="SubmitForm" className="was-validated">
                                <div className="form-group">
                                    <label className="label mb-2">Full Name</label>
                                    <input type="text" placeholder="Enter Your Name"
                                        className="form-control border-white text1 text-white " name="first name"/>
                                    <div className="invalid-feedback"></div>
                                </div>
                                <div className="py-3">
                                    <label className="label mb-2">Phone Number</label>

                                    <div className="form-group row">
                                        <div className="col-lg-4 col-5">
                                            <div type="text"
                                                className="form-control text1 text-white d-flex justify-content-center align-items-center">
                                                <img alt loading="lazy" width="50" height="50" decoding="async"
                                                    data-nimg="1" className="img-fluid text-start flag w-25 "
                                                    srcSet="/images/flag.png" src="images/flag.png"
                                                    style={{color: 'transparent'}}/>
                                                 +91
                                            </div>

                                        </div>
                                        <div className="form-group col-lg-8 col-7">
                                            <input type="number" placeholder="Enter Your Number"
                                                className="form-control border-white text1 text-white " name="password"/>
                                            <div className="invalid-feedback"></div>
                                        </div>
                                    </div>

                                </div>
                                <div className="form-group py-3">
                                    <label className="label mb-2">Email</label>
                                    <input name="email" placeholder="Enter Your Email"
                                        className="form-control border-white text1 text-white" type="text"/>
                                    <div className="invalid-feedback"></div>
                                </div>
                                <div>
                                    <label className="label mb-2">Message</label>
                                    <div className="row py-1 px-2">
                                        <textarea name="message" placeholder="Enter your Message"
                                            className="form-control border-white text1 text-white" cols="50"
                                            rows="5"></textarea>
                                        <div className="text-center mt-4">
                                            <button type="submit" className="btn1 fs-6 fw-bold"
                                                style={{height: '54px'}}>Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
                </div>
    </section>

    <section className="py-md-5 bg-dark">
        <div className="container">
            <h1 className="heading8 text-center mb-0">ASK US</h1>
            <h1 className="heading3 text-center d-lg-block d-none" style={{color:"orange"}}>ANYTHING</h1>
            <h1 className="heading3 text-center d-lg-none fs-1">Anything</h1>
            <div className="row">
                <div className="col-md-4 mb-4 py-xl-5 aos-init aos-animate" data-aos="fade-down">
                    <div className="card bg-dark">
                        <div className="card-body">
                            <img alt loading="lazy" width="50" height="50" decoding="async" data-nimg="1"
                                className="img-fluid  " srcSet="/images/fb.png" src="images/fb.png"
                                style={{color: 'transparent'}}/>
                            <h1 className="font3 mt-3">Why should I invest in F&B?</h1>
                            <p className="font3">
                                Investing in F&B offers consistent demand, high returns, and diverse revenue streams.
                                First Fiddle, a renowned restaurant, exemplifies success in this industry, making it a
                                compelling investment choice.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4 py-xl-5 aos-init aos-animate" data-aos="fade-up">
                    <div className="card bg-dark">
                        <div className="card-body">
                            <img alt loading="lazy" width="50" height="50" decoding="async" data-nimg="1"
                                className="img-fluid  " srcSet="/images/fm.webp" src="images/fm.webp"
                                style={{color: 'transparent'}}/>
                            <h1 className="font3 mt-3">What is the Franchise Model?</h1>
                            <p className="font3">
                                The franchise model is a business arrangement where a franchisor grants a franchisee the
                                right to operate a business using their brand, products, and systems in exchange for
                                fees and royalties.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4 py-xl-5 aos-init aos-animate" data-aos="fade-up">
                    <div className="card bg-dark">
                        <div className="card-body">
                            <img alt loading="lazy" width="50" height="50" decoding="async" data-nimg="1"
                                className="img-fluid  " srcSet="/images/op.png" src="images/op.png"
                                style={{color: 'transparent'}}/>
                            <h1 className="font3 mt-3">What is the Onboarding Process?</h1>
                            <p className="font3">
                                The Onboarding Process at First Fiddle Restaurant involves welcoming new team members,
                                providing training, and ensuring a smooth transition into their roles for a seamless
                                start.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4 aos-init aos-animate" data-aos="fade-up">
                    <div className="card bg-dark">
                        <div className="card-body">
                            <img alt loading="lazy" width="50" height="50" decoding="async" data-nimg="1"
                                className="img-fluid  " srcSet="/images/in.png" src="images/in.png"
                                style={{color: 'transparent'}}/>
                            <h1 className="font3 mt-3">How much will be my investment?</h1>
                            <p className="font3">
                                Your investment in First Fiddle Restaurant will depend on the specific location and
                                size of your chosen franchise. Contact us for a personalized investment estimate today.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4 aos-init aos-animate" data-aos="fade-down">
                    <div className="card bg-dark">
                        <div className="card-body">
                            <img alt loading="lazy" width="50" height="50" decoding="async" data-nimg="1"
                                className="img-fluid  " srcSet="/images/sold.png" src="images/sold.png"
                                style={{color: 'transparent'}}/>
                            <h1 className="font3 mt-3">How many franchise have you sold?</h1>
                            <p className="font3">
                                First Fiddle Restaurants is proud to have sold over 50 franchise units worldwide,
                                expanding our brands presence and sharing our culinary excellence with discerning food
                                lovers everywhere.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4 aos-init aos-animate" data-aos="fade-up">
                    <div className="card bg-dark">
                        <div className="card-body">
                            <img alt loading="lazy" width="50" height="50" decoding="async" data-nimg="1"
                                className="img-fluid  " srcSet="/images/sf.png" src="images/sf.png"
                                style={{color: 'transparent'}}/>
                            <h1 className="font3 mt-3">How much support will you offer?</h1>
                            <p className="font3">
                                First Fiddle Restaurant offers exceptional support, ensuring your dining experience is
                                flawless. We prioritize your needs and satisfaction to create memorable moments.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact