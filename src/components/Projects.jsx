
import React from 'react'

export default function Projects() {
  const projects = [
    {
      title: "Invoice Generator",
      description: "Developed an invoice generator with ReactJS and Material UI for managing company, client, and employee details. Enabled easy creation, updating, and deletion of entries, and generated detailed invoices.",
      image: "https://via.placeholder.com/300x200?text=Invoice+Generator&bg=667eea&color=white",
      technologies: ["ReactJS", "Material UI"],
      period: "Jan 2024 - June 2024",
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "Jal Samruddh Nashik Awareness Website",
      description: "Created a dynamic campaign website showcasing initiative details and project updates. Integrated a donation system and a social wall for users to share photos in a community gallery.",
      image: "https://via.placeholder.com/300x200?text=Jal+Samruddh+Website&bg=764ba2&color=white",
      technologies: ["HTML", "CSS", "JavaScript"],
      period: "April 2024",
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "Agricultural Website with Chatbot",
      description: "Designed an engaging website with HTML and CSS to highlight government agricultural schemes. Implemented a Google Cloud Dialogflow chatbot for instant responses to user queries.",
      image: "https://via.placeholder.com/300x200?text=Agricultural+Website&bg=28a745&color=white",
      technologies: ["HTML", "CSS", "Google Dialogflow"],
      period: "2022-2023",
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "Smart Dustbin Using Arduino",
      description: "Developed a smart dustbin using Arduino and various sensors, including an IR sensor for motion detection, enabling hands-free operation for improved hygiene and convenience.",
      image: "https://via.placeholder.com/300x200?text=Smart+Dustbin&bg=dc3545&color=white",
      technologies: ["Arduino", "IR Sensor", "C++"],
      period: "2022-2023",
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
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-period">{project.period}</span>
              </div>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
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
