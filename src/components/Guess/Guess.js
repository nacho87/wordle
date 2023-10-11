import React from 'react';
import {range} from '../../utils'
import {checkGuess} from '../../game-helpers'

const defaultSize = range(0, 5);

function Guess({word = '', answer}) {
  const tryWord = word && checkGuess(word, answer)
  return (
    <p className="guess">
      {
        tryWord.length > 0 && tryWord.map(({letter, status}, value) => {
          return <span key={value} className={`cell ${status}`}>{letter}</span>
        })
      }
      {word.length == 0 && defaultSize.map((value) => {
        return <span key={value} className="cell"></span>
      })}
    </p>
  );
}

export default Guess;
