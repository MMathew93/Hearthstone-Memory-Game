import React from 'react';

function Hero({hero}) {

    return (
      <div className= "Hero" id={hero.id}>
        <img src={hero.image} alt={hero.name}/>
      </div>
    );
  }
  
  export default Hero;