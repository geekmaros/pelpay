<template>
  <section class="bg-white max-w-lg relative rounded-31.3312px pt-16 pl-11">
    <h3 class="text-primarydark font-bold leading-48px text-4xl"><slot name="heading">Test header</slot></h3>
    <p class="text-xl leading-7 mt-4 max-w-sm"><slot name="description">Test header</slot></p>
    <div class="image-desc relative mt-16">
            <slot name="image"></slot>
    </div>
  </section>
</template>

<script>
export default {
    props:{
        image:{
            type: String,
            required: true
        }
    }
};
</script>

<style>
</style>