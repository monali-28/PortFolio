
import React from 'react'

export default function SocialMedia() {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/monalikhairnar", icon: "💻" },
    { name: "LinkedIn", url: "https://linkedin.com/in/monali-khairnar", icon: "💼" },
    { name: "Email", url: "mailto:monalikhairnar@example.com", icon: "📧" },
    { name: "Portfolio", url: "#", icon: "🌐" }
  ]

  return (
    <section id="social" className="section social-media">
      <h2>Connect With Me</h2>
      <p className="social-subtitle">Let's collaborate and build something amazing together!</p>
      <div className="social-links">
        {socialLinks.map((social, index) => (
          <a 
            key={index}
            href={social.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            title={social.name}
          >
            <span className="social-icon">{social.icon}</span>
            <span className="social-name">{social.name}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
