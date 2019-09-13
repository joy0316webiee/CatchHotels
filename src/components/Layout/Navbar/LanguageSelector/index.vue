<template>
  <div class="lang-selector__wrapper" v-click-outside="hide">
    <div class="dropdown-toggle" @click="toggle()">
      <img :src="getLanguageImage(selectedLanguage)" alt="lang" />
    </div>
    <ul class="dropdown-menu" v-show="opened">
      <li v-for="({id, title}) in languages" :key="id" @click="onLanguageSelect(id)">
        <img :src="getLanguageImage(id)" alt="eng" />
        <span>{{title}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
import { i18n } from "@/plugins/i18n";

export default {
  name: "LanguageSelector",
  data() {
    return {
      opened: false,
      languages: [
        {
          id: "en",
          title: "English"
        },
        {
          id: "cz",
          title: "Czech"
        }
      ],
      selectedLanguage: "en"
    };
  },
  methods: {
    toggle() {
      this.opened = !this.opened;
    },
    hide() {
      this.opened = false;
    },
    getLanguageImage(lang) {
      return require(`@/assets/images/${lang}.png`);
    },
    onLanguageSelect(lang) {
      this.selectedLanguage = lang;
      i18n.locale = lang;
      this.hide();
    }
  },
  directives: {
    ClickOutside
  }
};
</script>

<style lang="scss" scoped>
@import "@/constants/constants.scss";

.lang-selector__wrapper {
  position: relative;

  .dropdown-toggle {
    cursor: pointer;

    img {
      width: 24px;
      height: 24px;
      border-radius: 50%;

      @include screen-md {
        width: 20px;
        height: 20px;
      }
    }
  }
  .dropdown-menu {
    width: 151px;
    height: 131px;
    margin: 0;
    padding: 20px 0;
    position: absolute;
    left: -50%;
    top: calc(100% + 33px);
    z-index: 10;
    transform: translateX(-50px);
    list-style: none;
    border-radius: 4px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @include screen-md {
      padding: 10px 0px;
      width: 130px;
      height: 100px;
    }

    &::before {
      content: "";
      width: 15px;
      height: 15px;
      background-color: #ffffff;
      transform: translate(-50%, -50%) rotate(45deg);
      position: absolute;
      left: 50%;
      top: 0;
    }
    li {
      width: 100%;
      padding: 10px 30px;
      display: flex;
      align-items: center;
      font-family: Rubik;
      font-size: 18px;
      font-weight: 400;
      color: #949494;
      cursor: pointer;

      @include screen-md {
        padding: 8px 24px;
        font-size: 15px;
      }

      &:hover {
        background-color: #ddd;
        color: #ffffff;
      }

      img {
        width: 24px;
        height: 24px;
        border-radius: 50%;

        @include screen-md {
          width: 20px;
          height: 20px;
        }
      }
      span {
        margin-left: 6px;
      }
    }
  }
}
</style>