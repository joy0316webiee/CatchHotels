<template>
  <div class="card-carousel-wrapper">
    <vueper-slides
      class="no-shadow"
      :visible-slides="3"
      :slide-ratio="1/4"
      :dragging-distance="70"
      :breakpoints="breakpoints"
    >
      <img src="@/assets/images/arr_left.png" alt="arrow_left" slot="arrowLeft" />
      <img src="@/assets/images/arr_right.png" alt="arrow_left" slot="arrowRight" />

      <vueper-slide v-for="(testimonial, id) in testimonials" :key="id">
        <div slot="slideContent">
          <div class="card-header">
            <div class="avatar">
              <img :src="testimonial.avatar" alt="avatar" />
            </div>
            <div class="details">
              <span class="name">{{`${testimonial.name} ${testimonial.surname}`}}</span>
              <span class="role">{{testimonial.role}}</span>
            </div>
          </div>
          <div class="card-content">
            <p>{{testimonial.review}}</p>
            <div class="hotel-prices">
              <div class="old">
                <h3>Old hotel price</h3>
                <span>${{testimonial.oldPrice}}</span>
              </div>
              <div class="new">
                <h3>New hotel price</h3>
                <span>${{testimonial.newPrice}}</span>
              </div>
            </div>
          </div>
        </div>
      </vueper-slide>
      <vueper-slide class="slide-write">
        <div slot="slideContent">
          <h3>Did we help you?</h3>
          <p>Share it with others.</p>
          <button @click="onWriteUs">write a review</button>
        </div>
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "Carousel",
  components: {
    VueperSlides,
    VueperSlide
  },
  props: {
    data: Array,
    onWriteUs: Function
  },
  data() {
    return {
      testimonials: this.data,
      breakpoints: {
        1340: {
          visibleSlides: 2,
          slideRatio: 1 / 3
        },
        970: {
          visibleSlides: 1,
          slideRatio: 3 / 4,
          arrows: false
        }
      }
    };
  },
  watch: {
    data() {
      this.testimonials = this.data;
    }
  }
};
</script>

<style lang="scss">
@import "@/constants/constants.scss";

.card-carousel-wrapper {
  width: 1420px;
  margin: 0px auto;
  padding-top: 10px;

  @include screen-lg {
    width: 1200px;
  }
  @include screen-md {
    width: 800px;
  }
  @include screen-sm {
    width: 400px;
  }
  @include screen-xs {
    width: 300px;
  }

  .vueperslides__bullet {
    border: none;
    box-shadow: none;
    transition: 0.3s;
    width: 12px;
    height: 12px;
    background-color: #e5e5e5;

    @include screen-md {
      width: 8px;
      height: 8px;
    }
  }
  .vueperslides__bullet--active {
    background-color: #09d4a1;
  }
  .vueperslides__bullets--outside {
    margin-top: 96px;
    bottom: 0;

    @include screen-md {
      margin-top: 60px;
    }
  }
  .vueperslides__bullets {
    @include screen-sm {
      bottom: -40px;
    }
  }
  .vueperslides__arrow {
    &.vueperslides__arrow--prev {
      left: -120px;

      @include screen-lg {
        left: -60px;
      }
    }
    &.vueperslides__arrow--next {
      right: -120px;

      @include screen-lg {
        right: -60px;
      }
    }

    img {
      width: 32px;
      height: 35px;
      object-fit: contain;

      @include screen-md {
        width: 25px;
        height: 25px;
      }
    }
  }

  .vueperslide {
    &.slide-write {
      .vueperslide__content-wrapper {
        padding: 89px 54px;

        @include screen-lg {
          padding: 52px 27px;
        }
        @include screen-md {
          padding: 60px 30px;
        }
        @include screen-xs {
          padding: 40px 27px;
        }

        h3 {
          margin: 0;
          font-family: Rubik;
          font-weight: 500;
          line-height: 29px;
          color: #09d4a1;
          font-size: 30px;

          @include screen-md {
            font-size: 22px;
          }
          @include screen-xs {
            font-size: 14px;
          }
        }
        p {
          margin: 10px 0 10px;
          color: #000000;
          font-family: Rubik;
          font-size: 18px;
          font-weight: 500;
          line-height: 29px;

          @include screen-md {
            font-size: 16px;
          }
          @include screen-xs {
            font-size: 13px;
            margin: 5px 0 5px;
          }
        }
        button {
          margin-top: 60px;
          width: 336px;
          height: 60px;
          box-shadow: 0 3px 12px rgba(0, 0, 0, 0.16);
          border-radius: 4px;
          background-color: #ff3d11;
          border: none;
          color: #ffffff;
          font-family: Rubik;
          font-size: 18px;
          font-weight: 500;
          cursor: pointer;

          @include screen-md {
            width: 250px;
            height: 45px;
            font-size: 16px;
            margin-top: 45px;
          }
          @include screen-xs {
            width: 100%;
            margin-top: 42px;
            font-size: 13px;
          }

          &:hover {
            background-color: #e02900;
          }
        }
      }
    }

    .vueperslide__content-wrapper {
      width: 444px;
      height: 372px;
      box-shadow: 0 3px 30px rgba(0, 0, 0, 0.04);
      border-radius: 4px;
      background-color: #ffffff;
      padding: 32px 34px 52px 35px;

      @include screen-lg {
        width: 390px;
        height: 300px;
        padding: 10px 7px 10px 7px;
      }
      @include screen-md {
        width: 350px;
        height: 280px;
        padding: 18px 15px 25px 15px;
      }
      @include screen-xs {
        height: 218px;
        padding: 15px 30px;
      }

      .card-header {
        display: flex;
        align-items: center;

        .avatar {
          img {
            width: 90px;
            height: 90px;
            object-fit: contain;
            border-radius: 50%;

            @include screen-md {
              width: 70px;
              height: 70px;
            }
            @include screen-xs {
              width: 60px;
              height: 60px;
            }
          }
        }
        .details {
          margin-left: 12px;
          display: flex;
          flex-direction: column;

          span {
            font-family: Rubik;
            font-size: 18px;
            font-weight: 400;
            line-height: 29px;

            @include screen-md {
              font-size: 15px;
            }
            @include screen-xs {
              font-size: 14px;
            }

            &.name {
              color: #09d4a1;
            }
            &.role {
              color: #949494;
            }
          }
        }
      }
      .card-content {
        > p {
          margin: 45px 0 34px;
          color: #949494;
          font-family: Rubik;
          font-size: 18px;
          font-style: italic;
          line-height: 29px;
          text-align: left;

          @include screen-lg {
            margin: 25px 0 25px;
          }
          @include screen-md {
            margin: 12px 0 12px;
            font-size: 16px;
          }
          @include screen-xs {
            margin: 8px 0 8px;
            font-size: 13px;
          }
        }
        .hotel-prices {
          display: flex;
          align-items: center;

          > div {
            text-align: left;

            &.new {
              margin-left: 27px;

              span {
                color: #09d4a1;
                text-decoration: none;
              }
            }

            h3 {
              margin: 0 0 10px;
              color: #091613;
              font-family: Rubik;
              font-size: 20px;
              font-weight: 500;

              @include screen-md {
                font-size: 16px;
              }
              @include screen-xs {
                font-size: 14px;
                margin: 0 0 5px;
              }
            }
            span {
              color: #949494;
              font-family: Rubik;
              font-size: 26px;
              font-weight: 400;
              line-height: 29px;
              text-decoration: line-through;

              @include screen-md {
                font-size: 20px;
              }
              @include screen-xs {
                font-size: 17px;
              }
            }
          }
        }
      }
    }
  }
}
</style>