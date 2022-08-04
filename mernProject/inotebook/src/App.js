import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <h1>Naman Ajmera</h1>
      <Routes>
        <Route excat path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
