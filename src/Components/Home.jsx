import React from 'react'
import rss from "./Images/photo.jpg"
const Home = () => {
  return (
   <>
   
   <section className="home" id="home">
      <div className="home-content">
        <div className="text">
          <div className="text-one">Hello,my name is</div>
          <div className="text-two">Radhe Shyam Soni</div>
          <div className="text-three">I'm a <span style={{color:"#9b1750"}}>Full Stack Developer</span> </div>
          <div className="button">
                <button>
                  <a href="https://drive.google.com/file/d/1qluNIVF6gfdIvfRlsrZ-H3u-1hnmYmA5/view?usp=sharing" target="_blank">
                    Resume
                  </a>
                </button>
              </div>
        </div>
        <div className='homeImg'>
          <img src={rss} className='homeImg'/>
        </div>
      </div>
    </section>
   
   </>

  )
}

export default Home