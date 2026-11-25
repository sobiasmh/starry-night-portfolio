import Starfield from './components/Starfield'
import Nav from './components/Nav'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import PrivateWork from './sections/PrivateWork'
import Skills from './sections/Skills'
import Art from './sections/Art'

export default function App() {
  return (
    <>
      <Starfield />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <PrivateWork />
        <Skills />
        <Art />
      </main>
    </>
  )
}
