<template>
  <div class="carousel-cmp">
    <h3 class="carousel-cmp__title">Clients Include:</h3>
    <Carousel :items-to-show="5" :wrap-around="true" autoplay="3000">
      <Slide v-for="(name, index) in imageNames" :key="index">
        <!-- <div class="carousel__item">{{ slide }}</div> -->
        <div class="carousel__item">
          <img :src="`/assets/images/carousel/${name}`" alt="" />
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "WrapAround",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  setup() {
    return {
      imageNames: [
        "array.png",
        "AU.png",
        "cornell.png",
        "GWU.png",
        "merdian.png",
        "state+dept.png",
        "umd.png",
        "unacast.png",
        "USD.png",
        "vanderbilt.png",
        "verity.png",
        "WVU.png",
      ],
    };
  },
});
</script>

<style lang="scss">
.carousel-cmp {
  padding: 2rem 0;
  background-color: #f7f7f7;
  margin-bottom: 3rem;
  
  &__title {
    margin-bottom: 2rem;
    text-align: center;
    font-size: 2rem;
    font-weight: 400;
  }
}
.carousel {
  margin: 3rem 0;
  cursor: grab;

  &__viewport {
  }

  &__item {
    min-height: 200px;
    width: 100%;
    // background-color: var(--vc-clr-primary);
    // color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__slide {
    padding: 10px;
  }

  &__next,
  &__prev {
    box-sizing: content-box;
    border: 5px solid white;
    background-color: #000;
    height: 50px;
    width: 50px;
    transition: background-color 1.3s;

    &:hover {
      background-color: blueviolet;
    }
  }

  &__prev {
    left: 2vw;
  }

  &__next {
    right: 2vw;
  }
}
</style>