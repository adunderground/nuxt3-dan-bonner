<template>
  <section class="get-in-touch">
    <h2 class="get-in-touch__title">Get In Touch</h2>
    <div class="get-in-touch__links">
      <a
        rel="noreferrer noopener"
        target="_blank"
        class="get-in-touch__link get-in-touch__link--vimeo"
        href="https://vimeo.com/danielbonner"
      ></a>
      <a
        rel="noreferrer noopener"
        target="_blank"
        class="get-in-touch__link get-in-touch__link--mail"
        href="mailto:daniel@daniel-bonner.com"
      ></a>
      <a
        rel="noreferrer noopener"
        target="_blank"
        class="get-in-touch__link get-in-touch__link--linkedin"
        href="https://www.linkedin.com/in/danieltbonner/"
      ></a>
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
    background-size: cover;
    height: 24px;
    width: 24px;

    &--vimeo {
      background-image: url("/icons/vimeo.svg");
    }
    &--mail {
      background-image: url("/icons/mail.svg");
    }
    &--linkedin {
      background-image: url("/icons/linkedin.svg");
    }
  }
}
</style>