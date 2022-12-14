<template>
  <header class="header">
    <div class="header__left">
      <NuxtLink to="/"
        ><img
          class="header__logo"
          src="/images/db_logo.png"
          alt="Dan Bonner Logo"
      /></NuxtLink>
    </div>
    <div class="header__right">
      <NuxtLink to="/projects">Work</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  padding: 1.75rem 3.25rem;
  display: flex;
  justify-content: space-between;

  &__logo {
    max-width: 270px;
  }

  &__right {
    min-width: 10%;
    display: flex;
    justify-content: space-around;
    font-size: 1.25rem;
    gap: 1.25rem;

    a {
      text-decoration: none;
      color: #1b1c1e;
      position: relative;
      // border-bottom: 2px solid#000;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 100%;
        width: 0;
        height: 65%;
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

      &.router-link-active::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 65%;
        border-bottom: 2px solid#dd6d11;
      }
    }
  }
}
</style>