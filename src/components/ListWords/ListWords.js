import React from 'react';
import {range} from '../../utils'
import {NUM_OF_GUESSES_ALLOWED} from '../../constants'
import Guess from '../Guess'


const qtyOfWords = range(0, NUM_OF_GUESSES_ALLOWED);

function ListWords({listWords}) {

  return (
    <div className="guess-results">
      {qtyOfWords.map((value) => {
        return <Guess key={value} word={listWords[value]}/>
      })}
    </div>
  );
}

export default ListWords;
