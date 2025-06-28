
import React from 'react'

export default function SocialMedia() {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/yourusername", icon: "GitHub" },
    { name: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: "LinkedIn" },
    { name: "Twitter", url: "https://twitter.com/yourusername", icon: "Twitter" },
    { name: "Instagram", url: "https://instagram.com/yourusername", icon: "Instagram" }
  ]

  return (
    <section id="social" className="section social-media">
      <h2>Connect With Me</h2>
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
            {social.icon}
          </a>
        ))}
      </div>
    </section>
  )
}
