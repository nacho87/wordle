import React from 'react';

function FinishBanner({win, guesses,answer}) {
  return(
    <div className={`${ win ? 'happy' : 'sad' } banner`}>
      {
        win ? <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{' '}{guesses} guesses</strong>.
      </p> : <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      }
      
    </div>
  );
}

export default FinishBanner;
