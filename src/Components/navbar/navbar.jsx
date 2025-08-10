import React, { useEffect, useState } from 'react'
import './navbar.css'
import logo from '../../assets/srm.svg'
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'
import styles from '../Teacher/Teacher.module.css';

const Navbar = () => {

    const [sticky, setSticky] = useState(false);
    useEffect(()=>{
      window.addEventListener('scroll', ()=>{
        window.scrollY > 200 ? setSticky(true) : setSticky(false);
      })
    },[]);

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo'/>
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>
          Home</Link></li>
        <li><Link to='about' smooth={true} offset={-290} duration={500}>
          About Us</Link></li>
        <li><Link to='project' smooth={true} offset={-290} duration={500}>
          Ongoing Projects</Link></li>
          <li><Link to='indicator' smooth={true} offset={350} duration={500} >
            Faculty</Link></li>
        {/* <li><Link to='person' smooth={true} offset={-290} duration={500}>
          Faculty</Link></li> */}
        <li><Link to='carousel' smooth={true} offset={-260} duration={500}>
          Gallery</Link></li>
          <li><Link to='footer' smooth={true} offset={-260} duration={1500}>
          Contact Us</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
