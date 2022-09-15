import React from "react";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="content">
          <div className="title">
            <span>About Me</span>
          </div>
          <div className="about-details">
            <div className="left">
              <img src='https://st2.depositphotos.com/1802620/7621/v/950/depositphotos_76219969-stock-illustration-online-shopping-flat-concept.jpg' alt="" />
            </div>
            <div className="right">
              <div className="topic">I like to code because it's a usable <span style={{color:"#9b1750"}}>ART</span></div>
              <p>
              To work with maximum potential and grow in a
challenging and dynamic environment, with an
opportunity of working with diverse groups of
people and enhancing the professional skill set
with the learning experience for achieving
organizational goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
