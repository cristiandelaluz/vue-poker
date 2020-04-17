<template>
  <div id="app">
    <div class="flex__container">
      <div class="sidebar__container">
        <Sidebar />
      </div>

      <div class="cards__container p__all--2">
        <Header />
        <Dashboard class="m__top--5" />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard/Dashboard';

export default {
  name: 'App',
  components: {
    Sidebar,
    Header,
    Dashboard
  }
}
</script>
