<template>
  <div class="contact-wrapper">
    <input v-model="contactEmail" type="email" placeholder="Email address*" />
    <PhoneInput @onChange="handlePhoneChange" />
    <textarea v-model="message" placeholder="Message*" />
    <button @click="onSubmit">SEND</button>
  </div>
</template>

<script>
import PhoneInput from "../PhoneInput";
import services from "@/services";

export default {
  name: "Contact",
  components: {
    PhoneInput
  },
  data() {
    return {
      contactEmail: "",
      phoneNumber: "",
      message: ""
    };
  },
  methods: {
    onSubmit() {
      services
        .writeUs(this.contactEmail, this.phoneNumber, this.message)
        .then(({ success, message }) => {
          if (success) {
            this.$notify({
              group: "notify",
              type: "success",
              title: "Write Message",
              text: message
            });
          } else {
            this.$notify({
              group: "notify",
              type: "error",
              title: "Write Message",
              text: "Faild, try again!"
            });
          }
        });
    },
    handlePhoneChange(phoneNumber) {
      this.phoneNumber = phoneNumber;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/constants/constants.scss";

.contact-wrapper {
  margin: 46px auto 0;
  width: 725px;

  @include screen-md {
    margin: 35px auto 0;
    width: 550px;
  }
  @include screen-sm {
    margin: 18px auto 0;
    width: 400px;
  }
  @include screen-xs {
    width: 300px;
  }

  > * {
    width: 100%;
    margin-bottom: 20px;
    font-family: Rubik;
    font-size: 18px;
    font-weight: 400;
    padding: 30px 30px 30px 37px;
    border: 1px solid #c7c7c7;
    background-color: #f7f7f7;
    border-radius: 4px;

    @include screen-md {
      padding: 15px 15px 15px 27px;
    }
    @include screen-xs {
      margin-bottom: 16px;
    }

    ::placeholder {
      color: #949494;
    }
  }

  > input {
    height: 80px;

    @include screen-md {
      height: 60px;
      font-size: 15px;
    }
  }
  > textarea {
    height: 160px;
    resize: none;

    @include screen-md {
      height: 130px;
      font-size: 15px;
    }
    @include screen-xs {
      height: 100px;
    }
  }
  > button {
    height: 76px;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.16);
    border-radius: 4px;
    background-color: #ff3d11;
    color: #ffffff;
    font-family: Rubik;
    font-size: 22px;
    font-weight: 500;
    border: none;
    cursor: pointer;

    @include screen-md {
      height: 65px;
      font-size: 18px;
    }
    @include screen-sm {
      font-size: 16px;
    }
    @include screen-xs {
      height: 50px;
    }

    &:hover {
      background-color: #e02900;
    }
  }
}
</style>