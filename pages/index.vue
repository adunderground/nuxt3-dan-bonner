<template>
  <section class="main">
    <h2 class="main__title">I am a video producer based in Washington, D.C.</h2>
    <div class="main__image" ref="el">
      <img src="/images/dan_inguatemala.png" />
    </div>
  </section>
  <ProjectsProjectList />
  <SharedGetInTouch />
</template>

<script setup>
definePageMeta({
  middleware: "hydrate-projects",
});
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

    @media (width <= 620px) {
      font-size: 42px;
    }
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
