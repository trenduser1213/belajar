import React from 'react';
import Tilt from 'react-tilt';
import astronaut1 from './img/astronaut1.png';
function Logo(){
  return(
    <div className="ma4 mt0">
        <Tilt className="Tilt br2 shadow-2 pa6" options={{ max : 50,perspective:1000,scale: 1,speed:300,transition:true,axis:null,easing:"cubic-bezier(.03,.98,.52,.99)", }} style={{ height: 200, width: 20 }} >
            <div className="Tilt-inner"><img src={astronaut1} alt="img"  style={{width: '232px'}} /></div>
        </Tilt>
    </div>
  );
}
export default Logo;