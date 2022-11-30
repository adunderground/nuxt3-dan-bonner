<template>
  <section class="project">
    <h2 class="project__title">{{ title }}</h2>
    <article class="project__credits">
      <p>
        My Credits: <span>{{ my_credits }}</span>
      </p>
      <p>
        Production Company: <span>{{ production_company }}</span>
      </p>
      <p>
        Project Year: <span> {{ project_year }}</span>
      </p>
    </article>
    <p v-if="description" class="project__description">
      {{ description }}
    </p>
    <ProjectVideo :videoLink="resourceLink"></ProjectVideo>
    <ProjectNavigation :neighborIds="neighborIds"></ProjectNavigation>
  </section>
</template>

<script>
import { useProjectStore } from "~/store/projects";
import ProjectNavigation from "@/components/project/ProjectNavigation";
import ProjectVideo from "@/components/project/ProjectVideo";

export default {
  components: {
    ProjectNavigation,
    ProjectVideo,
  },
  setup() {
    const projectStore = useProjectStore();
    const route = useRoute();
    const projectID = route.params.id;

    // middleware needed to hydrate projects data on the server
    // in order to load a single project page
    // without navigating to all projects first

    definePageMeta({
      middleware: "hydrate-project",
    });

    const {
      id,
      title,
      my_credits,
      production_company,
      project_year,
      description,
      resourceLink,
      thumbnail,
      has_additional_resources,
      additional_resources,
    } = projectStore.getProjectById(projectID);

    const neighborIds = projectStore.getProjectNeighborIds(projectID);

    return {
      id,
      title,
      my_credits,
      production_company,
      project_year,
      description,
      resourceLink,
      thumbnail,
      has_additional_resources,
      additional_resources,
      neighborIds,
    };
  },
};
</script>

<style lang="scss" scoped>
.project {
  max-width: 100%;
  padding: 3.3vmax 4vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Crimson Pro", serif;

  &__title {
    font-size: 2.2rem;
    font-family: "Bodoni Moda", serif;
    font-weight: 100;
    text-align: center;
    margin: 0;
  }

  &__credits {
    text-align: center;
    font-weight: bold;
    font-style: italic;

    p {
      margin: 0.5rem 2rem;
    }

    span {
      font-weight: normal;
    }
  }

  &__description {
    font-size: 1.2rem;
    margin: 1rem 0;
    padding: 2rem 25%;
  }
}
</style>
