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
          <h3 className='project-title'>Portfolio</h3>
          <p className='project-para'>Developed a responsive and interactive portfolio website using HTML, CSS, JavaScript, and React.js, showcasing projects with modern UI design and seamless user experience.</p>
          <span className='projects-tools'>Tools: HTML, CSS, Javascript, React Js, Git, GitHub</span>
        </div>

        <div className='project-Card'>
          <h3 className='project-title'>User Management System</h3>
          <p className='project-para'>Developed a dynamic User Management System using Tomcat, Maven,JDBC, Servlets, and JSP with MVC architecture. The system supported CRUD operations on user data with MySQL integration and included features like user registration, role-based access control. Ensured modular design using JavaBeans, JSP for UI,
Servlets for controllers, and JDBC for database operations.</p>
          <span className='projects-tools'>Tools:: Java, Tomcat, JDBC, Servlets, JSP </span>
        </div>
       </div>

      </section>
    
  )
}

export default Project
