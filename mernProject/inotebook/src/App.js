import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import NoteState from './context/NotesContext/NoteState';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
      <NoteState>
        <Navbar />
        <div className="container">
          <Routes>
            <Route excat path="/" element={<Home />} />
            <Route excat path="/about" element={<About />} />
            <Route excat path="/login" element={<Login />} />
            <Route excat path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </NoteState>
    </>
  );
}

export default App;
