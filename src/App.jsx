import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';
// import About from './components/About';

function App() {

  return (
    <>
      <Navbar title="Text Utils" home="Info" />
      <div className="container">
      <TextForm heading="Enter the Text to Analyze" />
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
