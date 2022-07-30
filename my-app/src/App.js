import './App.css';
import NavBar from "./commonComponents/NavBar";
import TextForm from './forms/TextForm';

function App() {
  const heading = "Enter the text to analyze";
  return (
    <div>
      <NavBar title="Text Utils" />
      <div className="container my-3">
        <TextForm heading={heading} />
      </div>
    </div>
  );
}

export default App;
