<template>
  <section
    class="
      bg-white
      client
      grids
      grid-cols-2
      overflow-x-scroll
      gap-8
      flex
      justify-between
      w-full
      items-center
      pt-10
      md:pt-8
      px-4
      md:mx-56
      pb-10
    "
  >
    <img
      data-aos="zoom-in"
      data-aos-duration="1000"
      src="../../assets/images/slack.png"
      alt=""
    />
    <img
      data-aos="zoom-in"
      data-aos-duration="1000"
      class="justify-self-end"
      src="../../assets/images/gw.png"
      alt=""
    />
    <img
      data-aos="zoom-in"
      data-aos-duration="1000"
      src="../../assets/images/forbes.png"
      alt=""
    />
    <img
      data-aos="zoom-in"
      data-aos-duration="1000"
      class="justify-self"
      src="../../assets/images/usa.png"
      alt=""
    />
    <img
      data-aos="zoom-in"
      data-aos-duration="1000"
      class=""
      src="../../assets/images/envato.png"
      alt=""
    />
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.client::-webkit-scrollbar {
  display: none;
}
.client {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
