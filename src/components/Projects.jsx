
import React from 'react'

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Website",
      description: "A full-stack e-commerce platform built with React and Node.js",
      image: "https://via.placeholder.com/300x200?text=E-commerce+Project",
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "Task Management App",
      description: "A productivity app for managing tasks and projects",
      image: "https://via.placeholder.com/300x200?text=Task+Manager",
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather app using external APIs",
      image: "https://via.placeholder.com/300x200?text=Weather+App",
      liveLink: "#",
      codeLink: "#"
    }
  ]

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
