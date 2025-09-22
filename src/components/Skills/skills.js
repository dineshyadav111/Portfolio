import React from 'react'
import './skills.css'

const Skills = () => {
  return (
    <section id='skills'>
     <span className='skilltitle'>What i do</span>
     <span className='skillDes'>I specialize in developing full-stack web applications that combine strong back-end logic with intuitive front-end design.
      My goal is to build scalable, reliable, and engaging digital experiences.</span>
      <div className="skills-section">
  <div className="skill-box">
    <h3>Front-End</h3>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React.js</li>
    </ul>
  </div>

  <div className="skill-box">
    <h3>Back-End</h3>
     <ul>
      <li>Java</li>
      <li>Spring Boot</li>
      <li>Hibernate</li>
      <li>SQL</li>
    </ul>
  </div>

  <div className="skill-box">
    <h3>Tools</h3>
    <ul>
      <li>Git</li>
      <li>GitHub</li>
      <li>VS Code</li>
      <li>Eclipse</li>
    </ul>
  </div>
</div>

    </section>
  )
}

export default Skills
