<template>
  <div class="redirect-wrapper">
    <div class="header">
      <h1>
        You are being redirected to
        selected booking website
      </h1>
    </div>
    <div class="details">
      <div class="description">
        <p>
          Once the website loads, finish a booking exactly the same way you
          would normally do.
        </p>
        <p>
          <strong>
            You need to finish your booking in 15 minutes in order for
            CatchHotels.com to be able
            to track it properly.
          </strong>
        </p>
        <p>
          You will receive two confirmation e-mail messages from us - the first
          one confirming your sign-up to the CatchHotels.com service, the latter
          one summarising your booking.
        </p>
        <p>
          Please allow up to a minute for the website to load. If nothing happens,
          <a
            href="#"
            @click="forwardBookingSite"
          >click here.</a>
        </p>
      </div>
      <div class="forward">
        <img src="@/assets/images/forward.png" alt="forward" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Redirect",
  methods: {
    forwardBookingSite() {
      const forwardUrl = localStorage.forwardUrl;
      window.location.replace(forwardUrl);
    }
  },
  mounted() {
    setTimeout(this.forwardBookingSite, 5000);
  }
};
</script>

<style lang="scss" scoped>
@import "@/constants/constants.scss";

.redirect-wrapper {
  width: 1532px;
  margin: 100px auto 0;

  @include screen-lg {
    width: 1200px;
  }
  @include screen-md {
    width: 880px;
  }
  @include screen-sm {
    width: 100%;
    padding: 0 50px;
  }
  @include screen-xs {
    margin: 70px auto 0;
    padding: 0 10px;
  }

  .header {
    width: 800px;

    @include screen-lg {
      width: 600px;
    }
    @include screen-md {
      width: 500px;
    }
    @include screen-sm {
      width: 100%;
      text-align: center;
    }

    h1 {
      margin: 0;
      color: #000000;
      font-family: Poppins;
      font-size: 54px;
      font-weight: 600;

      @include screen-lg {
        font-size: 40px;
      }
      @include screen-md {
        font-size: 35px;
      }
      @include screen-sm {
        font-size: 26px;
      }
      @include screen-xs {
        font-size: 20px;
      }
    }
  }
  .details {
    margin-top: 42px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include screen-lg {
      margin-top: 30px;
    }
    @include screen-md {
      margin-top: 20px;
    }
    @include screen-sm {
      flex-direction: column;
    }

    .forward {
      @include screen-sm {
        order: 1;
      }

      img {
        width: 555px;
        height: 257px;
        object-fit: contain;

        @include screen-lg {
          width: 480px;
          height: 220px;
        }
        @include screen-md {
          width: 380px;
          height: 150px;
        }
        @include screen-xs {
          width: 250px;
          height: 120px;
        }
      }
    }
    .description {
      width: 765px;

      @include screen-lg {
        width: 600px;
      }
      @include screen-md {
        width: 500px;
      }
      @include screen-sm {
        order: 2;
        width: 100%;
        padding: 0px 22px;
        text-align: left;
      }
      @include screen-xs {
        padding: 0px 10px;
      }

      p {
        font-family: Rubik;
        font-size: 24px;
        font-weight: 400;
        line-height: 24px;
        color: #949494;

        @include screen-lg {
          font-size: 19px;
        }
        @include screen-md {
          font-size: 16px;
        }
        @include screen-xs {
          font-size: 15px;
          margin: 7px 0;
        }

        strong {
          font-weight: 400;
          color: #09d4a1;
        }
        a {
          color: #ff3d11;
        }
      }
    }
  }
}
</style>