import React from 'react';
import Form from '../Form'
import ListWords from '../ListWords'
import { sample } from '../../utils';
import { WORDS } from '../../data';
import FinishBanner from '../FinishBanner/FinishBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [value, setValue] = React.useState('');
  const [listWords, setListWords] = React.useState([]);
  const [endGame, setEndGame] = React.useState(false);
  const [guesses, setGuesses] = React.useState(0);
  const [win, setWin] = React.useState(false);

  function addWord(newWord) {
    if(listWords.length < 6) {
      setListWords([...listWords, newWord]);
      setGuesses(listWords.length + 1);
    }
    

    if(listWords.length == 5) {
      setEndGame(true)
    }

    if(answer === value) {
      setWin(true)
      setEndGame(true)
    }
  }

  return <>
    <>Put a game here!</>;
    <ListWords value={value} listWords={listWords} answer={answer}/>
    <Form answer={answer} value={value} setValue={setValue} addWord={addWord}/>
    {endGame && <FinishBanner win={win} guesses={guesses} answer={answer}/>}
  </>
}

export default Game;
