
import React from 'react'

export default function Skills() {
  const skills = [
    {
      category: "Programming Languages",
      technologies: ["Java", "C++", "JavaScript", "HTML5", "CSS3", "React.js"]
    },
    {
      category: "Database & Tools",
      technologies: ["MySQL", "Git", "GitHub", "Material UI", "Arduino"]
    },
    {
      category: "Soft Skills",
      technologies: ["Leadership", "Teamwork", "Adaptability", "Problem Solving", "Communication"]
    }
  ]

  return (
    <section id="skills" className="section">
      <h2>Technical & Soft Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">
              {skill.category === "Programming Languages" && "💻"}
              {skill.category === "Database & Tools" && "🛠️"}
              {skill.category === "Soft Skills" && "🤝"}
            </div>
            <h3>{skill.category}</h3>
            <ul>
              {skill.technologies.map((tech, techIndex) => (
                <li key={techIndex}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
