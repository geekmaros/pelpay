<template>
  <section class="z-50 pb-4 about-hero">
    <div
      class="top-header w-full pr-5 pl-5 pt-16 md:pt-103px pb-24 bg-cover"
      :style="{
        'background-image':
          'url(' + require('../../assets/images/aboutgradient.png') + ')',
      }"
    >
      <h3
        class="
          font-bold
          text-5xl
          md:text-76px
          text-pelpayblack100
          leading-snug
          md:leading-80px md:mx-auto md:max-w-4xl
          text-center
        "
      >
        Enabling the New Wave of Africa
        <span class="inline-block bg-spelpaylemongreen100 relative">
          <span class="relative bottom-0 inline-block z-10">
            <svg
              width="399"
              class="z-10 commerce hidden md:block"
              height="51"
              viewBox="0 0 399 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.0471191"
                y="0.905518"
                width="398.447"
                height="49.6874"
                fill="#A6FFAF"
              />
            </svg>
          </span>

          <span
            class="
              z-50
              left-0
              md:absolute
              p-0
              text-primarygreen
              md:text-pelpayblack100
            "
            >Commerce</span
          >
        </span>
      </h3>
      <p
        class="
          text-lg text-primarydark
          leading-30px
          font-medium
          text-center
          max-w-xl
          mx-auto
          mt-8
        "
      >
        Pelpay builds technology to help Africa’s best businesses grow - from
        new startups, to market leaders launching new business models.
      </p>
    </div>
    <div class="image-open -mt-2">
      <img src="../../assets/images/open.png" alt="" />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.about-hero {
  .commerce {
    z-index: -1;
  }
}
</style>
