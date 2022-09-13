import React from "react";
import { BsFillEnvelopeFill,BsFillTelephoneFill } from "react-icons/bs";

const Contects = () => {
  return (
    <>
      {/* <!-- Contact Me section Start --> */}
      <section className="contact" id="contact">
        {/* <div className="content"> */}
        <div className="title">
          <span>Contact Me</span>
        </div>
        <div className="text">
          <div className="media-icons">
            <div>
            <a href="tel:+919083487594"> <BsFillTelephoneFill id="icon"/></a>
            </div>
            <div>
              <a href="mailto:sradhe545@gmail.com"target="_blank">
                <BsFillEnvelopeFill id="icon" />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/radhe-shyam-soni-692529148/" target="_blank">
                <i id="i" className="fab fa-linkedin"></i>
              </a>
            </div>
            <div>
              <a href="https://github.com/sradhe545"target="_blank">
                <i id="i" className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contects;
