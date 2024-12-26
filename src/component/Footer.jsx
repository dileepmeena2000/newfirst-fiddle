import React from "react";

function Footer() {
  return (
    <>
      {/* animation bala kaam */}
      <section className="d-lg-block d-none">
        <div className="video-container1">
          <video
            id="video-background1"
            playsInline
            loop
            alt="All the devices"
            src="https://testvideosfirst-cp.s3.ap-south-1.amazonaws.com/firstfiddlev2/stock.mp4"
          />
          <div
            className="content py-xl-5 aos-init aos-animate"
            data-aos="zoom-in"
            data-aos-delay={100}
            data-aos-duration={1000}
          >
            <h1 className="heading8 text-center mb-3 mt-3">
              Be the part of{" "}
              <span style={{ color: "rgb(251, 169, 25)" }}>
                {" "}
                our&nbsp;journey
              </span>
            </h1>
            <div
              className="rfm-marquee-container "
              style={{
                "--pause-on-hover": "running",
                "--pause-on-click": "running",
                "--width": "100%",
                "--transform": "none",
              }}
            >
              <div
                className="rfm-marquee"
                style={{
                  "--play": "running",
                  "--direction": "reverse",
                  "--duration": "17.44s",
                  "--delay": "0s",
                  "--iteration-count": "infinite",
                  "--min-width": "100%",
                }}
              >
                <div className="rfm-initial-child-container">
                  <div className="rfm-child" style={{ "--transform": "none" }}>
                    <img
                      src="./images/small1.png"
                      className="img-fluid imgg1 ms-5"
                      alt
                      srcSet
                    />
                  </div>
                  <div className="rfm-child" style={{ "--transform": "none" }}>
                    <img
                      src="./images/bizoulogo.png"
                      className="img-fluid imgg1 ms-5"
                      alt
                      srcSet
                    />
                  </div>
                  <div className="rfm-child" style={{ "--transform": "none" }}>
                    <img
                      src="./images/bougielogo.png"
                      className="img-fluid imgg1 ms-5"
                      alt
                      srcSet
                    />
                  </div>
                  <div className="rfm-child" style={{ "--transform": "none" }}>
                    <img
                      src="./images/misosexy.png"
                      className="img-fluid imgg1 ms-5"
                      alt
                      srcSet
                    />
                  </div>
                  <div className="rfm-child" style={{ "--transform": "none" }}>
                    <img
                      src="./images/lazeez.png"
                      className="img-fluid imgg1 ms-5"
                      alt
                      srcSet
                    />
                  </div>
                  <div className="rfm-child" style={{ "--transform": "none" }}>
                    <img
                      src="./images/loard.png"
                      className="img-fluid imgg1 ms-5"
                      alt
                      srcSet
                    />
                  </div>
                  <div className="rfm-child" style={{ "--transform": "none" }}>
                    <img
                      src="./images/small1.png"
                      className="img-fluid imgg1 ms-5"
                      alt
                      srcSet
                    />
                  </div>
                  <div className="rfm-child" style={{ "--transform": "none" }}>
                    <img
                      src="./images/small3.png"
                      className="img-fluid imgg1 ms-5"
                      alt
                      srcSet
                    />
                  </div>
                </div>
              </div>
              <div
                className="rfm-marquee"
                style={{
                  "--play": "running",
                  "--direction": "reverse",
                  "--duration": "17.44s",
                  "--delay": "0s",
                  "--iteration-count": "infinite",
                  "--min-width": "100%",
                }}
              >
                <div className="rfm-child" style={{ "--transform": "none" }}>
                  <img
                    src="./images/small5.png"
                    className="img-fluid imgg1 ms-5"
                    alt
                    srcSet
                  />
                </div>
                <div className="rfm-child" style={{ "--transform": "none" }}>
                  <img
                    src="./images/small3.png"
                    className="img-fluid imgg1 ms-5"
                    alt
                    srcSet
                  />
                </div>
                <div className="rfm-child" style={{ "--transform": "none" }}>
                  <img
                    src="./images/small1.png"
                    className="img-fluid imgg1 ms-5"
                    alt
                    srcSet
                  />
                </div>
                <div className="rfm-child" style={{ "--transform": "none" }}>
                  <img
                    src="./images/bizoulogo.png"
                    className="img-fluid imgg1 ms-5"
                    alt
                    srcSet
                  />
                </div>
                <div className="rfm-child" style={{ "--transform": "none" }}>
                  <img
                    src="./images/bougielogo.png"
                    className="img-fluid imgg1 ms-5"
                    alt
                    srcSet
                  />
                </div>
                <div className="rfm-child" style={{ "--transform": "none" }}>
                  <img
                    src="./images/misosexy.png"
                    className="img-fluid imgg1 ms-5"
                    alt
                    srcSet
                  />
                </div>
                <div className="rfm-child" style={{ "--transform": "none" }}>
                  <img
                    src="./images/lazeez.png"
                    className="img-fluid imgg1 ms-5"
                    alt
                    srcSet
                  />
                </div>
                <div className="rfm-child" style={{ "--transform": "none" }}>
                  <img
                    src="./images/small3.png"
                    className="img-fluid imgg1 ms-5"
                    alt
                    srcSet
                  />
                </div>
              </div>
              
            </div>
            
          </div>
        </div>
      </section>

      {/* footer start */}
      <section className="bg-dark py-xl-5 py-md-3">
        <div className="container">
          <div className="row">
            <div className="col-md-5 mt-5">
              <a href="/">
                <img
                  alt=""
                  loading="lazy"
                  width={200}
                  height={200}
                  decoding="async"
                  data-nimg={1}
                  className="img-fluid d-md-block "
                  srcSet="/images/logo.webp"
                  src="images/logo.webp"
                  style={{ color: "transparent" }}
                />
              </a>
            </div>
            <div className="col-md-7 signup-bottom">
              <h1 className="heading8 ">
                CONTACT
                <span style={{ color: "rgb(251, 169, 25)" }}> US</span>
              </h1>
              <p className="font">
                First Fiddle Restaurants, the pioneers of casual and
                experiential dining, has been changing the industry for the
                better for over 20 years.
              </p>
              <div className="row py-3">
                <div className="col-lg-6">
                  <strong className="fs-5">Adress</strong>
                  <br />
                  <p className="font">
                    S-357 2nd floor, Block S, Panchsheel Park South, Panchsheel
                    Park, New Delhi, Delhi 110017
                  </p>
                </div>
                <div className="col-lg-6 foot-add">
                  <p className="font">
                    <strong className="fs-5">Enquiry</strong>
                    <br />
                    Email:
                    <a href="" className="font text-decoration-none ms-1">
                      customercare@firstfiddle.in
                    </a>
                  </p>
                </div>
              </div>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/first-fiddle-restaurants/"
              >
                <i className="fab fa-linkedin fa-2x social-icons" style={{color:"orange"}}> </i>
              </a>
              &nbsp;&nbsp;
              <a
                target="_blank"
                href="https://www.facebook.com/firstfiddlerestaurants/"
              >
                <i className="fab fa-facebook-square fa-2x social-icons" style={{color:"orange"}}> </i>
              </a>
              &nbsp;&nbsp;
              <a
                target="_blank"
                href="https://www.instagram.com/firstfiddlerestaurants/"
              >
                <i className="fab fa-instagram fa-2x social-icons" style={{color:"orange"}}> </i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
