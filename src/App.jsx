
import React from 'react'
import './App.css'
import Header from './components/Header'
import Intro from './components/Intro'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import SocialMedia from './components/SocialMedia'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Intro />
        <Skills />
        <Education />
        <Projects />
        <SocialMedia />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
