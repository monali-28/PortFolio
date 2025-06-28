
import React from 'react'

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Engineering (Computer Science)",
      school: "MVP'S KBT College of Engineering",
      year: "June 2021 - May 2025",
      grade: "CGPA - 9.00",
      description: "Pursuing comprehensive computer science education with focus on software development and engineering principles."
    },
    {
      degree: "Class 12th - Maharashtra State Board",
      school: "Blossom Junior College of Science, Satana",
      year: "May 2019 - May 2021",
      grade: "Percentage - 94.67%",
      description: "Completed higher secondary education with excellent academic performance in science stream."
    },
    {
      degree: "Class 10th - Maharashtra State Board",
      school: "K.B.H. High School, Virgaon",
      year: "May 2018 - March 2019",
      grade: "Percentage - 88.40%",
      description: "Completed secondary education with strong foundation in core subjects."
    }
  ]

  return (
    <section id="education" className="section education">
      <h2>Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="education-item">
          <div className="education-header">
            <h3>{edu.degree}</h3>
            <span className="grade">{edu.grade}</span>
          </div>
          <h4>{edu.school}</h4>
          <p className="year">{edu.year}</p>
          <p>{edu.description}</p>
        </div>
      ))}
    </section>
  )
}
