import React from 'react';

function Hero({hero, heroSelect}) {

    return (
      <div className= "Hero" id={hero.id} onClick={() => heroSelect(hero.id)}>
        <img src={hero.image} alt={hero.name}/>
      </div>
    );
  }
  
  export default Hero;