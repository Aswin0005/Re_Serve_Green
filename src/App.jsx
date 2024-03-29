import './App.css';
import NavBar from './MainPage/NavBar';
import Home from './MainPage/Home';
import Works from './Works/HowItWorks';
import WhyReServe from './WhyReserve/WhyReserve';
import RoadMap from './RoadMap/RoadMap';

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <Works/>
      <WhyReServe/>
      <RoadMap/>
    </div>
  );
}

export default App;
