<template>
  <Title>Daniel Bonner</Title>
  <TheHeader />
  <slot class="app" />
  <TheFooter />
</template>


<script>
import TheHeader from "@/components/navigation/TheHeader";
import TheFooter from "@/components/navigation/TheFooter";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
