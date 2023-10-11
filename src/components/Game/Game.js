import React from 'react';
import Form from '../Form'
import ListWords from '../ListWords'
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [value, setValue] = React.useState('');
  const [listWords, setListWords] = React.useState([]);

  function addWord(newWord) {
    if(listWords.length < 6) {
      setListWords([...listWords, newWord]);
    }
  }

  return <>
    <>Put a game here!</>;
    <ListWords value={value} listWords={listWords} answer={answer}/>
    <Form answer={answer} value={value} setValue={setValue} addWord={addWord}/>
  </>
}

export default Game;
