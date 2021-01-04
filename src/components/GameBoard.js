import React, { useState } from 'react';
import ScoreBoard from './ScoreBoard';
import heroData from '../data/heroData';
import River from './River';

import './GameBoard.css';



function GameBoard() {
  //Shuffle the heroData array
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const [heroes, setHeroes] = useState(heroData);
  const [score, setScore] = useState(0);
  const [hiscore, setHiscore]  = useState(score);
  const [riverWidth, setRiverWidth] = useState(3);
  const [shuffled, setShuffled] = useState(shuffle([...heroes].slice(0, riverWidth)));

  const heroSelect = (id) => {

    const clickedCard = heroes.find(hero => hero.id === id);

    if(clickedCard.isClicked) {
      if(score >= hiscore) {
        setHiscore(score);
      }
      setScore(0);
      setRiverWidth(3);
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
      setShuffled(shuffle([...heroes].slice(0, riverWidth)));
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
      <div className= "gameboard">
        <ScoreBoard 
          maxScore={heroData.length}
          score={score}
          hiscore={hiscore} />
        <River shuffled={shuffled} heroSelect={heroSelect} />
      </div>
    );
  }
  
  export default GameBoard;