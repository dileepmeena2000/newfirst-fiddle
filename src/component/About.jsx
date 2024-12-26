import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


 

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: false, // Animation should happen only once
    });
  }, []);
  
  return (
    <>
    <section className="py-5 bg-dark">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 px-3 d-lg-block d-none aos-init aos-animate"
            data-aos="zoom-in"
          >
            <h1 className="heading8">
              Know About
              <span style={{ color: "rgb(251, 169, 25)" }}>Our Story</span>
            </h1>
            <p className="font3 mt-3">
              With an ongoing legacy spanning across an impressive 24 years, First
              Fiddle Restaurants started as a fine-dine venture of a 19-year-old
              Dyslexic college dropout, with the sole dream of entertaining and
              offering mouthwatering meals to patrons.
            </p>
            <div className="py-5 d-flex">
              <a href="/franches">
                <button
                  className="join_the_waitlist_btn btn4 fs-6 fw-bold"
                  style={{ height: 54 }}
                >
                  Join the waitlist
                </button>
              </a>
            </div>
          </div>
          <div className="col-lg-6 mb-3 aos-init">
            <img
              alt=""
              data-aos="fade-right"
              loading="lazy"
              width={600}
              height={600}
              decoding="async"
              data-nimg={1}
              className="img-fluid aos-animate"
              srcSet="/images/About1.webp"
              src="images/first-fiddle.webp"
              style={{ color: "transparent", height: "100%" }}
            />
            <a href="/franches"></a>
          </div>
        </div>
      </div>
    </section>
    <section className="py-5 bg-dark d-lg-block d-none">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-end ">
            <img
              alt=""
              data-aos="fade-right"
              loading="lazy"
              width={600}
              height={600}
              decoding="async"
              data-nimg={1}
              className="img-fluid aos-init aos-animate"
              srcSet="/images/priyank.webp"
              src="images/priyank.webp"
              style={{ color: "transparent" }}
            />
          </div>
          <div
            className="col-md-6 py-5 mt-5 aos-init aos-animate"
            data-aos="fade-right"
          >
            <h1 className="heading8">
              The Game
              <span style={{ color: "rgb(251, 169, 25)" }}>Changer</span>
            </h1>
            <p className="he"> Priyank Sukhija</p>
            <p className="font3 mt-5">
              With over 30 restaurants in 23 years under his belt, the prolific
              restaurateur Priyank Sukhija has become somewhat of a legend in the
              industry, starting his journey at a mere age of 19. Priyank was the
              first in his family to venture into business, hailing from a family
              of lawyers, going on to create an empire in F&amp;B. Following his
              heart and tongue through his F&amp;B career, Priyank has
              successfully created some of the most talked-about brands in the
              industry - Diablo, Lord of the Drinks, Plum by Bent Chair, Lazeez
              Affaire, Tamasha, The Flying Saucer Cafe, and many more.
            </p>
            <div className="py-5 d-flex">
              <a href="/franches">
                <button
                  className="join_the_waitlist_btn btn4 fs-6 fw-bold"
                  style={{ height: 54 }}
                >
                  Join the Waitlist
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-4 bg-dark ">
      <div className="text-center">
        <h1 className="heading8 text-capitalize">
          EXISTING
          <span style={{ color: "rgb(251, 169, 25)" }}> FOOTPRINTS</span>
        </h1>
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
          <span style={{ color: "rgb(251, 169, 25)" }}> FOOTPRINTS</span>
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
    <section className="py-5 bg-dark d-lg-block">
  <div className="container">
    <div className="row">
      <div className="col-md-4 mb-3 aos-init aos-animate" data-aos="fade-down">
        <img
          alt=""
          loading="lazy"
          width={400}
          height={400}
          decoding="async"
          data-nimg={1}
          className="img-fluid"
          srcSet="/images/2.webp"
          src="/images/2.webp" // Updated src
          style={{ color: "transparent" }}
        />
      </div>
      <div className="col-md-4 mb-3">
        <img
          alt=""
          loading="lazy"
          width={400}
          height={400}
          decoding="async"
          data-nimg={1}
          className="img-fluid aos-init aos-animate"
          srcSet="/images/5.webp"
          src="/images/5.webp" // Updated src
          style={{ color: "transparent" }}
        />
      </div>
      <div className="col-md-4 mb-3 aos-init aos-animate" data-aos="fade-down">
        <h1 className="heading8">Meet The</h1>
        <h1 className="heading3 ms-3 mb-0">Team</h1>
        <p className="font3">
          Without question, it is the team behind the brands that make it a
          favourite for its guests. Here a look into those who made the
          dream work.
        </p>
      </div>
      <div className="col-md-4 mb-3">
        <img
          data-aos="fade-up"
          loading="lazy"
          width={400}
          height={400}
          decoding="async"
          data-nimg={1}
          className="img-fluid aos-init"
          srcSet="/images/6.webp"
          src="/images/6.webp" // Updated src
          style={{ color: "transparent" }}
        />
      </div>
      <div className="col-md-4 mb-3">
        <img
          data-aos="fade-up"
          alt=""
          loading="lazy"
          width={400}
          height={400}
          decoding="async"
          data-nimg={1}
          className="img-fluid aos-init"
          srcSet="/images/3.webp"
          src="/images/3.webp" // Updated src
          style={{ color: "transparent" }}
        />
      </div>
      <div className="col-md-4 mb-3">
        <img
          data-aos="fade-up"
          alt=""
          loading="lazy"
          width={400}
          height={400}
          decoding="async"
          data-nimg={1}
          className="img-fluid aos-init"
          srcSet="/images/4.webp"
          src="/images/4.webp" // Updated src
          style={{ color: "transparent" }}
        />
      </div>
    </div>
  </div>
</section>

  </>
  
  )
}

export default About