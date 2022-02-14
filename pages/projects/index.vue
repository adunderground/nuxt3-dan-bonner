<template>
  <div>
    <Title>DB | Projects </Title>
    <h3>Projects List</h3>
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