import React from 'react'
import './MobileNav.css'

const MobileNav = ({isOpen, toggleMenu}) => {

  return (
    <>
        <div className={`mobile_menu ${isOpen ? "active" : "" }`} onClick={toggleMenu}>
            <div className='mobile_menu_container'>
                <img className='logo' src="./assets/images/logo.png" alt=""/>
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
            </div>
        </div>
    
    
    </>
  )
}

export default MobileNav
