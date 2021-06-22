<template>
  <section class="h-screen home-hero pl-115 pr-115 w-full bg-autos bg-no-repeat" :style="{'background-image': 'url('+require('../assets/images/home-hero-image.png')+')'}">
    <div class="text-content pt-103px">
        <h2 class="font-semibold max-w-lg text-64px leading-76px text-primarydark">Payments Made Easy with <span class="text-primarygreen">PelPay</span></h2>
         <p class="text-pelpaygray text-2xl leading-8 font-medium mt-2 max-w-34rem">Pelpay helps businesses in Africa receive payments from their customers all over the world.</p>
    </div>
    <div class="button-group flex items-center space-x-5 mt-9">
         <router-link to="/">
          <button class="bg-primarygreen text-lg px-10 py-4 rounded-md leading-160 tracking-0.02em font-medium text-white">Get started</button>
        </router-link>

        <router-link to="/">
          <button class="bg-white shadow-whitebutton px-10 text-lg py-4 rounded-md leading-160 tracking-0.02em font-medium text-primarydark">Learn more</button>
        </router-link>
      </div>
  </section>
</template>

<script>
export default {
    data(){
        return{
            img: require('../assets/images/home-hero-image.png')
        }
    }

}
</script>

<style lang="scss">

</style>