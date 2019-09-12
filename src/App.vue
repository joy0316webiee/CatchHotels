<template>
  <div id="app">
    <router-view />
    <notifications group="notify" position="top right" />
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

.notifications {
  width: 250px !important;

  @include screen-md {
    width: 200px !important;
  }
  @include screen-sm {
    width: 150px !important;
  }

  .vue-notification {
    padding: 15px;
    margin: 0 2px 2px;

    @include screen-md {
      padding: 10px;
    }
    @include screen-sm {
      padding: 6px;
    }

    .notification-title {
      font-size: 16px;

      @include screen-md {
        font-size: 15px;
      }
      @include screen-sm {
        font-size: 14px;
      }
    }
    .notification-content {
      margin-top: 6px;
      font-size: 14px;

      @include screen-md {
        font-size: 13px;
      }
      @include screen-sm {
        font-size: 12px;
      }
    }
  }
}

/* div {
  border: 1px solid #ddd;
} */
</style>
