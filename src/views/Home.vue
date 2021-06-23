<template>
  <div class="home">
    <home-hero />
    <clients />
    <payment-section />
    <payment-options />
    <team-features />
    <unicorn-section />
  </div>
</template>

<script>
import Clients from "../components/Home/Clients.vue";
import PaymentOptions from "../components/Home/PaymentOptions.vue";
import PaymentSection from "../components/Home/PaymentSection.vue";
import TeamFeatures from "../components/Home/TeamFeatures.vue";
import UnicornSection from "../components/Home/UnicornSection.vue";
import HomeHero from "../components/HomeHero.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    HomeHero,
    Clients,
    PaymentSection,
    PaymentOptions,
    TeamFeatures,
    UnicornSection,
  },
};
</script>
