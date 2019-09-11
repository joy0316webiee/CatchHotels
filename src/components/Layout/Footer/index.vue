<template>
  <footer class="footer-wrapper">
    <div class="container">
      <div class="newsletter">
        <h2>CatchHotels</h2>
        <div class="subscribe">
          <p>Subscribe to our newsletter</p>
          <Subscribe />
        </div>
      </div>
      <hr />
      <div class="info">
        <p class="copyright">Copyright © 2019, CatchHotels. Všechna práva vyhrazena.</p>
        <p class="design">
          Design by
          <strong>Ondřej Kaše</strong>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import Subscribe from "@/components/Subscribe";

export default {
  name: "Footer",
  components: {
    Subscribe
  }
};
</script>

<style lang="scss" scoped>
@import "@/constants/constants.scss";

.footer-wrapper {
  height: 342px;
  background-color: #25302d;
  padding: 66px 0px 50px;

  .container {
    width: 1290px;
    margin: 0 auto;

    .newsletter {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h2 {
        color: #ffffff;
        font-family: "Sign Painter House Script";
        font-size: 52px;
        font-weight: 400;
        margin: 0;
      }
      .subscribe {
        display: flex;
        align-items: center;

        p {
          width: 122px;
          color: #ffffff;
          font-family: Rubik;
          font-size: 18px;
          font-weight: 400;
          margin-right: 27px;
        }
      }
    }
    hr {
      height: 1px;
      border: 1px solid #4f5c67;
      margin-top: 74px;
      margin-bottom: 50px;
    }
    .info {
      position: relative;

      p {
        margin: 0;
        color: #888888;
        font-family: Rubik;
        font-size: 12px;
        font-weight: 400;
        line-height: 30px;

        &.copyright {
          text-align: center;
        }
        &.design {
          position: absolute;
          right: 0;
          top: -50%;
          transform: translateY(50%);

          strong {
            color: #09d4a1;
          }
        }
      }
    }
  }
}
</style>