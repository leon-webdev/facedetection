import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import './App.css';
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageForm from './Components/ImageForm/ImageForm';
import RankUsers from './Components/RankUsers/RankUsers';
import FaceDetection from './Components/FaceDetection/FaceDetection';

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
      field: '',
      imageUrl:'',
      box: {},
      route: 'signin'
    }
  }

  calculateFaceLocation = (data) => {
    const faceRegions = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: faceRegions.left_col * width,
      topRow:  faceRegions.top_row * height,
      rightCol: width - (faceRegions.right_col * width),
      bottomRow: height - (faceRegions.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({ box: box })
  }

  onInputChange = (event) => {
    this.setState({ field: event.target.value })
  }

  onSubmit = () => {
    this.setState({
      imageUrl: this.state.field
    })
    app.models.predict(
        Clarifai.FACE_DETECT_MODEL, 
        this.state.field)
        .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
        .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    this.setState({ route: route })
  } 

  render() {
  return (
    <div className="App">
      <Particles className='particles' params={ particlesParams }/>
      { this.state.route === 'home'
        ? <div>
            <div className='flex justify-around items-center ma2'>
              <Logo />
              <Navigation onRouteChange={ this.onRouteChange }/>
            </div>
            <RankUsers />
            <ImageForm onInputChange={ this.onInputChange } onButtonSubmit={ this.onSubmit }/>  
            <FaceDetection imageUrl={ this.state.imageUrl } faceCoord={ this.state.box } />
          </div>
        : (
          this.state.route === 'signin' 
          ? <SignIn onRouteChange={ this.onRouteChange }/>
          : <Register onRouteChange={ this.onRouteChange }/>
        )
      }
    </div>
  );
  }

}

export default App;
