<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const colorMode = useColorMode();
</script>

<style lang="scss">
// global color variables
$gray: #f7f7f7;

body {
  padding: 0;
  margin: 0;
  // font-size: 62.5%;
  font-family: "Bodoni Moda", serif;
  font-weight: 300;
  color: #1b1c1e;
}

::selection {
  background-color: #e07015d2;
  color: #303030;
}

html.dark-mode {
  body {
    background-color: #1b1c1e;
    color: white;
  }

  ::selection {
    background-color: #e07015d2;
    color: white;
  }
}
</style>
>
