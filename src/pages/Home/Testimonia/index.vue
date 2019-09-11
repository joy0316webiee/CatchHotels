<template>
  <div class="card-carousel-wrapper">
    <vueper-slides class="no-shadow" :visible-slides="3">
      <img src="@/assets/images/arr_left.png" alt="arrow_left" slot="arrowLeft" />
      <img src="@/assets/images/arr_right.png" alt="arrow_left" slot="arrowRight" />
      <vueper-slide v-for="(testimonial, id) in items" :key="id">
        <div slot="slideContent">
          <div class="card-header">
            <div class="avatar">
              <img :src="require(`@/assets/images/${testimonial.avatar}.png`)" alt="avatar" />
            </div>
            <div class="details">
              <span>{{`${name} ${surname}`}}</span>
              <span>{{role}}</span>
            </div>
          </div>
          <div class="card-content">
            <p>{{story}}</p>
            <div class="hotel-prices">
              <div class="old">
                <h3>Old hotel price</h3>
                <span>${{oldPrice}}</span>
              </div>
              <div class="new">
                <h3>New hotel price</h3>
                <span>${{newPrice}}</span>
              </div>
            </div>
          </div>
        </div>
      </vueper-slide>
      <vueper-slide>
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
  name: "CardCarousel",
  components: {
    VueperSlides,
    VueperSlide
  },
  props: {
    items: Array
  }
};
</script>

<style lang="scss">
.card-carousel-wrapper {
  width: 80%;
  margin: 0 auto;

  .vueperslides__bullet {
    background-color: rgba(0, 0, 0, 0.3);
    border: none;
    box-shadow: none;
    transition: 0.3s;
    width: 16px;
    height: 16px;
  }
  .vueperslides__bullet--active {
    background-color: #ff5252;
  }
  .vueperslides__bullets--outside {
    bottom: 0;
  }
}
</style>