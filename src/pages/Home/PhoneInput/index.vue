<template>
  <div class="phone-input__wrapper">
    <vue-tel-input v-model="phone" v-bind="bindProps" />
  </div>
</template>

<script>
import Vue from "vue";
import VueTelInput from "vue-tel-input";

Vue.use(VueTelInput);

export default {
  name: "PhoneInput",
  data() {
    return {
      phone: "",
      bindProps: {
        defaultCountry: "CZ",
        disabledFetchingCountry: false,
        disabled: false,
        disabledFormatting: false,
        placeholder: "Phone number*",
        required: false,
        enabledCountryCode: true,
        enabledFlags: true,
        preferredCountries: ["CZ", "US"],
        onlyCountries: [],
        ignoredCountries: [],
        autocomplete: "off",
        name: "telephone",
        maxLen: 25,
        wrapperClasses: "telephone-wrapper",
        inputClasses: "telephone-input",
        dropdownOptions: {
          disabledDialCode: false
        },
        inputOptions: {
          showDialCode: false
        }
      }
    };
  }
};
</script>

<style lang="scss">
@import "@/constants/constants.scss";

.phone-input__wrapper {
  padding: 10px 30px 10px 37px !important;

  @include screen-md {
    padding: 2px 15px 2px 18px !important;
  }
  @include screen-xs {
    padding: 0px 15px 0px 17px !important;
  }

  .telephone-wrapper {
    border: none !important;
    box-shadow: none !important;

    > .dropdown {
      .selection {
        width: 104px;
        justify-content: space-between;

        @include screen-xs {
          width: 90px;
        }

        .country-code {
          height: 45px;
          color: #949494;
          font-family: Rubik;
          font-size: 18px;
          font-weight: 400;
          line-height: 45px;
          margin-left: 7px;

          @include screen-md {
            font-size: 16px;
          }
          @include screen-xs {
            margin-left: 0px;
            height: 30px;
            line-height: 30px;
          }
        }
      }
      > ul {
        top: 50px;

        li {
          font-size: 16px;
          padding: 10px 15px;
        }
      }
    }
    .telephone-input {
      background-color: #f7f7f7;
      font-family: Rubik;
      font-size: 18px;
      font-weight: 400;
      padding-left: 30px;

      @include screen-md {
        font-size: 15px;
      }
      @include screen-xs {
        padding-left: 10px;
      }

      &::placeholder {
        color: #949494;
      }
    }
  }
}
</style>