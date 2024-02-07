import React from 'react'
import './SkillsInfoCard.css'

const SkillsInfoCard = ({heading, skills}) => {
  return (
    <div className='skills_info_card'>
      <h6>{heading}</h6>

      <div className='skills_info_content'>
        {skills.map((item, index) => (
          <React.Fragment key={`skill_${index}`}>
            <div className='skill_info'>
              <p>{item.skill}</p>
              <p className='percentage'>{item.percentage}</p>
            </div>

            <div className='skill_progress_bg'>
              <div className='skill_progress' style={{width: item.percentage}}/>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SkillsInfoCard
