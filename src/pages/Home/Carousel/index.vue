<template>
  <div class="card-carousel-wrapper">
    <vueper-slides class="no-shadow" :visible-slides="3" :slide-ratio="1/4" :dragging-distance="70">
      <img src="@/assets/images/arr_left.png" alt="arrow_left" slot="arrowLeft" />
      <img src="@/assets/images/arr_right.png" alt="arrow_left" slot="arrowRight" />

      <vueper-slide v-for="(testimonial, id) in testimonials" :key="id">
        <div slot="slideContent">
          <div class="card-header">
            <div class="avatar">
              <img :src="require(`@/assets/images/${testimonial.avatar}.png`)" alt="avatar" />
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
          <button>write a review</button>
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
    testimonials: Array
  }
};
</script>

<style lang="scss">
.card-carousel-wrapper {
  width: 1420px;
  margin: 0px auto;
  padding-top: 10px;

  .vueperslides__bullet {
    border: none;
    box-shadow: none;
    transition: 0.3s;
    width: 12px;
    height: 12px;
    background-color: #e5e5e5;
  }
  .vueperslides__bullet--active {
    background-color: #09d4a1;
  }
  .vueperslides__bullets--outside {
    margin-top: 96px;
    bottom: 0;
  }
  .vueperslides__arrow {
    &.vueperslides__arrow--prev {
      left: -120px;
    }
    &.vueperslides__arrow--next {
      right: -120px;
    }

    img {
      width: 32px;
      height: 35px;
      object-fit: contain;
    }
  }

  .vueperslide {
    &.slide-write {
      .vueperslide__content-wrapper {
        padding: 89px 54px;

        h3 {
          margin: 0;
          font-family: Rubik;
          font-weight: 500;
          line-height: 29px;
          color: #09d4a1;
          font-size: 30px;
        }
        p {
          margin: 10px 0 10px;
          color: #000000;
          font-family: Rubik;
          font-size: 18px;
          font-weight: 500;
          line-height: 29px;
        }
        button {
          margin-top: 60px;
          width: 336px;
          height: 60px;
          box-shadow: 0 3px 12px rgba(0, 0, 0, 0.16);
          border-radius: 4px;
          background-color: #ff3d11;
          color: #ffffff;
          font-family: Rubik;
          font-size: 18px;
          font-weight: 500;
          cursor: pointer;

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

      .card-header {
        display: flex;
        align-items: center;

        .avatar {
          img {
            width: 90px;
            height: 90px;
            object-fit: contain;
            border-radius: 50%;
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
        p {
          margin: 45px 0 34px;
          color: #949494;
          font-family: Rubik;
          font-size: 18px;
          font-style: italic;
          line-height: 29px;
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
            }
            span {
              color: #949494;
              font-family: Rubik;
              font-size: 26px;
              font-weight: 400;
              line-height: 29px;
              text-decoration: line-through;
            }
          }
        }
      }
    }
  }
}
</style>