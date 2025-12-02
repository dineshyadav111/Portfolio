import React from 'react'
import './project.css'

const Project = () => {
  return (

    <section className="projects" id='projects'>
      <span className='projectHeader'>Projects</span>
      <div className='projectContainer'>
        <div className='project-Card'>
          <h3 className='project-title'>College Fest Management System</h3>
          <p className='project-para'>A web application designed to streamline the organization of college fest events.
            It enables students to register for events, view schedules, and receive timely updates,
            while organizers can efficiently manage event details. The system also showcases the department and college infrastructure,
            providing participants with a better overview of the campus environment.</p>
          <span className='projects-tools'>Tools: HTML, CSS, Javascript, Git, GitHub </span>
        </div>

        <div className='project-Card'>
          <h3 className='project-title'>Employee Management System – Full Stack Project</h3>
          <p className='project-para'>Built a CRUD Employee Management Web App using Spring Boot (Java), React JS, and MySQL.
                                      Designed RESTful APIs, followed MVC architecture, and integrated the frontend and backend
                                      for smooth data handling and operations.</p>
          <span className='projects-tools'>Tools: React Js, Java, Spring Boot 3, MySQL,JPA, RESTful APIs, PostMan, Git, GitHub</span>
        </div>

        <div className='project-Card'>
          <h3 className='project-title'>Banking Application System</h3>
          <p className='project-para'>Developed a RESTful Banking Application using Spring Boot 3, Spring Data JPA, and MySQL.
            Implemented secure CRUD features like account creation, deposit, withdrawal, and deletion.
            Used a clean layered architecture with DTOs, entities, services, repositories, and controllers.
            Added proper exception handling, MySQL connectivity, and tested all endpoints using Postman.</p>
          <span className='projects-tools'>Tools: Java, Spring Boot 3, MySQL, Git, GitHub, JSP, PostMan </span>
        </div>
      </div>

    </section>

  )
}

export default Project
