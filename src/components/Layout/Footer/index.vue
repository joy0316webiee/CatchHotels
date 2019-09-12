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

  @include screen-md {
    height: 300px;
    padding: 50px 0px 35px;
  }
  @include screen-sm {
    height: 247px;
    padding: 18px 0px 20px;
  }

  .container {
    width: 1290px;
    margin: 0 auto;

    @include screen-lg {
      width: 1100px;
    }
    @include screen-md {
      width: 850px;
    }
    @include screen-sm {
      width: 100%;
      padding: 0 10px;
    }

    .newsletter {
      display: flex;
      align-items: center;
      justify-content: space-between;

      @include screen-sm {
        flex-direction: column;
      }

      h2 {
        color: #ffffff;
        font-family: "Sign Painter House Script";
        font-size: 52px;
        font-weight: 400;
        margin: 0;

        @include screen-md {
          font-size: 40px;
        }
        @include screen-sm {
          font-size: 30px;
        }
      }
      .subscribe {
        display: flex;
        align-items: center;

        @include screen-sm {
          flex-direction: column;
        }

        p {
          width: 122px;
          color: #ffffff;
          font-family: Rubik;
          font-size: 18px;
          font-weight: 400;
          margin-right: 27px;

          @include screen-md {
            font-size: 15px;
            width: 110px;
          }
          @include screen-sm {
            width: 100%;
            text-align: center;
            font-size: 16px;
          }
        }
      }
    }
    hr {
      height: 1px;
      border: 1px solid #4f5c67;
      margin-top: 74px;
      margin-bottom: 50px;

      @include screen-md {
        margin-top: 60px;
        margin-bottom: 38px;
      }
      @include screen-sm {
        margin-top: 15px;
        margin-bottom: 15px;
      }
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

        @include screen-xs {
          font-size: 10px;
        }

        &.copyright {
          text-align: center;
        }
        &.design {
          position: absolute;
          right: 0;
          top: -50%;
          transform: translateY(50%);

          @include screen-sm {
            display: none;
          }

          strong {
            color: #09d4a1;
          }
        }
      }
    }
  }
}
</style>