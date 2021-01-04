import React from 'react';
//import Hero from './Hero';
import './River.css';

function River({heroes, setHeroes, score, setScore, hiscore, setHiscore, riverWidth, setRiverWidth, shuffle, shuffled, setShuffled}) {

  const heroSelect = (id) => {

    const clickedCard = heroes.find(hero => hero.id === id);

    if(clickedCard.isClicked) {
      if(score >= hiscore) {
        setHiscore(score);
        setScore(0);
        setRiverWidth(3);
      }
      //reset cards
      setHeroes([...heroes.map(hero => {
          hero.isClicked = false;
          return hero;
        }),
      ]);
    }else {
      //set card to clicked
      if((score + 1) % 5 === 0 && score <= 15){
        setRiverWidth(riverWidth + 1)
      }
      clickedCard.isClicked = true;
      setScore(score + 1);
    }

    const unClickedCards = heroes.filter(hero => hero.isClicked === false);

    if(unClickedCards.length === 0) {
      alert('You won!')
      setHiscore(heroes.length);
      setScore(0);
      setRiverWidth(3);
      //reset cards
      setHeroes([...heroes.map(hero => {
        hero.isClicked = false;
        return hero;
        }),
      ]);
      //board should reshuffle here and start over
      setShuffled(shuffle([...heroes]));
    }else {
      //need a minimum of 1 valid card in the pool
      //rest of deck can not contain that card
      const validCard = shuffle(unClickedCards)[0];
      const guarantee = [
        validCard, ...shuffle(heroes.filter(hero => hero.id !== validCard.id && !shuffled.includes(hero))).slice(0, riverWidth - 1)
      ]
      setShuffled(shuffle([...guarantee]));
    }
  }

    return (
      <div className= "river">
        {shuffled.map(function(hero) {
          return(
            <div className= "Hero" 
                  key= {hero.id} 
                  id={hero.id} 
                  onClick={() => heroSelect(hero.id)}>
              <img src={hero.image} alt={hero.name}/>
            </div>
          )
        })}
      </div>
    );
  }
  
  export default River;