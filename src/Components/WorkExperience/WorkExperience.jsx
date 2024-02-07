import React, { useRef } from 'react'
import './WorkExperience.css'
import { WORK_EXPERIENCE } from '../../utils/data'
import ExperienceCard from './ExperienceCard/ExperienceCard'
import Slider from "react-slick";
import 'material-design-icons/iconfont/material-icons.css';

const WorkExperience = () => {

    const sliderRef = useRef();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const sliderRight = () =>{
        sliderRef.current.slickNext();
    };
    const sliderLeft = () => {
        sliderRef.current.slickPrev();
    };

  return (
    <section className='experience_container'>
        <h5>Work Experience</h5>

        <div className='experience_content'>
            <div className='arrow_right' onClick={sliderRight}>
                <span class="material-icons">chevron_right</span>
            </div>

            <div className='arrow_left' onClick={sliderLeft}>
                <span class="material-icons">chevron_left</span>
            </div>

            <Slider ref={sliderRef} {...settings}>
            {WORK_EXPERIENCE.map((item) => (
                <ExperienceCard key={item.title} details={item}/>
            ))}
            </Slider>
        </div>
    </section>
    
  )
}

export default WorkExperience
