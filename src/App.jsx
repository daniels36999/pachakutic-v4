import Header from './components/Header';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Education from './components/Education';
import Experience from './components/Experience';
import Timeline from './components/Timeline';
import Proposals from './components/Proposals';
import Roadmap from './components/Roadmap';
import WorkDiagram from './components/WorkDiagram';
import Candidates from './components/Candidates';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#perfil">Saltar al contenido</a>
      <Header />
      <main>
        <Hero />
        <Profile />
        <Education />
        <Experience />
        <Timeline />
        <Proposals />
        <Roadmap />
        <WorkDiagram />
        <Candidates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
