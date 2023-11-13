
import './App.css';
// import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Team from './components/Team/Team';
import MyCard from './components/Team/MyCard';

import Home from './components/Home/Home';
import Events from './components/Events/Events';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Home /> 
      <About />

      <Team />
      <MyCard />
    
     
      <Events />
      <Contact />
     
  

      
      
    </div>
  );
}

export default App;
