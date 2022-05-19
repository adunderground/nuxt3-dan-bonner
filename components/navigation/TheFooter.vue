<template>
  <footer class="footer">
    <h3 class="footer__title">Daniel Bonner</h3>
    <p>Washington D.C.</p>
    <p>
      <a href="mailto:daniel@daniel-bonner.com">daniel@daniel-bonner.com</a>
    </p>
    <small>Copyright © 2021 Daniel Bonner. All Rights Reserved.</small>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  max-width: 100%;
  padding: 3.3vmax 4vw;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-family: "Crimson Pro", serif;

  &__title {
    font-size: 2rem;
    font-family: "Bodoni Moda", serif;
    font-weight: 100;
    margin: 0;
  }
  
}
</style>