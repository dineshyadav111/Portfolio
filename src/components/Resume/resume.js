import React from 'react'
import './resume.css'
import PDF_img from '../../assets/PDF_img.png';  
import resumePDF from '../../assets/RESUME_dinesh_1.pdf';

const Resume = () => {
  
   const handlerdownload = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "RESUME_dinesh_1.pdf"; // rename if you want
    link.click();
  };
  return (
    <section className="resume" id='Resume'>
        <span className='resume-title'>Resume</span>  
        <div className='resumeBox'>
         <div className='resumeBox-left'>
            <h3 className='resume-header'>Download Resume</h3>
            <p className='resume-para'>Get a complete overview of my experience,skills,and achievements</p>
            <button className='resume-btn' onClick={handlerdownload}>
            <img src={PDF_img} alt="pdf_image" className="pdf-img" />
            Download PDF
            </button>
        </div>

        <div className='resumeBox-right'>
            <h3 className='resume-header'>Key Highlights</h3>
            <ul className='resumeBox-right-ul'>
                <li>Experienced in building responsive web applications using React, HTML, CSS, and JavaScript.</li>
                <li>Strong foundation in Java (OOP), SQL, and Spring Framework, with practical project experience.</li>
                <li>Completed a 2-month IBM Summer Internship, gaining industry-level front-end development exposure.</li>
                <li>Skilled in bridging mechanical and software solutions, combining analytical thinking with practical implementation.</li>
                <li>Proficient in version control using Git and collaborative development practices.</li>
                <li>Passionate about continuous learning and staying updated with the latest web development trends.</li>

            </ul>
        </div>
        </div>
    </section>
  )
}

export default Resume
