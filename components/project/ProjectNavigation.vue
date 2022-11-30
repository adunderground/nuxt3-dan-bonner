<template>
  <div class="navigation">
    <nuxt-link
      v-if="prevLink"
      :to="prevLink"
      class="navigation__link navigation__link--prev"
    >
      <i class="chevron-left"></i>
      Previous Link
    </nuxt-link>
    <nuxt-link
      :to="'/projects'"
      class="navigation__link navigation__link--center"
    >
      View All Projects
    </nuxt-link>
    <nuxt-link
      v-if="nextLink"
      :to="nextLink"
      class="navigation__link navigation__link--next"
    >
      Next Link
      <i class="chevron-right"></i>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["neighborIds"],
  setup(props) {
    const prevLink = props.neighborIds.previous
      ? computed(() => "/projects/" + props.neighborIds?.previous)
      : null;
    const nextLink = props.neighborIds.next
      ? computed(() => "/projects/" + props.neighborIds?.next)
      : null;

    return {
      prevLink,
      nextLink,
    };
  },
};
</script>
<style lang="scss" scoped>
.navigation {
  display: grid;
  // grid-template-areas: 'prev centr next';
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 80px;
  justify-content: space-between;
  justify-items: center;
  align-items: center;

  &__link {
    font-size: 1.6rem;
    color: black;
    text-decoration: none;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 100%;
      width: 0;
      height: 125%;
      border-bottom: 2px solid#000;
      transition: 0.2s all linear;
    }

    &:hover::before {
      width: 100%;
      right: 0;
    }

    &:hover ~ &::before {
      right: 0;
    }

    &--center {
      grid-column: 2/3;
    }

    &--prev {
      grid-column: 1/2;
      justify-self: start;
    }

    &--next {
      grid-column: 3/4;
      justify-self: end;
    }
  }
}

.chevron {
  &-left {
    position: absolute;
    height: 16px;
    width: 16px;
    left: -20px;
    top: 8px;
    background-image: url("~/assets/icons/chevron-left.svg");
  }

  &-right {
    position: absolute;
    height: 16px;
    width: 16px;
    right: -20px;
    top: 8px;
    background-image: url("~/assets/icons/chevron-right.svg");
  }
}
</style>
