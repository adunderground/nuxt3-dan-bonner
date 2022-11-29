<template>
  <section class="main">
    <h2 class="main__title">I am a video producer based in Washington, D.C.</h2>
    <div class="main__image" ref="el">
      <img src="~/assets/images/dan_inguatemala.png" />
    </div>
  </section>
  <ProjectList />
  <GetInTouch />
</template>

<script>
import ProjectList from "@/components/projects/ProjectList";
import GetInTouch from "@/components/shared/GetInTouch";
// import { useScroll } from "@vueuse/core";

export default {
  components: {
    ProjectList,
    GetInTouch,
  },

  // setup() {
  // const el = (ref < HTMLElement) | (null > null);
  // const { x, y, isScrolling, arrivedState, directions } = useScroll(el);
  // console.log(x);
  // console.log(y);
  // console.log(isScrolling);
  // return { el };
  // },
};
</script>

<style lang="scss" scoped>
.main {
  padding: 3.3vmax 4vw;

  &__title {
    margin: 0 0 0 2vw;
    max-width: 24ch;
    text-align: left;
    font-size: 64px;
    font-weight: 100;
  }

  &__image {
    width: 100%;
    min-height: 70vh;
    overflow: hidden;

    img {
      width: 100%;
      max-height: 505px;
      object-fit: cover;
      object-position: 0 60%;
      transform: scale(1.2);
      transition: all 0.5s ease-in;
    }
  }
}
</style>
