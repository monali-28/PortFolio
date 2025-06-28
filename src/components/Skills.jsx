
import React from 'react'

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      technologies: ["React", "JavaScript", "HTML5", "CSS3", "TypeScript"]
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Python", "Express", "MongoDB", "PostgreSQL"]
    },
    {
      category: "Tools & Others",
      technologies: ["Git", "Docker", "AWS", "Figma", "VS Code"]
    }
  ]

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
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
