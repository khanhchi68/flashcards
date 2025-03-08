import './App.css';
import React from 'react';
import { useState } from 'react';
import words from './words.json';
import Card from './Card';

const App = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  const handleNext = () => {
    if (!isStarted) {
      setIsStarted(true);
      return;
    }

    if (currentCardIndex < words.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      
    } else {
      setCurrentCardIndex(0);
    }
  }

  return (
    <div className="App">
      <div className="header">
        <h1>English Words Flashcards</h1>
        <h2>Learn English words with flashcards</h2>
        <h3>Number of cards: {words.length}</h3>
      </div>

      <div className="card-container">
        {!isStarted ? (
            <div className="start-card">
              <h3>Press the next arrow to start the flashcards :)</h3>
              {/* <p>{currentCardIndex === 0 ? "Press the next arrow to start the flashcards :)" : "Start!"}</p> */}
            </div>
          ) : (
          <Card 
            word={words[currentCardIndex].word} 
            translation={words[currentCardIndex].translation} 
            cardNumber={currentCardIndex + 1} 
            totalCards={words.length} 
          />
        )}
      </div>

      <div>
        <p className="card-number">
          {isStarted ? `${currentCardIndex + 1} / ${words.length}` : ""}
        </p>
      </div>

      <div className="buttons">
        <button onClick={handleNext}>→</button>
      </div>
    </div>
  );

}

export default App;