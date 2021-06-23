<template>
  <section class="w-full unicorn h-auto flex justify-end relative bg-no-repeat bg-pelpaylemongreen bg-none md:pt-128 pb-32 pr-5 pl-5 md:pl-115 md:pr-115"  :style="{'background-image': 'url('+require('../../assets/images/unicorn.png')+')'}">
      <div class="text-content w-full flex flex-col items-end md:mr-20 pt-16">
          <h3 class="font-bold text-4xl md:text-42px leading-48px max-w-lg">Powering growth for African’s Unicorns</h3>
        <div class="unicorn-desc text-lg max-w-lg text-left mt-10 md:mt-16">
            <p class="mb-5">
                Pelpay is a growth engine for a new generation of innovative, forward-looking organizations operating in Africa.
            </p>

            <p>
We hope that regardless of the transaction you are trying to perform, whether you’re stranded in the urban city setting or chilling with friends and want to pay bills or you reside in an extremely remote part of the continent in need of a banking experience, know that we see you and we’re building for you.            </p>
        </div>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.unicorn{
  @media screen and (max-width: 680px) {
    background-image: none !important;
  }
}
</style>