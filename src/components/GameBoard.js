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
  const [shuffled, setShuffled] = useState(shuffle([...heroes]));
  const [score, setScore] = useState(0);
  const [hiscore, setHiscore]  = useState(score);
  const [riverWidth, setRiverWidth] = useState(3);

    return (
      <div className= "gameboard">
        <ScoreBoard 
          maxScore={heroData.length}
          score={score}
          hiscore={hiscore} />
        <River 
          heroes={heroes}
          setHeroes={setHeroes}
          score={score}
          setScore={setScore}
          hiscore={hiscore}
          setHiscore={setHiscore}
          riverWidth={riverWidth}
          setRiverWidth={setRiverWidth}
          shuffle={shuffle}
          shuffled={shuffled.slice(0, riverWidth)} 
          setShuffled={setShuffled}
          />
      </div>
    );
  }
  
  export default GameBoard;