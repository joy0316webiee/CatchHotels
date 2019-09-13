<template>
  <div class="radio-wrapper">
    <input type="radio" :name="name" :checked="checked" />
    <span class="checkmark"></span>
  </div>
</template>

<script>
export default {
  name: "RadioButton",
  props: {
    name: String,
    selected: Boolean
  },
  data() {
    return {
      checked: this.selected
    };
  },
  watch: {
    selected() {
      this.checked = this.selected;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/constants/constants.scss";

.radio-wrapper {
  display: inline-block;
  position: relative;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-align: left;
  padding: 10px;

  input {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    cursor: pointer;

    &:checked ~ .checkmark {
      background-color: white;
    }

    &:checked ~ .checkmark:after {
      display: block;
    }
  }
  .checkmark {
    position: absolute;
    top: 10px;
    left: 0;
    top: 0;
    height: 18px;
    width: 18px;
    background-color: #ffffff;
    border-radius: 50%;
    border: 1px solid #09d4a1;

    &:after {
      content: "";
      position: absolute;
      display: none;
      top: 4px;
      left: 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #09d4a1;
    }
  }

  &:hover input ~ .checkmark {
    border: 1px solid #09d4a1;
  }
}
</style>