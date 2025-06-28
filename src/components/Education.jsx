
import React from 'react'

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University Name",
      year: "2020 - 2024",
      description: "Focused on software development, algorithms, and data structures."
    },
    {
      degree: "Full Stack Web Development Certificate",
      school: "Online Bootcamp",
      year: "2023",
      description: "Intensive program covering modern web development technologies."
    }
  ]

  return (
    <section id="education" className="section education">
      <h2>Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="education-item">
          <h3>{edu.degree}</h3>
          <h4>{edu.school}</h4>
          <p className="year">{edu.year}</p>
          <p>{edu.description}</p>
        </div>
      ))}
    </section>
  )
}
