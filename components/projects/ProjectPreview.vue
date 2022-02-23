<template>
  <nuxt-link :to="projectLink" class="project-preview__link" :style="cssVars">
    <article class="project-preview">
      <div
        class="project-preview__thumbnail"
        :style="{ backgroundImage: 'url(' + thumbnail + ')' }"
      ></div>
      <div class="project-preview__content">{{ title }}</div>
    </article>
  </nuxt-link>
</template>

<script>
import { computed } from "vue";

export default {
  props: ["id", "title", "thumbnail", "gridAreaName"],
  setup(props) {
    const projectLink = computed(() => {
      return "/projects/" + props.id;
    });

    const cssVars = computed(() => {
      return { "--grid-area-name": props.gridAreaName };
    });

    return {
      cssVars,
      projectLink,
      id: props.id,
      title: props.title,
      thumbnail: props.thumbnail,
    };
  },
};
</script>

<style lang="scss" scoped>
.project-preview {
  &__link {
    grid-area: var(--grid-area-name);
  }

  height: 100%;
  position: relative;
  overflow: hidden;

  &__thumbnail {
    width: 100%;
    height: 100%;
    inset: 0;

    background-position: center;
    background-size: cover;
    position: absolute;
  }

  &__content {
    opacity: 0;
    
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    
    background-image: radial-gradient(#1f1f1f57, #3030303d);

    transition: all 0.3s ease-in-out;

display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    font-size: 2rem;
    font-weight: 500;
    color: #fff;
  }

  &:hover &__thumbnail {
    filter: blur(4px);
  }
  &:hover &__content {
    opacity: 1;
  }
}
</style>