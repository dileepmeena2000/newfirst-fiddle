import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Home() {
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
            src="https://testvideosfirst-cp.s3.ap-south-1.amazonaws.com/firstfiddlev2/bannervideo.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* end video */}

      <section className="py-5 bg-dark">
        <div className="container">
          <div className="row">
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
                srcSet="/images/first-fiddle.webp"
                src="images/first-fiddle.webp"
                style={{ color: "transparent", height: "100%" }}
              />
            </div>
            <div
              className="col-lg-6 px-3 d-lg-block d-none aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-daley={100}
              data-aos-duration={1000}
            >
              <h1 className="heading8">
                Get To <br /> Know
                <span style={{ color: "rgb(251, 169, 25)" }}>US</span>
              </h1>
              <p className="font3 mt-3">
                First Fiddle Restaurants, one of India leading and widely
                recognised F&amp;B companies, is owned and piloted by Priyank
                Sukhija. A pioneer in the industry, he started First Fiddle
                Restaurants in 1999 with his first brand, Lazeez Affaire, which
                is a loved fine dine space even today. Having completed 24 years
                since, the company now has more than 15 + brands and 35+ outlets
                to it name!
              </p>
            </div>
            <div
              className="col-lg-6 px-3 d-lg-none text-center aos-init aos-animate"
              data-aos="flip-right"
            >
              <h1 className="heading8" />
              Get To <br /> Know
              <span style={{ color: "rgb(251, 169, 25)" }}>US</span>
              <p
                className="font3 mt-3 fs-6 aos-init aos-animate"
                data-aos="flip-right"
              >
                First Fiddle Restaurants, one of India leading and widely
                recognised F&amp;B companies, is owned and piloted by Priyank
                Sukhija. A pioneer in the industry, he started First Fiddle
                Restaurants in 1999 with his first brand, Lazeez Affaire, which
                is a loved fine dine space even today. Having completed 24 years
                since, the company now has more than 15 + brands and 35+ outlets
                to it name!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 bg-dark d-lg-block ">
        <div className="container">
          <div className="row">
            <div
              className="col-md-6 py-5 mt-5 aos-init aos-animate"
              data-aos="fade-right"
            >
              <h1 className="heading8">
                The Game
                <br />
                <span style={{ color: "rgb(251, 169, 25)" }}>Changer</span>
              </h1>
              <p className="he">Priyank Sukhija</p>
              <p className="font3 mt-5">
                With over 30 restaurants in 23 years under his belt, the
                prolific restaurateur Priyank Sukhija has become somewhat of a
                legend in the industry, starting his journey at a mere age of
                19. Priyank was the first in his family to venture into
                business, hailing from a family of lawyers, going on to create
                an empire in F&amp;B. Following his heart and tongue through his
                F&amp;B career, Priyank has successfully created some of the
                most talked-about brands in the industry - Diablo, Lord of the
                Drinks, Plum by Bent Chair, Lazeez Affaire, Tamasha, The Flying
                Saucer Cafe, and many more.
              </p>
              <div className="py-5 d-flex">
                <a href="/franches">
                  <button
                    className="join_the_waitlist_btn btn4 fs-6 fw-bold"
                    style={{ height: 54 }}
                  >
                    Join the Journey
                  </button>
                </a>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-end ">
              <img
                alt=""
                data-aos="zoom-in"
                data-aos-daley={100}
                data-aos-duration={1000}
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
    </>
  );
}

export default Home;
