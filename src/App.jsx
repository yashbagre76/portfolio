import { useState } from 'react'
import HeroSection from './Components/Hero'
import Main from "./Components/Main"
import About from './Components/About'
import Explore from './Components/Explore'
import Skillsection from './Components/Skiillsection'
import ExperienceTimline from './Components/ExperienceTimline'
import Projects from './Components/Projects'
import Footer from './Components/Footer'




function App() {


  return (
    <>
      < HeroSection/>
      <Main/>
    <About/>
    <Explore/>
   <Skillsection/>
   <ExperienceTimline/>
   <Projects/>
   <Footer/>
    </> 
  )
}

export default App
