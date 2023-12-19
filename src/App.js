import Tech from './Components/Tech';
import About from './Components/About';
import Projects from './Components/Projects';
import Hero from './Components/Hero';
import BackgroundAnimation from './Components/BackgroundAnimation';
import { Layout } from './Components/Layout';
import './css/index.css';
import './css/Hero.css';
import './css/About.css';
import './css/tech.css';
import './css/tech.css';
import './css/Footer.css';
import './css/header.css';
import './css/mediaQ.css';






function App() {
  return (
    <>

<Layout>
      <div className="Sectiond"  >
        <Hero />
        <BackgroundAnimation />
      </div>
      <Projects />
      <Tech />
      <About />
      </Layout>
    </>
  );
}

export default App;
