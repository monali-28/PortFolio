import './App.css'
import Contact from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'
import Header from './components/Header'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Skills from './components/Skills'
import SocialMedia from './components/SocialMedia'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Intro />
        <Skills />
        <Education />
        {/* <Experience /> */}
        <Projects />
        <SocialMedia />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App