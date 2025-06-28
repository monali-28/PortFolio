
import React from 'react'

export default function Intro() {
  return (
    <section id="intro" className="intro">
      <div className="intro-container">
        <div className="intro-content">
          <div className="intro-text">
            <div className="greeting">Hello 👋</div>
            <h1>I'm <span className="name-highlight">Monali Khairnar</span></h1>
            <div className="role">Computer Science Student & Web Developer</div>
            <p className="description">
              Passionate about creating innovative web solutions with React.js and modern technologies. 
              I transform ideas into beautiful, functional applications that make a difference.
            </p>
            <div className="stats">
              <div className="stat">
                <span className="stat-number">9.00</span>
                <span className="stat-label">CGPA</span>
              </div>
              <div className="stat">
                <span className="stat-number">4+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">1</span>
                <span className="stat-label">Internship</span>
              </div>
            </div>
            <div className="intro-buttons">
              <a href="#contact" className="btn-primary">
                <span>Let's Connect</span>
                <span className="btn-icon">→</span>
              </a>
              <a href="#projects" className="btn-secondary">
                <span>View Work</span>
                <span className="btn-icon">↓</span>
              </a>
            </div>
          </div>
          <div className="intro-visual">
            <div className="profile-card">
              <div className="profile-avatar">
                <span className="avatar-text">MK</span>
              </div>
              <div className="floating-elements">
                <div className="floating-item react">⚛️</div>
                <div className="floating-item js">JS</div>
                <div className="floating-item css">CSS</div>
                <div className="floating-item html">HTML</div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </div>
    </section>
  )
}
