import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageForm from './Components/ImageForm/ImageForm';
import RankUsers from './Components/RankUsers/RankUsers';

const app = new Clarifai.App({
  apiKey: '6c6c7456e7fe4ea5a0cdf68dc6e7ac30'
 });

const particlesParams = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      field: ''
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onSubmit = () => {
    app.models.predict(
        "a403429f2ddf4b49b307e318f00e528b", 
        "https://samples.clarifai.com/face-det.jpg")
        .then(
    function(response) {
      console.log(response)
    },
    function(err) {
      // there was an error
      console.log(err)
    }
  );
  }

  render() {
  return (
    <div className="App">
      <Particles className='particles' params={particlesParams}/>
      <div className='flex justify-around items-center'>
        <Logo />
        <Navigation />
      </div>
      <RankUsers />
      <ImageForm onInputChange={ this.onInputChange } onButtonSubmit={ this.onSubmit }/>  
      {/* <FaceDetection /> */}
    </div>
  );
  }

}

export default App;
