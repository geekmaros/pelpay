<template>
  <section class="about-page">
    <AboutHero />
    <Connecting />
    <AboutFeatures />
    <ContactUsComp />
  </section>
</template>

<script>
import AboutFeatures from "../components/About/AboutFeatures.vue";
import AboutHero from "../components/About/AboutHero.vue";
import Connecting from "../components/About/Connecting.vue";
import ContactUsComp from "@/components/ContactUsComp";
export default {
  components: { ContactUsComp, AboutHero, Connecting, AboutFeatures },
};
</script>

<style></style>
