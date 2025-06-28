import React from 'react'
import Header from './components/Header'
import Intro from './components/Intro'
import Skills from './components/Skills'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import SocialMedia from './components/SocialMedia'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Intro />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <SocialMedia />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App