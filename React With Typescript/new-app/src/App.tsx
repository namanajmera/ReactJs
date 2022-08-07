import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Test from './components/Test';

function App() {
  return (
    <div className="App">
      <Greet name="Naman Ajmera" messageCount={20}/>
      <Test>
        <Heading>Tesing Form Node.</Heading>
      </Test>
    </div>
  );
}

export default App;
