<template>
  <div>
    <Title>Daniel Bonner | Projects</Title>
    <h3 class="title">Projects List</h3>
    <ProjectList />
  </div>
</template>

<script>
import ProjectList from "@/components/projects/ProjectList";

export default {
  components: {
    ProjectList,
  },
};
</script>

<style lang="scss" scoped>
.title {
  padding: 3.3vmax 4vw;
  font-size: 2rem;
  font-weight: 100;
  margin: 0;
}
</style>