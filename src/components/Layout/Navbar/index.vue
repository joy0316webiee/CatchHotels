<template>
  <div class="navbar-wrapper">
    <div class="logo">
      <span>CatchHotels</span>
    </div>
    <ul class="menu" :class="classes.menu()">
      <li
        v-for="({id, label, href}) in menuItems"
        :key="id"
        :class="activeClass(id)"
        @click="onSelectMenuItem(id, href)"
      >
        <a :href="href">{{label}}</a>
      </li>
      <li class="lang">
        <LanguageSelector />
      </li>
      <li class="close" @click="closeHamburgerMenu()">
        <img src="@/assets/images/ic_close.png" alt="close" />
      </li>
    </ul>
    <div class="hamburger-button" @click="openHamburgerMenu()">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
import LanguageSelector from "./LanguageSelector";
import { scrollToY } from "@/helpers";

export default {
  name: "Navbar",
  components: {
    LanguageSelector
  },
  data() {
    return {
      menuItems: [
        {
          id: 1,
          label: "How it works",
          href: "#how-it-works"
        },
        {
          id: 2,
          label: "Testimonials",
          href: "#testimonials"
        },
        {
          id: 3,
          label: "Can't book right now",
          href: "#can-not-book"
        },
        {
          id: 4,
          label: "F&Q",
          href: "#faq"
        },
        {
          id: 5,
          label: "Contact",
          href: "#contact"
        }
      ],
      selectedMenuItem: 1,
      openedHamburgerMenu: false,
      classes: {
        menu: () => [{ "hamhurger-opened": this.openedHamburgerMenu }]
      }
    };
  },
  methods: {
    activeClass(id) {
      return [{ active: id === this.selectedMenuItem }];
    },
    openHamburgerMenu() {
      this.openedHamburgerMenu = true;
    },
    closeHamburgerMenu() {
      this.openedHamburgerMenu = false;
    },
    onSelectMenuItem(id, target) {
      this.selectedMenuItem = id;
      this.closeHamburgerMenu();

      // scrolling
      const targetElement = document.getElementById(
        target.substr(1, target.length)
      );
      scrollToY(targetElement.offsetTop, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/constants/constants.scss";

.navbar-wrapper {
  margin: 0 auto;
  width: 1286px;
  height: 72px;
  padding: 13px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;

  @include screen-lg {
    width: 1100px;
  }
  @include screen-md {
    width: 850px;
    height: 60px;
  }
  @include screen-sm {
    width: 100%;
    padding: 13px 20px;
  }
  @include screen-xs {
    height: 42px;
    padding: 13px 10px;
  }

  .logo {
    cursor: pointer;

    span {
      color: #09d4a1;
      font-family: "Sign Painter House Script";
      font-size: 36px;
      font-weight: 400;

      @include screen-md {
        font-size: 32px;
      }
      @include screen-xs {
        font-size: 24px;
      }
    }
  }
  ul {
    width: 800px;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include screen-md {
      width: 620px;
    }
    @include screen-sm {
      position: fixed;
      right: -250px;
      top: 0;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      z-index: 10;
      width: 222px;
      height: 100vh;
      background-color: #000000;
      padding: 58px 16px 0 34px;
      transition: right 0.5s ease-out;

      &.hamhurger-opened {
        right: 0;

        &::before {
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          content: "";
          background-color: rgba(0, 0, 0, 0.2);
        }
      }
    }

    li {
      font-family: Rubik;
      font-size: 18px;
      font-weight: 400;
      /* overflow: hidden; */
      white-space: nowrap;
      text-overflow: clip;
      cursor: pointer;

      @include screen-md {
        font-size: 15px;
      }
      @include screen-sm {
        position: relative;
        font-size: 16px;
        margin-bottom: 25px;
      }

      &.active {
        position: relative;

        &::after {
          content: "";
          width: 100%;
          height: 3px;
          border-radius: 3px 3px 0 0;
          background-color: #09d4a1;
          position: absolute;
          left: 0;
          top: calc(100% + 22px);

          @include screen-md {
            top: calc(100% + 18px);
          }
          @include screen-sm {
            display: none;
          }
        }

        a {
          color: #09d4a1;
        }
      }
      &.lang {
        @include screen-sm {
          display: none;
        }
      }
      &.close {
        display: none;
        position: absolute;
        right: 10px;
        top: 10px;

        @include screen-sm {
          display: inline-block;
        }
      }

      a {
        color: #091613;
        text-decoration: none;

        @include screen-sm {
          color: #ffffff;
        }
      }
    }
  }
  .hamburger-button {
    display: none;
    height: 16px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    @include screen-sm {
      display: flex;

      &:hover > span {
        background-color: darken(#09d4a1, 5%);
      }
    }

    span {
      width: 28px;
      height: 2px;
      border-radius: 1px;
      background-color: #09d4a1;
    }
  }
}
</style>