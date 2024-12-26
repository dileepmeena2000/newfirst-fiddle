import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Franchies() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: false, // Animation should happen only once
    });
  }, []);
  return (
    <>
    
    {/* video div start */}
    <div className="a">
        <video
          poster="https://www.foodpanda.com/wp-content/uploads/2023/03/fp-home-video-poster.jpg"
          id="player"
          className="bg-video__content"
          autoPlay
          muted
          loop
        >
          <source
            src="https://firstfiddle-cp.s3.ap-south-1.amazonaws.com/frntvideo/start.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* end video */}


    <section className="py-5 bg-dark d-lg-block d-none">
  <div className="container">
    <div className="row text-center" id="count-scrollbar">
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        {["20+", "50+", "15+", "100++", "8cr+", "100+"].map((count, index) => (
          <li className="nav-i" role="presentation" key={index}>
            <button
              className={`nav-li ${index === 0 ? "active" : ""}`}
              id={`pills-tab-${index}`}
              data-bs-toggle="pill"
              data-bs-target={`#pills-${index}`}
              type="button"
              role="tab"
              aria-controls={`pills-${index}`}
              aria-selected={index === 0}
            >
              <div className="card4">
                <h1 className="counter">{count}</h1>
                <span className="count">{["Brands", "Franchises", "Cities", "Awards", "People Served", "Events"][index]}</span>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>

<section className="py-5 bg-dark">
        <div className="text-center mb-4">
          <h1 className="heading8 text-capitalize">
            Pick A<span style={{ color: "rgb(251, 169, 25)" }}>Brand</span>
          </h1>
        </div>
        <div className="container">
          <div className="row">
            {["1", "2", "3", "4", "5"].map((num, index) => (
              <div
                key={index}
                className="col-md-4 mb-3 aos-init"
                data-aos="flip-right"
                data-aos-delay={100}
                data-aos-duration={1000}
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://example.com/${num}`}
                >
                  <img
                    src={`/images/${num}.jpg`}
                    className="img-fluid"
                    width={400}
                    height={400}
                    alt={`Member Logo ${num}`}
                  />
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-3">
            <button
              className="btn4 fs-6 fw-bold text-center"
              style={{ height: 54 }}
            >
              View More
            </button>
          </div>
        </div>
      </section>
    <section className="py-4 bg-dark ">
      <div className="text-center">
        <h3 className="heading8 text-capitalize">
          EXISTING
          <br />
          <span style={{ color: "rgb(251, 169, 25)" }}> FOOTS</span>
        </h3>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-start">
            <img
              alt=""
              data-aos="flip-leftt"
              loading="lazy"
              width={600}
              height={600}
              decoding="async"
              data-nimg={1}
              className="img-fluid aos-init aos-animate"
              srcSet="/images/map.webp"
              src="images/priyank.webp"
              style={{ color: "transparent" }}
            />
          </div>
          <div className="col-md-6 py-5 aos-init aos-animate" data-aos="zoom-in">
            <div className="row ">
              <div className="col-md-4">
                <h1 className="fprints">DIABLO</h1>
                <h3 className="fprints1">• Jaipur</h3>
                <h3 className="fprints1">• Delhi</h3>
                <h3 className="fprints1">• Indore</h3>
                <h3 className="fprints1">• Dehradun</h3>
                <h3 className="fprints1">• Gurgaon</h3>
                <h1 className="fprints mt-3">FLYING SAUCER</h1>
                <h3 className="fprints1">• Bhopal</h3>
                <h1 className="fprints mt-3">TICKLED PINK</h1>
                <h3 className="fprints1">• Delhi</h3>
                <h3 className="fprints1">• Lucknow</h3>
                <h3 className="fprints1">• Ranchi</h3>
                <h1 className="fprints mt-3">JLWA</h1>
                <h3 className="fprints1">• Kanpur</h3>
              </div>
              <div className="col-md-4">
                <h1 className="fprints ">WAREHOUSE</h1>
                <h3 className="fprints1">• Kolkata</h3>
                <h3 className="fprints1">• Dehli</h3>
                <h3 className="fprints1">• Nagpur</h3>
                <h1 className="fprints mt-3">LAZEEZ AFFAIRE</h1>
                <h3 className="fprints1">• Delhi</h3>
                <h3 className="fprints1 ">• Ranchi</h3>
                <h3 className="fprints1">• Delhi</h3>
                <h3 className="fprints1">• Noida</h3>
                <h3 className="fprints1">• Heyderabad</h3>
                <h3 className="fprints1">• Chennai</h3>
                <h3 className="fprints1">• Bangalore</h3>
                <h3 className="fprints1">• Mumbai</h3>
                <h3 className="fprints1">• Kolkata</h3>
              </div>
              <div className="col-md-4">
                <h1 className="fprints">LOTD</h1>
                <h3 className="fprints1">• Lucknow</h3>
                <h3 className="fprints1">• Agra</h3>
                <h3 className="fprints1">• Nagpur</h3>
                <h3 className="fprints1">• Ranchi</h3>
                <h3 className="fprints1">• Jim Corbette</h3>
                <h3 className="fprints1">• Lucknow</h3>
                <h3 className="fprints1">• Jabalpur</h3>
                <h3 className="fprints1">• Siliguri</h3>
                <h3 className="fprints1">• Coimbatore</h3>
                <h3 className="fprints1">• Shimla-Chandigarh Highway</h3>
                <h3 className="fprints1">• Bhopal</h3>
                <h3 className="fprints1">• Hapur</h3>
                <h3 className="fprints1">• Rishikesh</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-4 bg-dark ">
      <div className="text-center">
        <h1 className="heading8 text-capitalize">
          UPCOMING
          <span style={{ color: "rgb(251, 169, 25)" }}> FOOTS</span>
        </h1>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 py-5 aos-init aos-animate" data-aos="zoom-in">
            <div className="row ">
              <div className="col-md-4">
                <h1 className="fprints">DIABLO</h1>
                <h3 className="fprints1">• Hyderabad</h3>
                <h3 className="fprints1">• Chandigarh</h3>
                <h3 className="fprints1">• Indore</h3>
                <h3 className="fprints1">• Noida</h3>
                <h3 className="fprints1">• Pune</h3>
                <h1 className="fprints mt-3">FLYING SAUCER</h1>
                <h3 className="fprints1">• Jhansi</h3>
              </div>
              <div className="col-md-4">
                <h1 className="fprints ">LOTD</h1>
                <h3 className="fprints1">• Kalyan</h3>
                <h3 className="fprints1">• Raipur</h3>
                <h3 className="fprints1">• Varanasi</h3>
                <h3 className="fprints1">• Mohali</h3>
                <h3 className="fprints1 ">• Ranchi</h3>
                <h3 className="fprints1">• Delhi</h3>
                <h3 className="fprints1">• Noida</h3>
                <h3 className="fprints1">• Heyderabad</h3>
                <h1 className="fprints mt-3">LAZEEZ AFFAIRE</h1>
                <h3 className="fprints1">• Indore</h3>
                <h3 className="fprints1">• Kalyan</h3>
                <h3 className="fprints1">• Meerut</h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-start">
            <img
              alt=""
              data-aos="flip-leftt"
              loading="lazy"
              width={600}
              height={600}
              decoding="async"
              data-nimg={1}
              className="img-fluid aos-init aos-animate"
              srcSet="/images/map.webp"
              src="images/priyank.webp"
              style={{ color: "transparent" }}
            />
          </div>
        </div>
      </div>
    </section>
    <section className="py-5 bg-dark d-lg-block d-none ">
      <div className="container">
        <h1 className="heading8 text-center d-lg-block d-none">
          Top Reasons to <br />
          <span
            className="fw-bold"
            style={{ color: "rgb(251, 169, 25)", letterSpacing: 2 }}
          >
            {" "}
            Franchise with us
          </span>
        </h1>
        <div className="row mt-4 ">
          <div className="d-flex justify-content-center">
            <div
              className="col-lg-5 mb-4 py-xl-3 text-center aos-init aos-animate"
              style={{ width: "30%" }}
              data-aos="fade-up"
            >
              <div className="card bg-dark">
                <div className="card-body1 py-5 ">
                  <img
                    alt=""
                    loading="lazy"
                    width={80}
                    height={80}
                    decoding="async"
                    data-nimg={1}
                    className="img-fluid "
                    srcSet="/images/c1.png"
                    src="images/c1.png"
                    style={{ color: "transparent" }}
                  />
                  <h1
                    className="heading8 mt-4 fs-2"
                    style={{ color: "rgb(251, 169, 25)" }}
                  >
                    Exclusive <br />
                    Ownership
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-md-1" />
            <div
              className="col-lg-5 mb-4 py-xl-3 text-center aos-init aos-animate"
              style={{ width: "30%" }}
            >
              <div className="card bg-dark">
                <div className="card-body1 py-5 ">
                  <img
                    alt=""
                    loading="lazy"
                    width={80}
                    height={80}
                    decoding="async"
                    data-nimg={1}
                    className="img-fluid "
                    srcSet="/images/c2.png"
                    src="images/c2.png"
                    style={{ color: "transparent" }}
                  />
                  <h1
                    className="heading8 fs-2 mt-4 "
                    style={{ color: "rgb(251, 169, 25)" }}
                  >
                    Brand <br />
                    Association
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div
              className="col-lg-6 col-12 mb-4 py-xl-3 text-center aos-init aos-animate"
              style={{ width: "30%" }}
              data-aos="fade-up"
            >
              <div className="card bg-dark">
                <div className="card-body1 py-5 ">
                  <img
                    alt=""
                    loading="lazy"
                    width={80}
                    height={80}
                    decoding="async"
                    data-nimg={1}
                    className="img-fluid "
                    srcSet="/images/c3.png"
                    src="images/c3.png"
                    style={{ color: "transparent" }}
                  />
                  <h1
                    className="heading8 fs-2 mt-4 once"
                    style={{ color: "rgb(251, 169, 25)" }}
                  >
                    Sustainable <br />
                    Returns
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-md-1" />
            <div
              className="col-lg-6 col-12 mb-4 py-xl-3 text-center aos-init aos-animate"
              style={{ width: "30%" }}
              data-aos="fade-up"
            >
              <div className="card bg-dark">
                <div className="card-body1 py-5 ">
                  <img
                    alt=""
                    loading="lazy"
                    width={80}
                    height={80}
                    decoding="async"
                    data-nimg={1}
                    className="img-fluid "
                    srcSet="/images/c4.png"
                    src="images/c4.png"
                    style={{ color: "transparent" }}
                  />
                  <h1
                    className="heading8 mt-4 fs-2 mt-4 once"
                    style={{ color: "rgb(251, 169, 25)" }}
                  >
                    Visibility
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-xl-5">
            <h1 className="heading8 text-center mt-4">
              You Also <br />
              <span
                className="fw-bold"
                style={{ color: "rgb(251, 169, 25)", letterSpacing: 2 }}
              >
                {" "}
                Unlock
              </span>
            </h1>
            <div className="col-lg-1 col-md-3" />
            <div
              className="col-lg-3 col-md-6 mb-4 py-xl-3 text-center aos-init aos-animate"
              data-aos="fade-down"
              style={{ width: "30%" }}
            >
              <div className="card bg-dark ps-0">
                <div className="card-body1 py-5 ">
                  <img
                    alt=""
                    loading="lazy"
                    width={80}
                    height={80}
                    decoding="async"
                    data-nimg={1}
                    className="img-fluid "
                    srcSet="/images/c5.png"
                    src="images/c5.png"
                    style={{ color: "transparent" }}
                  />
                  <h1
                    className="heading8 fs-2 mt-4 once "
                    style={{ color: "rgb(251, 169, 25)" }}
                  >
                    Collaboration
                  </h1>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 mb-4 py-xl-3 text-center aos-init aos-animate"
              data-aos="fade-down"
              style={{ width: "30%" }}
            >
              <div className="card bg-dark ">
                <div className="card-body1 py-5 ">
                  <img
                    alt=""
                    loading="lazy"
                    width={80}
                    height={80}
                    decoding="async"
                    data-nimg={1}
                    className="img-fluid "
                    srcSet="/images/c6.webp"
                    src="images/c6.webp"
                    style={{ color: "transparent" }}
                  />
                  <h1
                    className="heading8 fs-2 mt-4  "
                    style={{ color: "rgb(251, 169, 25)" }}
                  >
                    More Business
                    <br />
                    Opportunities
                  </h1>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 mb-4 py-xl-3 text-center aos-init aos-animate"
              data-aos="fade-down"
              style={{ width: "30%" }}
            >
              <div className="card bg-dark">
                <div className="card-body1 py-5 ">
                  <img
                    alt=""
                    loading="lazy"
                    width={80}
                    height={80}
                    decoding="async"
                    data-nimg={1}
                    className="img-fluid "
                    srcSet="/images/c7.webp"
                    src="images/c7.webp"
                    style={{ color: "transparent" }}
                  />
                  <h1
                    className="heading8 fs-2 mt-4  "
                    style={{ color: "rgb(251, 169, 25)" }}
                  >
                    Personal
                    <br />
                    Network
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-3 text-center">
          <button
            className="btn4 fs-6 mt-4 text-white franchise_signup_btn"
            data-bs-toggle="model"
            data-bs-target="#exampleModal"
            style={{ height: 54, background: "rgb(191, 75, 38)" }}
          >
            Franchise Sign Up
          </button>
        </div>
      </div>
    </section>
    <section className="py-xl-5 bg-dark">
      <div className="container d-xl-flex justify-content-xl-center">
        <div className="asked-section">
          <h1 className="heading8 text-center d-lg-block d-none">
            Frequently Asked
            <span
              className="fw-bold"
              style={{ color: "rgb(251, 169, 25)", letterSpacing: 2 }}
            >
              {" "}
              Questions
            </span>
          </h1>
          <div
            className="accordion aos-init aos-animate"
            id="accordionExample"
            data-aos="zoom-in"
          >
            <div className="accordion-item py-lg-4 py-md-3 py-2">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button "
                  type="button"
                  data-bs-target="#collapseOne"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  About First Fiddle Restaurants
                </button>
              </h2>
              <div
                className="accordion-collapse collapse show"
                id="collapseOne"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="accordion-body-text">
                    First Fiddle is one of India’s largest F &amp; B Companies in
                    experiential dining, serving millions of customers across 35+
                    outlets. Our Brands have consistently won the top accolades in
                    the F&amp;B industry - Times Nightlife, GQ, Indian Restaurant
                    Awards, to name a few.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item py-lg-4 py-md-3 py-2">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  What is the franchise model?
                </button>
              </h2>
              <div
              id='collapseTwo'
                className="accordion-collapse collapse show "
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="accordion-body-text">
                    First Fiddle is one of India’s largest F &amp; B Companies in
                    experiential dining, serving millions of customers across 35+
                    outlets. Our Brands have consistently won the top accolades in
                    the F&amp;B industry - Times Nightlife, GQ, Indian Restaurant
                    Awards, to name a few.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item py-lg-4 py-md-3 py-2">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  How do I start a restaurant business ?
                </button>
              </h2>
              <div
              id='collapseThree'
                className="accordion-collapse collapse "
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="accordion-body-text">
                    If you are looking to start your own restaurant business and
                    have no prior experience, the best way is to partner with a
                    known brand with deep organisational capabilities. Taking a
                    franchise allows entrepreneurs the opportunity to run their
                    own operations with the guidance and support of a large
                    organisation with a proven formula for success. Even if you
                    have the experience of operating restaurants, partnership with
                    prestigious brands provides greater visibility, higher guest
                    retention and access to industry best practices
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item py-lg-4 py-md-3 py-2">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  How can First Fiddle help me set up a Restaurant ?
                </button>
              </h2>
              <div
                className="accordion-collapse collapse "
                aria-labelledby="heading4"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="accordion-body-text">
                    First Fiddle has created some of the most iconic brands in the
                    industry with exceptional guest loyalty. Our bouquet of
                    premium and ultra premium brands span across multiple formats
                    (fine dine, casual dine, pubs, lounges, clubs etc.) and
                    multiple cuisines (Indian, Asian, European, Mexican etc.),
                    allowing you to create and conceptualise your “Dream
                    Restaurant” that best suits your city, location, budget and
                    clientele. Our team provides exclusive plan &amp; support from
                    concept to execution stage focusing on long term growth and
                    profitability
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item py-lg-4 py-md-3 py-2">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  What is the minimum investment required ?
                </button>
              </h2>
              <div
                className="accordion-collapse collapse "
                aria-labelledby="heading4"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="accordion-body-text">
                    Depending on your requirement and location, we can help you
                    own your “Dream Restaurant” in as little as INR 2 crores
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item py-lg-4 py-md-3 py-2">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  How long does it take to set up the restaurant?
                </button>
              </h2>
              <div
                className="accordion-collapse collapse "
                aria-labelledby="heading4"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="accordion-body-text">
                    With our deep expertise in project conceptualization and
                    execution, we can help you own your “Dream restaurant” within
                    3-4 months
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item py-lg-4 py-md-3 py-2">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  How do I choose the best location to open a restaurant?
                </button>
              </h2>
              <div
                className="accordion-collapse collapse "
                aria-labelledby="heading4"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="accordion-body-text">
                    The team at First Fiddle will help you select the appropriate
                    location depending on the City, clientele and budget
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item py-lg-4 py-md-3 py-2">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  How can First Fiddle help turn around/ increase the revenue of
                  my existing Restaurant ?
                </button>
              </h2>
              <div
                className="accordion-collapse collapse "
                aria-labelledby="heading4"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="accordion-body-text">
                    With a combination of stellar brand value, deep operational
                    expertise and innovative concepts, First Fiddle can turn your
                    average restaurant into one of the leading F&amp;B
                    destinations in your city.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-dark  py-5">
      <div className="container">
        <img
          data-aos="zoom-in"
          data-bs-toggle="model"
          data-bs-target="#exampleModal"
          alt=""
          loading="lazy"
          width={1300}
          height={400}
          decoding="async"
          data-nimg={1}
          className="img-fluid cursor franchise_signup_btn aos-init aos-animate"
          srcSet="/images/bg1.webp"
          src="images/bg1.webp"
          style={{ color: "transparent" }}
        />
      </div>
    </section>
  </>
  
  )
}

export default Franchies