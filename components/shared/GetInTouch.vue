<template>
  <section class="get-in-touch">
    <h2 class="get-in-touch__title">Get In Touch</h2>
    <div class="get-in-touch__links">
      <a class="get-in-touch__link" href="">Link1</a>
      <a class="get-in-touch__link" href="">Link2</a>
      <a class="get-in-touch__link" href="">Link3</a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.get-in-touch {
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  padding: 6.6vmax 4vw;
  background-color: #f7f7f7;

  &__title {
    margin: 0;
    text-align: center;
    text-transform: capitalize;

    font-size: 2.75rem;
    font-weight: 100;
  }

  &__links {
    display: flex;
    justify-content: center;
  }
  &__link {
    margin: 0 0.5rem;
  }
}
</style>