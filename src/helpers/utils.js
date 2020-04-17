export const addMissingProps = cards => {
  const items = [];

  const missingProps = {
    selected: false,
    index: 0
  }

  for(let i = 0; i < cards.length; i++) {
    let props = { ...missingProps };
    props.index = i;
    items.push(Object.assign(props, cards[i]));
  }

  return items;
}

export const calculateValue = value => {
  if (value.toLowerCase() === 'ace') return 1;
  if (value.toLowerCase() === 'jack') return 11;
  if (value.toLowerCase() === 'queen') return 12;
  if (value.toLowerCase() === 'king') return 13;

  return parseInt(value);
};

export const shuffleArray = cards => {
  const items = addMissingProps([...cards]);
  let currentIndex = items.length, temp, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temp = items[currentIndex];
    items[currentIndex] = items[randomIndex];
    items[randomIndex] = temp;
  }

  return items;
};

const getSuits = cards => {
  const suits = [];
  for (const card of cards) {
    if (!suits.includes(card.suit)) {
      suits.push(card.suit);
    }
  }

  return suits.sort();
}

export const orderBySuit = cards => {
  const items = [];
  const suits = getSuits(cards);

  for (const suit of suits) {
    for (const card of addMissingProps(cards)) {
      if (suit === card.suit) {
        items.push(card);
      }
    }
  }

  return items;
};

export const orderByValue = cards => {
  const items = addMissingProps(orderBySuit(cards)), temp = [];

  for (let i = 1; i <= 13; i++) {
    for (const card of items) {
      if (calculateValue(card.name) === i) {
        temp.push(card);
      }
    }
  }

  return temp;
};