import { useState } from 'react';
import './App.css';
import NavBar from "./commonComponents/NavBar";
// import About from './components/About';
import TextForm from './components/TextForm';

function App() {
  const heading = "Enter the text to analyze";
  const [mode, setMode] = useState('light');
  const [darkModeText, setDarkModeText] = useState('Enable Dark Mode');
  const toogleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      setDarkModeText('Enable Dark Mode');
      document.body.style.backgroundColor = "white";
    } else {
      setMode('dark')
      setDarkModeText('Enable Light Mode');
      document.body.style.backgroundColor = "black";
    }
  }
  return (
    <div>
      <NavBar title="Text Utils" mode={mode} toogleMode={toogleMode} darkModeText={darkModeText} />
      <div className="container my-3">
        <TextForm heading={heading} mode={mode} />
        {/* <About /> */}
      </div>
    </div>
  );
}

export default App;
