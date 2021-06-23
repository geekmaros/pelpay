<template>
  <section class="about-page">
    <AboutHero />
    <Connecting />
    <AboutFeatures />
  </section>
</template>

<script>
import AboutFeatures from "../components/About/AboutFeatures.vue";
import AboutHero from "../components/About/AboutHero.vue";
import Connecting from "../components/About/Connecting.vue";
export default {
  components: { AboutHero, Connecting, AboutFeatures },
};
</script>

<style></style>
