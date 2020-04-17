<template>
  <div>
    <p class="text__left">Number of cards selected : {{ selectedCardsCounter }}</p>
    <p class="text__left">Total value : {{ totalValue }}</p>

    <div class="flex__container align__flex--center m__top--3">
      <Card
        v-for="card in cards"
        :key="card.index"
        :card="card"
        @select="select"
        @unselect="unselect" />
    </div>
  </div>
</template>

<script>
import Card from './Card';
import cards from '@/api/cards.json';
import { EventBus } from '@/event-bus.js';
import { addMissingProps, calculateValue, shuffleArray, orderBySuit, orderByValue } from '@/helpers/utils';

export default {
  components: {
    Card
  },
  created() {
    this.cards = addMissingProps(cards);

    EventBus.$on('shuffle', function() {
      this.shuffle();
    }.bind(this));

    EventBus.$on('orderBySuit', function() {
      this.orderBySuit();
    }.bind(this));

    EventBus.$on('orderByValue', function() {
      this.orderByValue();
    }.bind(this));
  },
  data: () => ({
    cards: [],
    selectedCards: []
  }),
  computed: {
    selectedCardsCounter() {
      return this.selectedCards.length;
    },
    totalValue() {
      if (!this.selectedCards.length) {
        return 0;
      }

      let total = 0;
      for (const card of this.selectedCards) {
        total += this.calculateValue(card.name);
      }

      return total;
    }
  },
  methods: {
    select(card) {
      this.selectedCards.push(card);
    },
    unselect(card) {
      const { index } = card;
      this.selectedCards = this.selectedCards.filter(card => card.index !== index);
    },
    calculateValue: calculateValue,
    shuffle() {
      this.cards = shuffleArray(cards);
    },
    orderBySuit() {
      this.cards = orderBySuit(cards);
    },
    orderByValue() {
      this.cards = orderByValue(cards);
    }
  }
}
</script>