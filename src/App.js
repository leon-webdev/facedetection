import React from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageForm from './Components/ImageForm/ImageForm';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <ImageForm />
      {/* <Rank />
      
      <FaceDetection /> */}
    </div>
  );
}

export default App;
