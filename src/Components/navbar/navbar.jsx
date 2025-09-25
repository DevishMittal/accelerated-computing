import { useEffect, useState } from 'react'
import './navbar.css'
import logo from '../../assets/srm.svg'
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'

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
        <li><Link to='hero' smooth={true} offset={0} duration={500} onClick={() => setMobileMenu(false)}>
          Home</Link></li>
        <li><Link to='about' smooth={true} offset={-290} duration={500} onClick={() => setMobileMenu(false)}>
          About</Link></li>
        <li><Link to='project' smooth={true} offset={-290} duration={500} onClick={() => setMobileMenu(false)}>
          Projects</Link></li>
        <li><Link to='carousel' smooth={true} offset={-260} duration={500} onClick={() => setMobileMenu(false)}>
          Gallery</Link></li>
        <li><Link to='honors-program' smooth={true} offset={-260} duration={500} onClick={() => setMobileMenu(false)}>
          B.Tech Honors</Link></li>
        <li><Link to='activities' smooth={true} offset={-260} duration={500} onClick={() => setMobileMenu(false)}>
          Activities</Link></li>
        <li><Link to='faculty-development' smooth={true} offset={-260} duration={500} onClick={() => setMobileMenu(false)}>
          Development</Link></li>
        <li><Link to='future-plans' smooth={true} offset={-260} duration={500} onClick={() => setMobileMenu(false)}>
          Future Plans</Link></li>
        <li><Link to='system-config' smooth={true} offset={-260} duration={500} onClick={() => setMobileMenu(false)}>
          Systems</Link></li>
        <li><Link to='faculty-profiles' smooth={true} offset={-260} duration={500} onClick={() => setMobileMenu(false)}>
          Faculty</Link></li>
        <li><Link to='footer' smooth={true} offset={-260} duration={1500} onClick={() => setMobileMenu(false)}>
          Contact</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
