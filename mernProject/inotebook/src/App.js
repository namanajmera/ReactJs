import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import NoteState from './context/NotesContext/NoteState';
import Login from './components/Login';
import Signup from './components/Signup';
import AuthState from './context/AuthContext/AuthState';
import { useEffect } from 'react';

function App() {
  const token = localStorage.getItem('token') ? localStorage.getItem('token') : ''
  let navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
    // eslint-disable-next-line
  }, [])
  return (
    <>
      <AuthState>
        <NoteState>
          <Navbar />
          <div className="container">
            <Routes>
              {
                token ? <Route excat path="/" element={<Home />} /> :
                  <Route excat path="/login" element={<Login />} />
              }
              <Route excat path="/signup" element={<Signup />} />
              <Route excat path="/about" element={<About />} />
            </Routes>
          </div>
        </NoteState>
      </AuthState>
    </>
  );
}

export default App;
