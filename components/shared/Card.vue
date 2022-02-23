<template>
  <section class="card" v-bind:class="{ flipped: flipped }">
    <div class="card__text">
      <p>{{ text }}</p>
      <small v-if="smallText"> {{ smallText }} </small>
    </div>
    <div class="card__image">
      <img :src="imgSrc" :alt="smallText" />
    </div>
  </section>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    flipped: {
      typeof: Boolean,
      required: false,
      default: false,
    },
    text: {
      typeof: String,
      required: true,
    },
    smallText: {
      typeof: String,
      required: false,
    },
    imageSrc: {
      typeof: String,
      required: true,
    },
  },
  setup(props) {
    const imgSrc = computed(() => {
      return "/assets/images/" + props.imageSrc;
    });

    return { imgSrc, flipped: props.flipped };
  },
};
</script>

<style lang="scss" scoped>
.flipped {
  flex-direction: row-reverse;
}
.card {
  margin: 6.6vmax 4vw;
  display: flex;

  &__text {
    width: 50%;
    // margin-right: 10%;
    padding: 0 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      max-width: 50ch;
      font-size: 1.25rem;
      font-weight: 100;
    }
    small {
      font-style: italic;
      font-size: 0.85rem;
    }
  }
  &__image {
    width: 50%;
    padding: 0rem 5rem;
    img {
      border-radius: 0.75rem;
      max-width: 560px;
    }
  }
}
</style>