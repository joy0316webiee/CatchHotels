<template>
  <div class="navbar-wrapper">
    <div class="logo">
      <span>CatchHotels</span>
    </div>
    <ul class="menu">
      <li
        v-for="({id, label}) in menuItems"
        :key="id"
        :class="activeClass(id)"
        @click="onSelectMenuItem(id)"
      >{{label}}</li>
      <li>
        <LanguageSelector />
      </li>
    </ul>
  </div>
</template>

<script>
import LanguageSelector from "./LanguageSelector";

export default {
  name: "Navbar",
  components: {
    LanguageSelector
  },
  data() {
    return {
      menuItems: [
        {
          id: 0,
          label: "Reserv hotel"
        },
        {
          id: 1,
          label: "How it works"
        },
        {
          id: 2,
          label: "Testimonials"
        },
        {
          id: 3,
          label: "Can't book right now"
        },
        {
          id: 4,
          label: "F&Q"
        },
        {
          id: 5,
          label: "Contact"
        }
      ],
      selectedMenuItem: 0
    };
  },
  methods: {
    activeClass(id) {
      return [{ active: id === this.selectedMenuItem }];
    },
    onSelectMenuItem(id) {
      this.selectedMenuItem = id;
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

  .logo {
    cursor: pointer;
    span {
      color: #09d4a1;
      font-family: "Sign Painter House Script";
      font-size: 36px;
      font-weight: 400;
    }
  }
  ul {
    width: 888px;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    li {
      color: #091613;
      font-family: Rubik;
      font-size: 18px;
      font-weight: 400;
      cursor: pointer;

      &.active {
        color: #09d4a1;
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
        }
      }
    }
  }
}
</style>