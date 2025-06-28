
import React from 'react'

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">Your Name</div>
        <ul className="nav-links">
          <li><a href="#intro">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#social">Social</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}
