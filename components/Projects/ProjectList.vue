<template>
  <section class="projects-list">
    <ProjectPreview
      v-for="(proj, index) in projects"
      :key="proj.id"
      :id="proj.id"
      :thumbnail="proj.thumbnail"
      :title="proj.title"
      :gridAreaName="'p' + ++index"
    />
  </section>
</template>


<script>
import ProjectPreview from "@/components/projects/ProjectPreview";
import { useProjectStore } from '~/store/projects'
export default {
  components: {
    ProjectPreview,
  },
  setup() {
    const projectStore = useProjectStore();
    const projects = projectStore.projects;

    return { projects };
  },
};
</script>

<style lang="scss" scoped>
.projects-list {
  display: grid;
  grid-template-columns: 1fr repeat(6, 240px) 1fr;
  grid-template-rows: repeat(5, 390px);
  // grid-template-rows: repeat(auto-fill, 390px);
  grid-gap: 34px;
  padding-bottom: 3.3vmax;

  // legend:
  // h - half
  // t - third
  // ot - one third
  // tt - two thirds

  // heres how 11 projects are layed out
  // "[h1 h1 h1] [h2 h2 h2]"
  // "[tt1 tt1 tt1 tt1] [ot1 ot1]"
  // "[ot2 ot2] [tt2 tt2 tt2 tt2]"
  // "[h3 h3 h3] [h4 h4 h4]"
  // "[t1 t1] [t1 t2] [t3 t3]"

  grid-template-areas:
    ". p1 p1 p1 p2 p2 p2 ."
    ". p3 p3 p3 p3  p4 p4 ."
    ". p5 p5 p6 p6 p6 p6 ."
    ". p7 p7 p7 p8 p8 p8 ."
    ". p9 p9 p10 p10 p11 p11 .";
}
</style>