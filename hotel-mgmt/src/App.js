import './App.css';
import {Route, Routes} from 'react-router-dom';
import General from './pages/General';
import Orthopedic from './pages/Orthopedic';
import Pediatrics  from './pages/Pediatrics';
import Radiology from './pages/Radiology';
import Navigation from './Layout/Navigation';
function App() {
  return (
    <div>
      <div>
      <Navigation/>
      </div>

    <div>
    <Routes>
       < Route path='/generalpath'      element={<General/>} />
       < Route path='/orthopedicpath'  element={<Orthopedic/>} />
       < Route path='/pediatricspath'  element={<Pediatrics/>} />
       < Route path='/radiologypath'  element={<Radiology/>} />
    </Routes>
    </div>
    </div>
  );
}

export default App;
