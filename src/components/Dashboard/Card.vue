<template>
  <div :class="`card ${selected ? 'card-selected' : ''}`">
    <p>
      {{ `${card.name} of ${card.suit}` }}
      <i v-if="selected" class="fas fa-check-circle"></i>
    </p>
    <img class="card__img" :src="card.image" :alt="`${card.name} of ${card.suit}`">

    <button :class="`btn btn--white ${!selected ? 'm__top--3' : ''}`" @click="select">
      {{ btnText }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    card: Object
  },
  data: () => ({
    selected: false
  }),
  computed: {
    btnText() {
      return this.selected ? 'Unselect' : 'Select';
    }
  },
  methods: {
    select() {
      this.selected = !this.selected;

      if (this.selected) {
        this.$emit('select', this.card);
      } else {
        this.$emit('unselect', this.card);
      }
    }
  }
}
</script>