<template>
  <div class="font-serif flex flex-col" id="app">
    <NavBar class="sticky top-0"></NavBar>
    <router-view />
    <Footer/>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700;900&display=swap");
</style>
<script>
import Footer from './components/Partials/Footer.vue';
import NavBar from "./components/Partials/NavBar";
export default {
  components: { NavBar, Footer },
};
</script>
