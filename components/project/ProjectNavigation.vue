<template>
  <div class="navigation">
    <nuxt-link v-if="prevLink" :to="prevLink" class="navigation__link navigation__link--previous">
      <i class="chevron-left"></i>
      Previous Link
    </nuxt-link>
    <nuxt-link v-if="nextLink" :to="nextLink" class="navigation__link navigation__link--next">
      Next Link
      <i class="chevron-right"></i>
    </nuxt-link>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: ["neighborIds"],
  setup(props) {
    const prevLink = props.neighborIds.previous ? computed(() => ("/projects/" + props.neighborIds.previous)) : null;
    const nextLink = props.neighborIds.next ? computed(() => ("/projects/" + props.neighborIds.next)) : null;

    return {
      prevLink,
      nextLink
    }
  }
}
</script>
<style lang="scss" scoped>
.navigation {
  display: flex;
  justify-content: space-between;

  &__link {
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

    &:hover~&::before {
      right: 0;
    }
  }
}

.chevron {
  &-left {
    position: absolute;
    height: 16px;
    width: 16px;
    left: -20px;
    top: 0;
    background-image: url('~/assets/icons/chevron-left.svg');
  }

  &-right {
    position: absolute;
    height: 16px;
    width: 16px;
    right: -20px;
    top: 0;
    background-image: url('~/assets/icons/chevron-right.svg');
  }
}
</style>