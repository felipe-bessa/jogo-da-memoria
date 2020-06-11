import React from 'react';
import './App.css';

import { Card } from './components/Card';
import pickCards from './utils/pickCards';

let cards = pickCards(12);

function App() {
  return (
    <div className="App">
      <section className="DeckTable">
          {cards.map((card, index) => (<Card id={index} card={card.card} value={card.value}/>))}
      </section>
    </div>
  );
}

export default App;
