<template>
  <div class="layout-wrapper">
    <Navbar />

    <router-view />

    <Footer />
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Footer from "./Footer";

export default {
  name: "Layout",
  components: {
    Navbar,
    Footer
  }
};
</script>

<style lang="scss" scoped>
.layout-wrapper {
  position: relative;
  overflow: hidden;
}
</style>