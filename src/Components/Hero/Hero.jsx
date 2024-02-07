import React from 'react'
import './Hero.css';

const Hero = () => {
  return (
    <section className='hero_container'>
        <div className='hero_content'>
            <h2>Building Digital Experiences That Inspire</h2>
            <p>Passionate Frontend Developer | Tranforming Ideas into Seamless and Visually Stunning Web Solutions</p>
        </div>

        <div className='hero_img'>
            <div>
                <div className='tech_icon'>
                    <img src="./assets/images/react-icon.png" alt=""/>
                </div>
                <img src="./assets/images/Me.jpg" alt="" className='me'/>
            </div>

            <div className='tech_icondiv'>
            <div className='tech_icon'>
                <img src='./assets/images/html-icon.png' alt=""/>
            </div>
            <div className='tech_icon'>
                <img src='./assets/images/css-icon.png' alt=""/>
            </div>
            <div className='tech_icon'>
                <img src='./assets/images/js-icon.png' alt=""/>
            </div>
            </div>

        </div>
    </section>
  )
}

export default Hero
