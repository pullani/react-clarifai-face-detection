import React, { Component } from 'react';
import Footer from './components/Footer/Footer';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import particlesOptions from './particles'

const app = new Clarifai.App({
  apiKey: '3cc0ce0cb8ac415c9965bf3eaa387aa4'
 });


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box:[]
    }
  }

  calculateFaceLocation = (data) => {
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return data.outputs[0].data.regions.map(face => {
      const clarifaiFace = face.region_info.bounding_box;
      return {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    });
  }
  

  displayFaceBox = (box) => {
    this.setState({box: box})
  }


  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
    .then( response => {
        this.displayFaceBox(this.calculateFaceLocation(response))
        //console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      })
    .catch (err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles' params={particlesOptions}/>
        <Logo />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition imageUrl={this.state.imageUrl} box={this.state.box} />
        <Footer />
      </div>
    );
    }
}

export default App;
