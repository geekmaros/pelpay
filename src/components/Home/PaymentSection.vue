<template>
  <section class="bg-pelpayteal w-full h-auto pl-115 pr-115 pt-118 pb-118">
    <div class="heading text-primarydark text-center">
      <h3 class="text-5xl font-bold leading-56px mx-auto max-w-3xl">
        Create seamless payment experiences for your customers
      </h3>
      <p class="leading-160 text-2xl tracking-0.04em mt-8">
        Pelpay is your one stop shop for your payment needs
      </p>
    </div>

    <div class="payment-card-section w-full grid grid-cols-2 gap-y-14 mt-106px">
      <payment-card class="relative" image="../assets/images">
        <template #heading> Mobile Payment </template>
        <template #description>
          Our payment gateway enables businesses accept cards and other forms of
          payment on their website or mobile app
        </template>
        <template #image>
          <img class="-ml-11" src="../../assets/images/box1.png" alt="" />
        </template>
      </payment-card>

      <payment-card class="relative" image="../assets/images">
        <template #heading> POS Payment </template>
        <template #description>
          Customers can make payments seamlessly on instore purchases. We want
          to build a financial inclusive world with everyone, for everyone.
        </template>
        <template #image>
          <img class="-ml-11" src="../../assets/images/box2.png" alt="" />
        </template>
      </payment-card>

      <payment-card class="relative" image="../assets/images">
        <template #heading> E-commerce Payment Processing </template>
        <template #description>
          Our payment gateway enables businesses accept cards and other forms of
          payment on their website or mobile app
        </template>
        <template #image>
          <img class="-ml-11" src="../../assets/images/box3.png" alt="" />
        </template>
      </payment-card>

      <payment-card class="relative" image="../assets/images">
        <template #heading>Online Web Payment Processing</template>
        <template #description>
          Customers can make payments seamlessly on instore purchases. We want
          to build a financial inclusive world with everyone, for everyone.
        </template>
        <template #image>
          <img class="-ml-11" src="../../assets/images/box4.png" alt="" />
        </template>
      </payment-card>
    </div>
  </section>
</template>

<script>
import PaymentCard from "./PaymentCard.vue";
export default {
  components: { PaymentCard },
};
</script>

<style>
</style>