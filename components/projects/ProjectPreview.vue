<template>
  <nuxt-link :to="projectLink">
  <article class="project-preview">
    <div
      class="project-preview__thumbnail"
      :style="{ backgroundImage: 'url(' + thumbnail + ')' }"
    ></div>
    <div class="post-content">
      <h1>{{ title }}</h1>
    </div>
  </article>
  </nuxt-link>
</template>

<script>
import { computed } from "vue";

export default {
  props: ["id", "title", "thumbnail"],
  setup(props) {
    const projectLink = computed(() => {
      return "/projects/" + props.id;
    });

    return {
      props,
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
  &__thumbnail {
    width: 100%;
    height: 200px;
    background-position: center;
    background-size: cover;
  }
}
</style>