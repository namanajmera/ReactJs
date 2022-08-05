import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import NoteState from './context/NotesContext/NoteState';

function App() {
  return (
    <>
      <NoteState>
        <Navbar />
        <h1>Naman Ajmera</h1>
        <Routes>
          <Route excat path="/" element={<Home />} />
          <Route excat path="/about" element={<About />} />
        </Routes>
      </NoteState>
    </>
  );
}

export default App;
