
import './App.css';
import Projects from './components/projects/projects';
import Experience from './components/Experience/Experience';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import Techstack from './components/Techstack/Techstack';


function App() {
  

  return (
   <div className='app'>
   
    <Navbar/>
    <Homepage/>
    <Techstack/>
    <Experience/>
    <Projects/>
   </div>
  )
}

export default App
