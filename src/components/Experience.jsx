
import React from 'react'

export default function Experience() {
  const experience = [
    {
      position: "Web Developer Intern",
      company: "WEOTO Private Limited, Nashik",
      period: "Internship Period",
      responsibilities: [
        "Enhanced user experience by developing web interfaces using React and Material UI",
        "Collaborated with the development team to implement innovative design solutions",
        "Gained hands-on experience in modern web development practices"
      ]
    }
  ]

  return (
    <section id="experience" className="section experience">
      <h2>Professional Experience</h2>
      {experience.map((exp, index) => (
        <div key={index} className="experience-item">
          <div className="experience-header">
            <h3>{exp.position}</h3>
            <span className="experience-period">{exp.period}</span>
          </div>
          <h4>{exp.company}</h4>
          <ul className="responsibilities">
            {exp.responsibilities.map((responsibility, respIndex) => (
              <li key={respIndex}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
