import logo from './logo.svg';
import './App.css';
import FamilyMembers from './components/FamilyMembers';
import SayHello from './components/SayHello';

function App() {
  return (
    <div className="App">
    <FamilyMembers Name={"Deepti's Family"} />
    <SayHello />
    </div>
  );
}

export default App;
