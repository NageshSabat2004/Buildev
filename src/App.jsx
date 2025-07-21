import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Navbar from './components/Navbar'
import Coder from './components/Coder'
import Design from './components/Design'
import Services from './components/Services';
import Contact from './components/Contact';
import Team from './components/Team';
import Footer from './components/Footer'
import ImageSlider from './components/ImageSlider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <section className="navhome" id="home"></section>

    <section className="heropage" style={{ backgroundColor: '#fff'}}>
        <div className="screen1">
          <Coder/>
          <Design/>
        <img className='person' src='/person.svg'></img>
        <div className="glass-card">
          <p className="cr">DEVELOPER</p>|
          <p className="dr">DESIGNER</p>
        </div>
        </div>
      </section>

    <section id="services" style={{ backgroundColor: '#fafafaff', padding: '2rem', position:'relative' }}>
        <Services />
      </section>

      <section id="portfolio" style={{ backgroundColor: '#', padding: '2rem' }}>
        <h1>Portfolio</h1>
        <ImageSlider />
      </section>

      <section id="contact" style={{ backgroundColor: '#fafafaff', padding: '2rem', paddingBottom: '0' }}>
        <h1>Contact Us</h1>
        <Contact />
      </section>

      <section id="team" style={{ backgroundColor: '#', padding: '2rem' }}>
        <h1>Our Team</h1>
        <Team />
      </section>
      <Footer/>
    </>
  )
}

export default App
