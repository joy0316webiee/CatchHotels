<template>
  <div class="subscribe-wrapper">
    <input v-model="subscribeEmail" type="text" placeholder="Your email.... " />
    <button @click="onSubmit">subscribe</button>
  </div>
</template>

<script>
import services from "@/services";

export default {
  name: "Subscribe",
  data() {
    return {
      subscribeEmail: ""
    };
  },
  methods: {
    onSubmit() {
      services
        .subscribeNewsletter(this.subscribeEmail)
        .then(({ success, message }) => {
          if (success) {
            this.$notify({
              group: "notify",
              type: "success",
              title: "Subscribe Newsletter",
              text: message
            });
          } else {
            this.$notify({
              group: "notify",
              type: "error",
              title: "Subscribe Newsletter",
              text: message
            });
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/constants/constants.scss";

.subscribe-wrapper {
  width: 487px;
  height: 74px;
  border-radius: 4px;
  background-color: #ffffff;
  margin: 0 auto;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @include screen-md {
    width: 400px;
    height: 60px;
    padding: 6px;
  }
  @include screen-xs {
    width: 300px;
    height: 46px;
  }

  input {
    height: 100%;
    margin-left: 20px;
    color: #949494;
    font-family: Rubik;
    font-size: 16px;
    font-weight: 400;
    border: none;

    @include screen-md {
      font-size: 14px;
    }
  }
  button {
    width: 185px;
    height: 100%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    border-radius: 4px;
    background-color: #ff3d11;
    color: #ffffff;
    font-family: Rubik;
    font-size: 17px;
    font-weight: 500;
    border: none;
    cursor: pointer;

    @include screen-md {
      font-size: 15px;
    }
    @include screen-xs {
      width: 114px;
      height: 34px;
      border-radius: 2px;
      font-size: 12px;
    }

    &:hover {
      background-color: #e02900;
    }
  }
}
</style>