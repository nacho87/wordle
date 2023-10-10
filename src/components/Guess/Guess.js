import React from 'react';
import {range} from '../../utils'

const defaultSize = range(0, 5);

function Guess({word = ''}) {
  return (
    <p className="guess">
      {defaultSize.map((value) => {
        return <span key={value} className="cell">{word[value]}</span>
      })}
    </p>
  );
}

export default Guess;
