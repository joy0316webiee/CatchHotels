<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/constants/constants.scss";

// fonts
@font-face {
  font-family: "Rubik";
  src: url("~@/assets/fonts/Rubik-Regular.ttf");
}

@font-face {
  font-family: "Sign Painter House Script";
  src: url("~@/assets/fonts/SignPainter HouseScript Regular.ttf");
}

/* @font-face {
  font-family: "Poppins";
  src: url("~@/assets/fonts/Poppins-Regular.ttf");
} */

// basic styling
* {
  box-sizing: border-box;

  &:focus {
    outline: none !important;
    box-shadow: none !important;
  }
}

body {
  margin: 0 auto;
  padding: 0;
  font-family: Rubik;
}

/* div {
  border: 1px solid #ddd;
} */
</style>
