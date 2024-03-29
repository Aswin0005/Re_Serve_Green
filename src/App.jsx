import './App.css';
import NavBar from './MainPage/NavBar';
import Home from './MainPage/Home';
import Works from './Works/HowItWorks';
import WhyReServe from './WhyReserve/WhyReserve';
import RoadMap from './RoadMap/RoadMap';
import Statistics from './Stats/Statistics';
import FaQ from './FaQ/FaQPage';

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <Works/>
      <WhyReServe/>
      <RoadMap/>
      <Statistics/>
      <FaQ/>
    </div>
  );
}

export default App;
