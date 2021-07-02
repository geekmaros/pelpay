<template>
  <section
    class="
      h-auto
      md:h-auto
      lg:h-screens
      home-hero
      pl-5
      pr-5
      pb-16
      md:pb-52 md:pl-115 md:pr-115
      w-full
      bg-cover
      md:bg-cover
      bg-no-repeat
    "
    :style="{
      'background-image':
        'url(' + require('../assets/images/newhomehero.png') + ')',
    }"
  >
    <div class="text-content pt-10 md:pt-103px">
      <h2
        class="
          font-semibold
          md:max-w-lg
          text-5xl
          md:text-64px
          leading-normal
          md:leading-76px
          text-primarydark
        "
      >
        Payments Made Easy with <span class="text-primarygreen">PelPay</span>
      </h2>
      <p
        class="
          text-pelpaygray text-2xl
          leading-8
          font-medium
          mt-4
          md:mt-2 md:max-w-34rem
        "
      >
        Pelpay helps businesses in Africa receive payments from their customers
        all over the world.
      </p>
    </div>
    <div class="button-group flex items-center space-x-5 mt-9">
      <router-link to="/">
        <button
          class="
            bg-primarygreen
            hover:bg-pelpayblue
            transition-all
            duration-500
            ease-in-out
            text-lg
            px-6
            md:px-10
            py-4
            rounded-md
            leading-160
            tracking-0.02em
            font-medium
            text-white
          "
        >
          Get started
        </button>
      </router-link>

      <router-link to="/">
        <button
          class="
            bg-white
            hover:bg-pelpayblue
            transition-all
            duration-500
            ease-in-out
            hover:text-white
            shadow-whitebutton
            px-6
            md:px-10
            text-lg
            py-4
            rounded-md
            leading-160
            tracking-0.02em
            font-medium
            text-primarydark
          "
        >
          Learn more
        </button>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      img: require("../assets/images/home-hero-image.png"),
    };
  },
};
</script>

<style lang="scss">
@media (min-width: 1024px) {
  .hero-image {
    mix-blend-mode: darken;
    height: 80vh !important;
  }
}
</style>
