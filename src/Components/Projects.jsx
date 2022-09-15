import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";

const Projects = () => {
  return (
    <>
      {/* <!-- My Services Section Start --> */}
      <section className="services" id="services">
        <div className="content">
          <div className="title">
            <span>My Projects</span>
          </div>
          {/* upper group */}
          <div className="boxes">
            {/* first project */}
            <div className="box">
              <div className="icon">
                {/* <!-- <i className="fas fa-desktop"></i> --> */}
                <img
                  className="imgs"
                  src="https://i.ibb.co/RBK4Y7B/Screenshot-1103.png"
                  alt=""
                />
              </div>
              <div className="topic">ASOS</div>
              <div className="topicsum">
              <div className='paradiv'><p>
              This  is an E-Commerce retailer famous worldwide for its latest fashion and trends in menswear and womenswear.
              </p></div>
              <p>
              Teckstack : HTML | CSS | JavaScript | Bootstrap
              </p>
              </div>
              <div className="media-icons" id="linkss">
                <a href="https://github.com/Aman103767/Unit-3-project"target="_blank">
                  {" "}
                  <i id="ic" className="fab fa-github"></i>
                </a>
                <a href="https://zingy-syrniki-a672bb.netlify.app/
                 "target="_blank">
                <AiOutlineGlobal id="btns"/>
                </a>
              </div>
            </div>
            
            {/* second project */}
            <div className="box" id="box">
              <div className="icon">
                {/* <!-- <i className="fas fa-desktop"></i> --> */}
                <img
                  className="imgs"
                  src="https://i.ibb.co/M55FmLw/Screenshot-1104.png"
                  alt=""
                />
              </div>
              <div className="topic">Big Basket</div>
              <div className="topicsum">
              <div className='paradiv'><p>
              This is a E-commerce Website which allows you to order grocery products, fulfil daily needs products and even beauty products within a few clicks.
              </p></div>
              <p>
                Teckstack : HTML | CSS | JavaScript 
              </p>
              </div>
              <div className="media-icons" id="linkss">
                <div><a href="https://github.com/Uchiha-D-Kurosaki/BigBasket-Version-1.0"target="_blank">
                  {" "}
                  <i id="ic" className="fab fa-github"></i>
                </a></div>
                <div>
                <a href="https://ubiquitous-pony-5893de.netlify.app/"target="_blank"><AiOutlineGlobal id="btns"/>
                </a></div>
              </div>
            </div>
          </div>
      
      {/* below group */}

             <div className="boxes">
            {/* third project */}
              {/* forth project */}
            </div> 


        </div>
      </section>
    </>
  );
};

export default Projects;
