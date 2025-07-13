import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNode, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiRedux, SiGraphql, SiMongodb } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 />, level: 'Advanced' },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 'Advanced' },
    { name: 'JavaScript', icon: <FaJs />, level: 'Advanced' },
    { name: 'React', icon: <FaReact />, level: 'Advanced' },
    { name: 'TypeScript', icon: <SiTypescript />, level: 'Intermediate' },
    { name: 'Node.js', icon: <FaNode />, level: 'Intermediate' },
    { name: 'Redux', icon: <SiRedux />, level: 'Intermediate' },
    { name: 'GraphQL', icon: <SiGraphql />, level: 'Basic' },
    { name: 'MongoDB', icon: <SiMongodb />, level: 'Advanced' },
    { name: 'Git', icon: <FaGitAlt />, level: 'Advanced' },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                {skill.icon}
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <span className={`skill-level ${skill.level.toLowerCase()}`}>
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;