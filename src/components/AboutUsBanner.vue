<template>
  <div
    class="
      footer-design
      relative
      bg-pelpayblue
      flex flex-col
      justify-center
      items-center
      pt-16
      pb-12
      rounded-30px rounded-bl-none
      px-5
      md:px-0
    "
  >
    <svg
      class="absolute hidden md:block left-0 bottom-0"
      width="75"
      height="228"
      viewBox="0 0 75 228"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 151.164C19.8912 151.164 38.9678 143.21 53.033 129.051C67.0982 114.892 75 95.6879 75 75.6641C75 55.6402 67.0982 36.4365 53.033 22.2775C38.9678 8.11852 19.8913 0.164062 2.27366e-05 0.164062L7.57887e-06 75.6641L0 151.164Z"
        fill="#FFD471"
      />
      <path
        d="M0 112.164C9.48456 112.164 18.5807 108.371 25.2873 101.62C31.9939 94.8686 35.7616 85.7119 35.7616 76.1641C35.7616 66.6163 31.9939 57.4595 25.2873 50.7082C18.5807 43.9569 9.48457 40.1641 1.08413e-05 40.1641L3.61376e-06 76.1641L0 112.164Z"
        fill="#041A3E"
      />
      <path
        d="M0 302.164C19.8912 302.164 38.9678 294.21 53.033 280.051C67.0982 265.892 75 246.688 75 226.664C75 206.64 67.0982 187.437 53.033 173.278C38.9678 159.119 19.8913 151.164 2.27366e-05 151.164L7.57887e-06 226.664L0 302.164Z"
        fill="#D5C6FF"
      />
    </svg>

    <svg
      class="absolute hidden md:block right-0 bottom-0"
      width="130"
      height="228"
      viewBox="0 0 130 228"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M130 151.164C110.053 151.164 90.9227 143.21 76.818 129.051C62.7132 114.892 54.7893 95.6879 54.7893 75.6641C54.7893 55.6402 62.7132 36.4365 76.818 22.2775C90.9227 8.11852 110.053 0.164062 130 0.164062L130 75.6641L130 151.164Z"
        fill="#FFD471"
      />
      <path
        d="M-0.000244141 227.164C19.9469 227.164 39.077 219.21 53.1818 205.051C67.2865 190.892 75.2105 171.688 75.2105 151.664C75.2105 131.64 67.2865 112.437 53.1818 98.2775C39.077 84.1185 19.9469 76.1641 -0.00022134 76.1641L-0.00023654 151.664L-0.000244141 227.164Z"
        fill="#0AD366"
      />
      <path
        d="M-0.000244141 188.164C9.51097 188.164 18.6326 184.371 25.3581 177.62C32.0835 170.869 35.8618 161.712 35.8618 152.164C35.8618 142.616 32.0835 133.46 25.3581 126.708C18.6326 119.957 9.51098 116.164 -0.000233269 116.164L-0.000240517 152.164L-0.000244141 188.164Z"
        fill="#041A3E"
      />
    </svg>
    <h3
      data-aos="fade-up"
      data-aos-duration="1000"
      class="font-bold text-3xl md:text-4xl text-white leading-124 text-center"
    >
      We care whenever you need it
    </h3>

    <div
      class="
        button-group
        flex
        md:flex-row
        flex-col
        items-center
        md:space-x-5
        mt-12
      "
    >
      <router-link to="/">
        <button
          data-aos="fade-up"
          data-aos-duration="2000"
          class="
            bg-white
            text-base
            px-12
            md:px-10
            py-4
            rounded-md
            leading-160
            tracking-0.02em
            font-bold
            text-primarygreen
            hover:text-white hover:bg-primarygreen
          "
        >
          Book a session
        </button>
      </router-link>

      <router-link to="/">
        <button
          data-aos="fade-up"
          data-aos-duration="2000"
          class="
            bg-transparent
            border
            shadow-whitebutton
            px-16
            md:px-10
            text-base
            py-4
            rounded-md
            leading-160
            tracking-0.02em
            font-bold
            mt-4
            md:mt-0
            hover:bg-white hover:text-pelpayblue
            text-white
          "
        >
          Contact Us
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUsBanner",
};
</script>

<style scoped></style>
