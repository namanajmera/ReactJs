import './App.css';
import NavBar from "./commonComponents/NavBar";
// import About from './components/About';
import TextForm from './components/TextForm';

function App() {
  const heading = "Enter the text to analyze";
  return (
    <div>
      <NavBar title="Text Utils" />
      <div className="container my-3">
        <TextForm heading={heading} />
        {/* <About /> */}
      </div>
    </div>
  );
}

export default App;
