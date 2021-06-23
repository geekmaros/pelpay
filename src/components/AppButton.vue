<template>
  <div
    class="{'bg-white': plain, 'bg-red-300': border, 'bg-primarygreen': fill}"
  >
    <slot>Sign In</slot>
  </div>
</template>

<script>
export default {
  props: ["plain", "border", "fill"],
};
</script>

<style></style>
