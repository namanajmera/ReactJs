import { useState } from 'react';
import './App.css';
import Alert from './commonComponents/Alert';
import NavBar from "./commonComponents/NavBar";
// import About from './components/About';
import TextForm from './components/TextForm';

function App() {
  const heading = "Enter the text to analyze";
  const [mode, setMode] = useState('light');
  const [darkModeText, setDarkModeText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message,
      type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toogleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      setDarkModeText('Enable Dark Mode');
      document.body.style.backgroundColor = "white";
      showAlert('Light mode is enabled', 'success');
    } else {
      setMode('dark')
      setDarkModeText('Enable Light Mode');
      document.body.style.backgroundColor = "black";
      showAlert('Dark mode is enabled', 'success');
    }
  }

  return (
    <div>
      <NavBar title="Text Utils" mode={mode} toogleMode={toogleMode} darkModeText={darkModeText} />
      {alert && <Alert alert={alert} />}
      <div className="container my-3">
        <TextForm heading={heading} mode={mode} showAlert={showAlert} />
        {/* <About /> */}
      </div>
    </div>
  );
}

export default App;
