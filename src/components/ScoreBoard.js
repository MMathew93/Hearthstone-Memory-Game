import React from 'react';
import './ScoreBoard.css';

function ScoreBoard({ maxScore, score, hiscore }) {
    return (
      <div className= "banner">
        <div className= "scoreDisplay">
            <div className="scores">
                <p>
                    Score: {score}
                </p>
            </div>
            <div div className="scores">
                <p>
                    Hi-Score: {hiscore}
                </p>
            </div>
            <div div className="scores">
                <p>
                    Max Score: {maxScore}
                </p>
            </div>
        </div>
      </div>
    );
  }
  
  export default ScoreBoard;