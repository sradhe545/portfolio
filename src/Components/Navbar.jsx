// <!-- Move to up button -->
import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'


const Navbar = () => {
  return (
   <>
<div className="scroll-button">
  <a href="#home"><i className="fas fa-arrow-up"></i></a>
</div>
{/* // <!-- navgaition menu --> */}
<nav>
  <div className="navbar">
    <div className="logo"><a href="#">RADHE</a></div>
    <ul className="menu">
      <li><a href="#home">HOME</a></li>
      <li><a href="#about">ABOUT</a></li>
      <li><a href="#skills">SKILLS</a></li>
      <li><a href="#services">WORK</a></li>
      <li><a href="#contact">CONTACT</a></li>
      <div className="cancel-btn">
        <i className="fas fa-times"></i>
      </div>
    </ul>
    <div className="media-icons">
      <a href="https://www.linkedin.com/in/radhe-shyam-soni-692529148/" target="_blank"
        ><i className="fab fa-linkedin" id="icons"></i></a>
      <a href="https://github.com/sradhe545"target="_blank"
        ><i className="fab fa-github" id='icons'></i></a>
    </div>
  </div>


 

  <div className="menu-btn">
    <div>
  <Menu>
<MenuButton
as={IconButton}
aria-label='Options'
color="black"
// bgColor="black"
icon={<HamburgerIcon />}
variant='outline'
/>
<MenuList>
<MenuItem>
<a href="#home">Home</a>
</MenuItem>
<MenuItem>
<a href="#about">About</a>
</MenuItem>
<MenuItem>
<a href="#skills">Skills</a>
</MenuItem>
<MenuItem>
<a href="#services">Projects</a>
</MenuItem>
<MenuItem>
<a href="#contact">Contact</a>
</MenuItem>
</MenuList>
</Menu>
</div>

  </div>
</nav>
   
   </>
  )
}

export default Navbar


