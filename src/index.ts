import '@/styles/index.scss';

const grid = document.getElementById('card-grid')!;
const attempts = document.getElementById('attempts')!;
const restartBtn = document.getElementById('restart')!;
const winLossMessage = document.getElementById('message')!;

let cardValues: string[] = [];
let flippedCards: HTMLElement[] = [];
let matchedCards: HTMLElement[] = [];
let attemptsLeft = 3;
let gameOver = false;


const allCards = [
  '\u{1F0A1}', '\u{1F0AE}', '\u{1F0AD}','\u{1F0A2}', '\u{1F0A3}', '\u{1F0A4}', '\u{1F0A5}', '\u{1F0A6}', '\u{1F0A7}', '\u{1F0A8}', '\u{1F0A9}',
  '\u{1F0AA}', '\u{1F0AB}', '\u{1F0AC}'
];

function getRandomPairs(count: number): string[] {
  const shuffled = [...allCards].sort(() => Math.random() - .5);
  const selected = shuffled.slice(0, count);
  return [...selected, ...selected].sort(() => Math.random() - .5);
}

const generateCards = () => {
  const values = ['\u{1F0A1}', '\u{1F0AE}', '\u{1F0AD}'];
  cardValues = [...values, ...values];
  cardValues.sort(() => Math.random() - 0.5);
};

const createCard =(value: string): HTMLElement => {
  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.value = value;
  card.addEventListener('click', () => handleFlip(card));
  return card;
};

const showCards = () => {
  const cardValues = getRandomPairs(3);
  grid.innerHTML = '';
  matchedCards = [];
  flippedCards = []
  generateCards();
  cardValues.forEach(value => {
    const card = createCard(value);
    grid.appendChild(card);
  });
};

const handleFlip = (card: HTMLElement) => {
  if (gameOver || card.classList.contains('flipped') || flippedCards.length >= 2 || matchedCards.includes(card)) {
    return;
  }

  card.classList.add('flipped');
  card.textContent = card.dataset.value!;
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    const [first, second] = flippedCards;
    if (first.dataset.value === second.dataset.value) {
      matchedCards.push(first, second);
      flippedCards = [];
    if (matchedCards.length === 6) {
        showMessage('You Win!! Great Job! If you want to play again, hit the restart button.', 'win');
        gameOver = true;
      }
    } else {
      attemptsLeft--;
      attempts.textContent = attemptsLeft.toString();
      setTimeout(() => {
        first.classList.remove('flipped');
        second.classList.remove('flipped');
        first.textContent = '';
        second.textContent = '';
        flippedCards = [];
        
        if (attemptsLeft <= 0) {
          showMessage('Game Over! Try Agian.', 'lose');
          gameOver = true;
        }
        
      }, 1000);
    }
  }
};

const showMessage = (text: string, type: 'win' | 'lose') => {
  winLossMessage.textContent = text;
  winLossMessage.className = `message ${type}`;
}

restartBtn.addEventListener('click', () => {
  attemptsLeft = 3;
  gameOver = false;
  attempts.textContent = '3';
  winLossMessage.textContent = '';
  winLossMessage.className = 'message';
  showCards();
});

showCards();
