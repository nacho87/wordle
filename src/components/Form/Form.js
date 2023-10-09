import React from 'react';

function Form({value, setValue, addWord}) {
  return (
    <form className="guess-input-wrapper" onSubmit={(event) => {
      event.preventDefault()
      setValue('');
      addWord(value);
    }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input pattern="[a-zA-Z]{5}" title="5 letter word" id="guess-input" type="text" value={value} onChange={(event) => {
        setValue(event.target.value.toUpperCase());
        // if (event.target.value.length <= 5 || value > event.target.value) {
        // }
      }}/>
    </form>
  );
}

export default Form;
