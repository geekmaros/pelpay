<template>
  <section
    class="
      w-full
      h-auto
      flex
      bg-pelpaylemongreen200
      lg:flex-row
      flex-col
      relative
    "
  >
    <div
      class="
        feature-side
        w-full
        pl-5
        pr-5
        md:pl-118
        pt-16
        md:pt-104
        pb-56px
        bg-pelpaylemongreen200
      "
    >
      <div class="top-header w-full bg-cover">
        <h3
          data-aos="fade-up"
          data-aos-duration="1000"
          class="
            font-bold
            text-4xl
            md:text-5xl
            text-black
            md:leading-56px
            max-w-lg
            text-center
            md:text-center
            lg:text-left
          "
        >
          Contact Us 👋
        </h3>
        <p
          data-aos="fade-up"
          data-aos-duration="2000"
          class="
            text-pelpaygray200
            leading-6
            text-base
            font-normal
            text-center
            md:text-left
            lg:max-w-250px
            mt-6
          "
        >
          If you have any questions, contact our team and let's schedule a call.
        </p>
      </div>
    </div>
    <div
      class="right-side w-full pl-5 pr-5 md:pt-10 lg:pt-16 md:pr pb-24 md:mr-16"
    >
      <form
        action="https://formspree.io/f/xgerrgol"
        method="POST"
        class="
          form
          rounded-2xl
          max-w-2xl
          pt-5
          shadow-xl
          bg-white
          md:pt-8
          pl-8
          pr-8
          pb-8
        "
      >
        <h3
          data-aos="fade-up"
          data-aos-duration="1000"
          class="
            font-bold
            text-2xl
            md:text-2xl
            text-black
            md:leading-56px
            text-center
            md:text-left
            mb-5
          "
        >
          Fill Details
        </h3>

        <div class="flex items-center flex-col lg:flex-row lg:space-x-5 mb-6">
          <div class="left mb-5 lg:mb-0 w-full">
            <label
              class="flex justify-start items-center font-medium mb-1"
              for=""
              >Your full name
              <span class="text-primarygreen font-bold">*</span></label
            >
            <input
              class="
                placeholder:text-4xl
                bg-white
                rounded-lg
                font-medium
                w-full
                border-2
                focus:outline-none
                focus:border-primarygreen
                focus:ring-primarygreen
                border-gray-300
              "
              name="name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>

          <div class="right w-full">
            <label class="flex items-center font-medium mb-1" for=""
              >Your email
              <span class="text-primarygreen font-bold">*</span></label
            >
            <input
              class="
                placeholder:text-4xl
                bg-white
                rounded-lg
                font-medium
                w-full
                border-2
                focus:outline-none
                focus:border-primarygreen
                focus:ring-primarygreen
                border-gray-300
              "
              type="email"
               name="email"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div class="flex items-center flex-col lg:flex-row lg:space-x-5 mb-6">
          <div class="left mb-5 lg:mb-0 w-full">
            <label class="flex items-center font-medium mb-1" for=""
              >Phone number
              <span class="text-primarygreen font-bold">*</span></label
            >
            <input
              class="
                placeholder:text-4xl
                bg-white
                rounded-lg
                font-medium
                w-full
                border-2
                focus:outline-none
                focus:border-primarygreen
                focus:ring-primarygreen
                border-gray-300
              "
              type="text"
               name="phone"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div class="right w-full">
            <label class="flex items-center font-medium mb-1" for=""
              >Company name
              <span class="text-primarygreen hidden font-bold">*</span></label
            >
            <input
              class="
                placeholder:text-4xl
                bg-white
                rounded-lg
                font-medium
                w-full
                border-2
                focus:outline-none
                focus:border-primarygreen
                focus:ring-primarygreen
                border-gray-300
              "
              type="text"
               name="company"
              placeholder="Full company name"
            />
          </div>
        </div>

        <div class="flex space-x-5 mb-6">
          <div class="left w-full">
            <label class="flex items-center font-medium mb-1" for=""
              >Select Country
              <span class="text-primarygreen hidden font-bold">*</span></label
            >
            <select
              class="
                placeholder:text-4xl
                bg-white
                rounded-lg
                font-medium
                w-full
                border-2
                focus:outline-none
                focus:border-primarygreen
                focus:ring-primarygreen
                border-gray-300
              "
              type="text"
              placeholder="Enter your phone number"
              name="country"
            >
              <option
                v-for="(country, index) in countries"
                :key="`country-${index}`"
                :value="country.name"
                name="country"
               
              >
                {{ country ? country.name : 'Loading Countries' }}
              </option>
            </select>
          </div>
        </div>

        <div class="flex space-x-5 mb-6">
          <div class="left w-full">
            <label class="flex items-center font-medium mb-1" for="">
              <span class="text-primarygreen hidden font-bold">*</span></label
            >
            <textarea
              class="
                placeholder:text-4xl
                bg-white
                rounded-lg
                font-medium
                w-full
                border-2
                focus:outline-none
                focus:border-primarygreen
                focus:ring-primarygreen
                border-gray-300
              "
              rows="5"
              type="text"
               name="message"
              placeholder="Write your message"
            ></textarea>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          class="button items-center mt-10 w-full md:mt-10"
        >
          <button
            type="submit"
            class="
              bg-primarygreen
              transition-all
              duration-500
              ease-in-out
              hover:bg-pelpayblue
              px-8
              py-4
              w-full
              rounded-md
              leading-160
              tracking-0.02em
              font-semibold
              text-white
            "
          >
            Contact Us
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "ContactUsComp",
  data() {
    return {
      countries: [],
      formData: {},
    };
  },
  mounted() {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      this.countries = res.data;
    });
  },
};
</script>

<style scoped></style>
