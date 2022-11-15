import React from 'react';
import { Toggle } from './Toggle';
import { NavBarDiv, NavItems, NavItem, Logo } from './Styles';
import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import styles from "./Navbar.module.css"

const menus = [
    { id: 0, name: 'Home', css: 'home' },
    { id: 1, name: 'About', css: 'about' },
    { id: 2, name: 'Skills', css: 'skills' },
    { id: 3, name: 'Projects', css: 'projects' },
    { id: 4, name: 'Contact', css: 'contact' },
];

function Navbar({ themeToggler }) {
    
    return (
        <NavBarDiv>
            <Logo onClick={() => scroll.scrollToTop()}>
                <span class='grey-color'> &lt;</span>
                <span class='logo-name'>Radhe Shyam Soni</span>
                <span class='grey-color'>/&gt;</span>
            </Logo>

            <NavItems>
                {menus.map((item) => (
                   
                    <Link
                        key={item.id}
                        activeClass='active'
                        to={item.css}
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                       <NavItem key={item.id}>{item.name}</NavItem>
                    </Link>
                ))}
                 <a href="https://drive.google.com/file/d/1adNcTtCPuoQOb84JVWAId0DtTR1LMreh/view?usp=sharing" target="_blank" className={styles.res} style={{ color:"white"}}
                       
                        activeClass='active'
                     
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                      <p style={{marginTop:"1.5px",marginRight:"30px",fontWeight:"700"}}>Resume</p>
                   </a>
            </NavItems>
            
        </NavBarDiv>
    );
}

export default Navbar;
