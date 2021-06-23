<template>
  <section class="pb-4 about-hero bg-white pl-5 pr-5 md:pl-115 md:pr-115 mb-32 md:mb-0">
    <div class="top-header w-fulls pt-16 md:pt-103px pb-16 bg-white md:pl-115">
      <h3
        class="
          font-bold
          text-4xl
          md:text-64px text-pelpayblack100
          leading-snug
          md:leading-80px
          mx-auto
          max-w-5xl
          text-center
        "
      >
        PelPay maintains a
        <span class="text-primarygreen">bank-level security standards</span> of
        compliance
      </h3>
      <p
        class="
          text-lg text-pelpaygray100
          leading-30px
          font-medium
          text-center
          mx-auto
          max-w-xl
          mt-8
        "
      >
        We understand the importance of security and that we have proven by
        complying with the industry’s security standards
      </p>
    </div>

    <div class="compliance-image w-full flex justify-between">
      <div class="comp-1">
        <img src="../assets/images/comp1.png" alt="atm and padlock image" />
      </div>

      <div class="comp-2">
        <img src="../assets/images/comp2.png" alt="atm and padlock image" />
      </div>
    </div>

    <div class="compliance-text mt-20 md:mt-111">
      <div class="comp-wrapper mb-20 md:mb-115 text-primarydark flex md:flex-row flex-col justify-between">
        <h3 class="text-3xl md:text-5xl w-full font-bold text-primarydark leading-65px">
          ISO 27001 Certification
        </h3>
        <p class="text text-xl md:pl-4 md:text-2xl max-w-38rem leading-10 font-normal">
          ChamsSwitch is ISO 27001 certified. This means that we are in
          alignment with the framework of standards on how information and data
          should be managed
        </p>
      </div>

      <div class="comp-wrapper text-primarydark  md:flex-row flex-col flex justify-between">
        <h3 class="md:text-5xl text-3xl w-full font-bold text-primarydark leading-65px">
          PCI DSS Compliant
        </h3>
        <p class="text-xl md:pl-4  md:text-2xl  max-w-38rem leading-10 font-normal">
          This means that ChamsSwitch has satisfied the highest level of
          security Audit. PelPay has been audited by an independent PCI
          Qualified Security Assessor (QSA) and we're PCI DSS 3.2 compliant as a
          Level 1 Service Provider (loosely referred to as PCI Level 1
          compliance).
        </p>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>

<style>
</style>