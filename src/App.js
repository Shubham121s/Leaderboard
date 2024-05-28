import './index.css';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Hero from './components/Hero';


const App = () => {
  return (
    <div className=" border-teal-600" >
       <Navbar/>
       <Navbar2/>
       <Hero/>
      
    </div>
  )
}

export default App;
