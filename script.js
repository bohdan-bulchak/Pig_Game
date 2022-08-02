'use strict';

///     VERSION 1   /////

// Selecting elements

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');

const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let scores, currentScore, activePlayer, playing;
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();
// Roling dice functionality

btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `dice-${dice}.png`;

    // 2. display a dice
    diceEl.classList.remove('hidden');

    // 3. check if rolled dice is not 1,switch to another player if 1
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score

    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }

  // 2. check if player's score is >= 100
});

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnNew.addEventListener('click', init);

/// Version 2 ////

// // Selecting elements
// const score0El = document.querySelector('#score--0');
// const score1El = document.querySelector('#score--1');

// const currentScore0El = document.querySelector('#current--0');
// const currentScore1El = document.querySelector('#current--1');

// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// const player0 = document.querySelector('.player--0');
// const player1 = document.querySelector('.player--1');

// let firstPlayer = true;
// // Starting conditions
// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');

// let score0 = Number(score0El.textContent);
// let score1 = Number(score1El.textContent);

// let currentScore = 0;
// // let currentScore1 = 0;
// // ROling dice functionality

// btnRoll.addEventListener('click', function () {
//   // 1. generate random dice roll
//   const dice = Math.trunc(Math.random() * 6) + 1;
//   diceEl.src = `dice-${dice}.png`;

//   // 2. display a dice
//   diceEl.classList.remove('hidden');

//   // 3. check if rolled dice is not 1,switch to another player if 1
//   if (dice !== 1) {
//     currentScore += dice;
//     if (firstPlayer) {
//       currentScore0El.textContent = currentScore;
//     } else {
//       currentScore1El.textContent = currentScore;
//     }
//   } else {
//     if (firstPlayer) {
//       currentScore0El.textContent = 0;
//     } else {
//       currentScore1El.textContent = 0;
//     }
//     changePlayer();
//   }
// });

// function changePlayer() {
//   if (firstPlayer) {
//     player0.classList.remove('player--active');
//     player1.classList.add('player--active');
//   } else {
//     player1.classList.remove('player--active');
//     player0.classList.add('player--active');
//   }
//   firstPlayer = !firstPlayer;
//   currentScore = 0;
// }

// btnHold.addEventListener('click', function () {
//   if (firstPlayer) {
//     score0 += currentScore;
//     score0El.textContent = score0;
//     currentScore0El.textContent = 0;
//   } else {
//     score1 += currentScore;
//     score1El.textContent = score1;
//     currentScore1El.textContent = 0;
//   }
//   checkScore();
// });

// const newGame = function () {
//   currentScore = 0;
//   score0 = 0;
//   score1 = 0;
//   currentScore0El.textContent = 0;
//   currentScore1El.textContent = 0;
//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   diceEl.classList.add('hidden');
//   if (!firstPlayer) {
//     changePlayer();
//   }
// };

// function checkScore() {
//   if (firstPlayer && score0 >= 20) {
//     console.log('Playr0 wins');
//     newGame();
//   } else if (!firstPlayer && score1 >= 20) {
//     console.log('Player1 won');
//     newGame();
//   } else {
//     changePlayer();
//   }
// }

// btnNew.addEventListener('click', newGame);
