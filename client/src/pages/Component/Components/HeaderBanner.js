import React, { useEffect } from "react";
import Banner from "../../../assets/Images/Banner/Banner.png";
import Aos from "aos";
import "aos/dist/aos.css";
const HeaderBanner = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  return (
    <>
      <div id="Home">
        <div className="banner-img">
          <span className=" ">
            <div className="">
              <img
                src={Banner}
                className=" img-fluid  mx-auto width: 100% "
                alt="Banner"
              ></img>
            </div>
          </span>
          <div className="img-bnr-text ">
            <div>
              <h5
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="50"
              >
                Homme d'influence
              </h5>
              <h1
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                Martin Parker
              </h1>
              <p
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                Comment je suis passé de No Body...
                <br />A l'homme que je suis aujourd'hui.
              </p>
              <button
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
                className="BtnView"
              >
                Voir Plus
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderBanner;
