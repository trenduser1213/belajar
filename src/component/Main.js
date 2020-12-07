import React from 'react';
import Tilt from 'react-tilt';
// import Particles from 'react-particles-js';
import astronaut1 from './img/astronaut1.png';
// const particlesOption = {

// "particles": {
//   "number": {
//       "value": 8,
//       "density": {
//           "enable": true,
//           "value_area": 200
//       }
//   },
//   "line_linked": {
//       "enable": false
//   },
//   "move": {
//       "speed": 1,
//       "out_mode": "out"
//   },
//   "shape": {
//       "type": ["circle","star","crescent"]
//   },
//   "color": {
//       "value": ["#eccc68","#70a1ff","#ffa502"]
//   },
//   "size": {
//       "value": 15,
//       "random": false,
//       "anim": {
//           "enable": true,
//           "speed": 4,
//           "size_min": 10,
//           "sync": false
//       }
//   }
// },
// "retina_detect": false
// }
const Main = ({onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <main className="page lanidng-page" style={{ marginTop: '50px' }}>
        <section className="portfolio-block block-intro website background" style={{ paddingBottom: '0px', paddingTop: '0px', marginTop: '-15px' }}>
          {/* <Particles className="particles" style={{ marginBottom: '-650px' , zIndex: 1}}
            params={particlesOption} /> */}
          {/* </Particles> */}
          <div className="container masuk" style={{ paddingTop: '00px' }}>
            <div className="about-me" style={{ paddingTop: '30px' }}>
              <form className method="post" style={{ marginTop: '-31px' }}>
                <div className="illustration">
                  <header>
                    <h1 className="text-monospace text-light">Neal_Amstrong</h1>
                  </header>
                  <p className="text-white" /*style={{paddingTop: '23px'}}*/>
                    This Magic Brain Will Detect Faces in Your Pictures.Give It a Try.
                  </p>
                </div>
                <div className="form-group"><input className="border rounded form-control" type="text" onChange={onInputChange} required placeholder="URL" autofocus /></div>
                <div className="form-group"><button className="btn btn-primary btn-block" type="submit" onClick={onButtonSubmit} style={{ filter: 'blur(0px) brightness(100%) contrast(100%) grayscale(1%)' }}>CLICK NOW . . . !</button></div>
                <Tilt className="Tilt br2 center shadow-2" options={{ max: 50 }} style={{ height: 200, width: 200 }}>
                  <div className="Tilt-inner pa3">
                    <img src={astronaut1} alt="img" style={{ width: '232px' }} />
                  </div>
                </Tilt>
              </form>
              <div />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
export default Main;