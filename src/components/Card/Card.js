import React from 'react';

import './styles.css';

import backCardImage from '../../assets/playing-card-back-red.png';

let currentCard = null;
let pileOfCards = null;

function setCurrentCard(card) {
  currentCard = card;
  console.log(currentCard);
}

function setPileOfCards() {
  pileOfCards = Array.from(document.querySelectorAll('.FlipCardInner'))
                      .filter(card => card.id !== currentCard.id);
  console.log(pileOfCards);
}

function flipUp() {
  currentCard.style.transform = 'rotateY(180deg)';
  currentCard.dataset.flipUp = true;
  console.log(currentCard);
}

function flipDown(card) {
  if(!isLocked(card)) {
    card.style.transform = '';
    card.dataset.flipUp = false;
    card.dataset.matched = false;
  }
}

function isLocked(card) {
  return card.dataset.matched === 'true';
}

function getCardValue(card) {
  return card.querySelector('.FlipCardFront img').getAttribute('value');
}

function isAnyCardFlipped() {
  return pileOfCards.some(card => card.dataset.flipUp === 'true' && card.dataset.matched === 'false');
}

function checkCards() {
  const flippedCard = pileOfCards.filter(card => card.dataset.flipUp === 'true' && card.dataset.matched === 'false')[0];
  
  if(getCardValue(flippedCard) === getCardValue(currentCard)) {
    flippedCard.dataset.matched = 'true';
    currentCard.dataset.matched = 'true';
  } else {
    setTimeout(flipDown, 1000, flippedCard);
    setTimeout(flipDown, 1000, currentCard);
  }
}

function isFinishedGame() {
  return !pileOfCards.some(card => card.dataset.matched === 'false');  
}

function newGame(message) {
  if(window.confirm(message))
    window.location.reload();
}

function flipCard(event) {
  setCurrentCard(event.target.parentNode.parentNode);
  setPileOfCards();

  flipUp();
  
  if(isAnyCardFlipped()) {
    checkCards();
  }

  if(isFinishedGame()) {
    setTimeout(newGame, 1000, 'Parabéns! Deseja iniciar novo jogo?');
  }
}

export default function Card(props) {
  return(
    <div className="FlipCard">
      <div className="FlipCardInner" id={props.id} onClick={flipCard} data-flip-up="false" data-matched="false">
        <div className="FlipCardBack">
          <img src={backCardImage} alt="back-card" height="150px"></img>
        </div>
        <div className="FlipCardFront">
          <img src={props.card} value={props.value} alt="front-card" height="150px" width="107px"></img>
        </div>
      </div>
    </div>
  );
}