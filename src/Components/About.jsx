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
                Hello World! I'm passinate Frontend Developer based out of Masai school’s intensive and
                immersive learning. Look forward to joining a company where I
                will be able to explore My skills. I love to combining the worlds of logic and creative design to make eye-catching,accessible,and user-friendly websites and applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
