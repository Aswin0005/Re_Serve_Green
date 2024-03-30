import './App.css';
import NavBar from './MainPage/NavBar';
import Home from './MainPage/Home';
import Works from './Works/HowItWorks';
import WhyReServe from './WhyReserve/WhyReserve';
import RoadMap from './RoadMap/RoadMap';
import Statistics from './Stats/Statistics';
import FaQ from './FaQ/FaQPage';
import Bakery from './RoadMap/Bakery';
import Restaurant from './RoadMap/Restaurants';
import HomeMade from './RoadMap/HomeMade';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Works />
      <WhyReServe />
      {/* <RoadMap /> */}
      <Restaurant />
      <Bakery/>
      <HomeMade />
      <Statistics />
      <FaQ />
    </div>
  );
}

export default App;
