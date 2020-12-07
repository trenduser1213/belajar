
import { Component } from 'react'
import Navbar from './component/Navbar';
import Main from './component/Main';
import './App.css';
import Footer from './component/Footer';
// import { render} from "react-dom";
// import Particles from 'react-particles-js';

// const particlesOption = {

//   "particles": {
//     "number": {
//         "value": 8,
//         "density": {
//             "enable": true,
//             "value_area": 200
//         }
//     },
//     "line_linked": {
//         "enable": false
//     },
//     "move": {
//         "speed": 1,
//         "out_mode": "out"
//     },
//     "shape": {
//         "type": ["circle","star","crescent"]
//     },
//     "color": {
//         "value": ["#eccc68","#70a1ff","#ffa502"]
//     },
//     "size": {
//         "value": 15,
//         "random": false,
//         "anim": {
//             "enable": true,
//             "speed": 4,
//             "size_min": 10,
//             "sync": false
//         }
//     }
//   },
//   "retina_detect": false
//   }

class App extends Component{
  constructor() {
    super();
    this.state ={
      input:'',
    }
  }

  onInputChange = (value) => {
    console.log(value.target);
  }

  onButtonSubmit = () => {
    console.log('click');
  }

  render(){
    return (
      <div className="App">      
        {/* <Particles className="particles" style={{ marginBottom: '-650px' , zIndex: 2}}
            params={particlesOption} /> */}
        <Navbar />      
        <Main 
          oninputchange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
