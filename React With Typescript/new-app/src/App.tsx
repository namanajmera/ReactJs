import React from 'react';
import './App.css';
import Button from './components/Button';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Test from './components/Test';

function App() {
  return (
    <div className="App">
      <Greet name="Naman Ajmera" messageCount={20} />
      <Test>
        <Heading>Tesing Form Node.</Heading>
      </Test>
      <Button handleClick={() => {
        console.log("Button Clicked.");
      }} />
    </div>
  );
}

export default App;
