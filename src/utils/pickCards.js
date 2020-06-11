import aceOfSpade from '../assets/ace-spades.png';
import aceOfDiamond from '../assets/ace-diamonds.png';
import aceOfHearts from '../assets/ace-hearts.png';
import aceOfClubs from '../assets/ace-clubs.png';

import deuceOfSpade from '../assets/2-spades.png';
import deuceOfDiamond from '../assets/2-diamonds.png';
import deuceOfHearts from '../assets/2-hearts.png';
import deuceOfClubs from '../assets/2-clubs.png';

import threeOfSpade from '../assets/3-spades.png';
import threeOfDiamond from '../assets/3-diamonds.png';
import threeOfHearts from '../assets/3-hearts.png';
import threeOfClubs from '../assets/3-clubs.png';

import fourOfSpade from '../assets/4-spades.png';
import fourOfDiamond from '../assets/4-diamonds.png';
import fourOfHearts from '../assets/4-hearts.png';
import fourOfClubs from '../assets/4-clubs.png';

import fiveOfSpade from '../assets/5-spades.png';
import fiveOfDiamond from '../assets/5-diamonds.png';
import fiveOfHearts from '../assets/5-hearts.png';
import fiveOfClubs from '../assets/5-clubs.png';

import sixOfSpade from '../assets/6-spades.png';
import sixOfDiamond from '../assets/6-diamonds.png';
import sixOfHearts from '../assets/6-hearts.png';
import sixOfClubs from '../assets/6-clubs.png';

import sevenOfSpade from '../assets/7-spades.png';
import sevenOfDiamond from '../assets/7-diamonds.png';
import sevenOfHearts from '../assets/7-hearts.png';
import sevenOfClubs from '../assets/7-clubs.png';

import eightOfSpade from '../assets/8-spades.png';
import eightOfDiamond from '../assets/8-diamonds.png';
import eightOfHearts from '../assets/8-hearts.png';
import eightOfClubs from '../assets/8-clubs.png';

import nineOfSpade from '../assets/9-spades.png';
import nineOfDiamond from '../assets/9-diamonds.png';
import nineOfHearts from '../assets/9-hearts.png';
import nineOfClubs from '../assets/9-clubs.png';

import tenOfSpade from '../assets/10-spades.png';
import tenOfDiamond from '../assets/10-diamonds.png';
import tenOfHearts from '../assets/10-hearts.png';
import tenOfClubs from '../assets/10-clubs.png';

import jackOfSpade from '../assets/jack-spades.png';
import jackOfDiamond from '../assets/jack-diamonds.png';
import jackOfHearts from '../assets/jack-hearts.png';
import jackOfClubs from '../assets/jack-clubs.png';

import queenOfSpade from '../assets/queen-spades.png';
import queenOfDiamond from '../assets/queen-diamonds.png';
import queenOfHearts from '../assets/queen-hearts.png';
import queenOfClubs from '../assets/queen-clubs.png';

import kingOfSpade from '../assets/king-spades.png';
import kingOfDiamond from '../assets/king-diamonds.png';
import kingOfHearts from '../assets/king-hearts.png';
import kingOfClubs from '../assets/king-clubs.png';

function getCard(value) {
  let card = null;

  switch(value) {
    case 1:
      card = aceOfSpade;
      break;
    case 2:
      card = deuceOfSpade;
      break;
    case 3:
      card = threeOfSpade;
      break;
    case 4:
      card = fourOfSpade;
      break;
    case 5:
      card = fiveOfSpade;
      break;
    case 6:
      card = sixOfSpade;
      break;
    case 7:
      card = sevenOfSpade;
      break;
    case 8:
      card = eightOfSpade;
      break;
    case 9:
      card = nineOfSpade;
      break;
    case 10:
      card = tenOfSpade;
      break;
    case 11:
      card = jackOfSpade;
      break;
    case 12:
      card = queenOfSpade;
      break;
    case 13:
      card = kingOfSpade;
      break;
    case 14:
      card = aceOfDiamond;
      break;
    case 15:
      card = deuceOfDiamond;
      break;
    case 16:
      card = threeOfDiamond;
      break;
    case 17:
      card = fourOfDiamond;
      break;
    case 18:
      card = fiveOfDiamond;
      break;
    case 19:
      card = sixOfDiamond;
      break;
    case 20:
      card = sevenOfDiamond;
      break;
    case 21:
      card = eightOfDiamond;
      break;
    case 22:
      card = nineOfDiamond;
      break;
    case 23:
      card = tenOfDiamond;
      break;
    case 24:
      card = jackOfDiamond;
      break;
    case 25:
      card = queenOfDiamond;
      break;
    case 26:
      card = kingOfDiamond;
      break;
    case 27:
      card = aceOfHearts;
      break;
    case 28:
      card = deuceOfHearts;
      break;
    case 29:
      card = threeOfHearts;
      break;
    case 30:
      card = fourOfHearts;
      break;
    case 31:
      card = fiveOfHearts;
      break;
    case 32:
      card = sixOfHearts;
      break;
    case 33:
      card = sevenOfHearts;
      break;
    case 34:
      card = eightOfHearts;
      break;
    case 35:
      card = nineOfHearts;
      break;
    case 36:
      card = tenOfHearts;
      break;
    case 37:
      card = jackOfHearts;
      break;
    case 38:
      card = queenOfHearts;
      break;
    case 39:
      card = kingOfHearts;
      break;
    case 40:
      card = aceOfClubs;
      break;
    case 41:
      card = deuceOfClubs;
      break;
    case 42:
      card = threeOfClubs;
      break;
    case 43:
      card = fourOfClubs;
      break;
    case 44:
      card = fiveOfClubs;
      break;
    case 45:
      card = sixOfClubs;
      break;
    case 46:
      card = sevenOfClubs;
      break;
    case 47:
      card = eightOfClubs;
      break;
    case 48:
      card = nineOfClubs;
      break;
    case 49:
      card = tenOfClubs;
      break;
    case 50:
      card = jackOfClubs;
      break;
    case 51:
      card = queenOfClubs;
      break;
    case 52:
      card = kingOfClubs;
      break;
  }

  return card;
}

function getRamdomCard() {
  const value = Math.floor(Math.random() * 52) + 1;
  const card = { card: getCard(value), value: value };
  return card;
}

function shuffleCards(cardsToShuffle) {
  for (let i = cardsToShuffle.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = cardsToShuffle[i];
    cardsToShuffle[i] = cardsToShuffle[j];
    cardsToShuffle[j] = temp;
  }

  return cardsToShuffle;
}

export default function pickCards(quantity) {
  let cards = [];
  for (let index = 0; index < quantity; index++) {
    cards.push(getRamdomCard());
  }

  //Duplicando as cartas para o jogo da memória
  cards.map(card => (cards.push(card)));

  cards = shuffleCards(cards);

  return cards;
}