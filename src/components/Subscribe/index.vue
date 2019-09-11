<template>
  <div class="subscribe-wrapper">
    <input type="text" placeholder="Your email.... " />
    <button>subscribe</button>
  </div>
</template>

<script>
export default {
  name: "Subscribe"
};
</script>

<style lang="scss" scoped>
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

  input {
    height: 100%;
    margin-left: 20px;
    color: #949494;
    font-family: Rubik;
    font-size: 16px;
    font-weight: 400;
    border: none;
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
    cursor: pointer;

    &:hover {
      background-color: #e02900;
    }
  }
}
</style>