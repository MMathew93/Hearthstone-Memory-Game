import React from 'react';
import Hero from './Hero';
import './River.css';

function River({shuffled, heroSelect}) {

    return (
      <div className= "river">
        {shuffled.map(function(hero) {
          return(
            <Hero key={hero.id} hero={hero} heroSelect={heroSelect} />
          )
        })}
      </div>
    );
  }
  
  export default River;