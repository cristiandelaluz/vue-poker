<template>
  <div class="sidebar">
    <button 
      :class="`text__left btn btn__icon m__b--7 ${darkMode ? 'color--yellow' : 'color--black'}`" 
      @click="darkThemeSwitch">
      <i :class="`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`"></i>
    </button>

    <button class="btn btn__gradient--green" @click="shuffle">Shuffle</button>
    
    <p>Sort by</p>

    <button class="btn btn__gradient--blue" @click="orderBySuit">Suit</button>
    <button class="btn btn__gradient--light-gray" @click="orderByValue">Value</button>
  </div>
</template>

<script>
import { EventBus } from '@/event-bus.js';

export default {
  data: () => ({
    darkMode: false
  }),
  methods: {
    shuffle() {
      EventBus.$emit('shuffle');
    },
    orderBySuit() {
      EventBus.$emit('orderBySuit');
    },
    orderByValue() {
      EventBus.$emit('orderByValue');
    },
    _addDarkTheme() {
      let darkThemeLinkEl = document.createElement("link");
      darkThemeLinkEl.setAttribute("rel", "stylesheet");
      darkThemeLinkEl.setAttribute("href", "/css/dark-theme.css");
      darkThemeLinkEl.setAttribute("id", "dark-theme-style");

      let docHead = document.querySelector("head");
      docHead.append(darkThemeLinkEl);
    },
    _removeDarkTheme() {
      let darkThemeLinkEl = document.querySelector("#dark-theme-style");
      let parentNode = darkThemeLinkEl.parentNode;
      parentNode.removeChild(darkThemeLinkEl);
    },
    darkThemeSwitch() {
      this.darkMode = !this.darkMode;
      let darkThemeLinkEl = document.querySelector("#dark-theme-style");
      if (!darkThemeLinkEl) {
        this._addDarkTheme()
      } else {
        this._removeDarkTheme()
      }
    }
  }
}
</script>