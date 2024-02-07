import React, { useState } from 'react'
import './Navbar.css'
import 'material-design-icons/iconfont/material-icons.css';
import MobileNav from './MobileNav/MobileNav';


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () =>{
        setOpenMenu(!openMenu);
    };


  return ( 
    <>

    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>

        <nav className='nav_wrapper'>
            <div className='nav_content'>
                <img className="logo" src='./assets/images/logo.png' alt=''/>

                <ul>
                    <li>
                        <a className='menu_item'>Home</a>
                    </li>
                    <li>
                        <a className='menu_item'>Skills</a>
                    </li> 
                    <li>
                        <a className='menu_item'>Work Experience</a>
                    </li>
                    <li>
                        <a className='menu_item'>Contact Me</a>
                    </li>

                    <button className='contact_btn' onClick={() => {}}>
                        Hire Me
                    </button>
                </ul>

                <button className='menu_btn' onClick={toggleMenu}>
                <span class="material-icons" style={{fontSize: "1.8rem"}}>{openMenu ? "close" : "menu"}</span>
                </button>
            </div>
        </nav>
    
    
    </>
  )
}

export default Navbar
