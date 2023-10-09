import React from 'react';

function ListWords({listWords}) {

  return (
    <div className="guess-results">
      {listWords.length > 0 && listWords.map((word, index) => {
        return(
          <p key={index} className="guess">{word}</p>
        )
      })}
    </div>
  );
}

export default ListWords;
