import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Calendar from './Components/Calendar';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <About/>
      <Skills/>
     <Projects/>
     
     <Contact/>
     <Footer/> 
    
    </div>
  );
}

export default App;