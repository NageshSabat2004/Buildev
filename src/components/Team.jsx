import React, { useState } from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Nagesh Sabat',
      role: 'Developer / Designer',
      info: 'Hi, I’m a passionate Full Stack Web Developer specializing in HTML, CSS, JS, React, PHP, MySQL, and SCSS. I create modern, responsive websites and applications that help businesses grow their digital presence. From frontend design to backend development, I deliver clean code with a focus on performance and user experience..',
      image: '/NageshSabat.png'
    },
    {
      name: 'Hiren Panchal',
      role: 'Developer / Designer',
      info: 'Hi, I’m a passionate Full Stack Web Developer specializing in HTML, CSS, JS, React, PHP, MySQL, and SCSS. I create modern, responsive websites and applications that help businesses grow their digital presence. From frontend design to backend development, I deliver clean code with a focus on performance and user experience..',
      image: '/govind.jpg'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="team-section">
      
      <div className="photo-container">
        {teamMembers.map((member, index) => (
          <img
            key={index}
            src={member.image}
            alt={member.name}
            className={index === activeIndex ? 'active' : ''}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      <div className="info-container">
        <h2>{teamMembers[activeIndex].name}</h2>
        <h4>{teamMembers[activeIndex].role}</h4>
        <p>{teamMembers[activeIndex].info}</p>
      </div>
      
    </div>
  );
};

export default Team;
