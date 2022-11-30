import { defineStore } from "pinia";

export const useProjectStore = defineStore({
  id: "project-store",
  state: () => ({
    projects: [],
    //
  }),
  actions: {
    async fetchProjects() {
      // these helped to figure out how to use the env variables in nuxt config and then in pinia store

      // https://nuxt.com/docs/api/composables/use-runtime-config#useruntimeconfig
      // https://github.com/nuxt/framework/discussions/3726
      // https://stackoverflow.com/questions/72178590/environment-variables-in-nuxt-3-with-pinia

      // the final solution was to call the useRuntimeConfig() inside the fetchProjects action
      const { airtableToken, airtableURL } = useRuntimeConfig();

      const CONFIG = {
        headers: {
          Authorization: `Bearer ${airtableToken}`,
        },
      };

      // instead of axios using the build in $fetch method
      // const response = await axios(BASE_URL, CONFIG);

      const data = await $fetch(airtableURL, CONFIG);
      const projects = data.records.map((record) => record.fields);
      this.projects = projects;
    },
  },
  getters: {
    getProjectById(state) {
      return (projectID) =>
        state.projects.find((proj) => proj.id === projectID);
    },
    getProjectNeighborIds(state) {
      return (projectID) => {
        const project = state.projects.find((proj) => proj.id === projectID);
        const index = state.projects.indexOf(project);

        const neighborIds = {
          previous: index === 0 ? null : state.projects[index - 1].id,
          next:
            index === state.projects.length - 1
              ? null
              : state.projects[index + 1].id,
        };

        return neighborIds;
      };
    },
  },
});
