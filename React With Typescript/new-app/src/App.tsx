import React from 'react';
import './App.css';
import Button from './components/Button';
import Greet from './components/Greet';
import Heading from './components/Heading';
import LoggedIn from './components/LoggedIn';
import Test from './components/Test';

function App() {
  return (
    <div className="App">
      <Greet name="Naman Ajmera" messageCount={20} />
      <Test>
        <Heading>Tesing Form Node.</Heading>
      </Test>
      <Button handleClick={(e, id) => {
        console.log(id, "Button Clicked.", e);
      }} />
      <LoggedIn />
    </div>
  );
}

export default App;
