import { defineStore } from "pinia";

const BASE_URL = "https://api.airtable.com/v0/appvW9FuAZLiPyAIZ/projects";
const CONFIG = {
  headers: {
    Authorization: "Bearer keyqeZENw1Pv4W6c6",
  },
};

export const useProjectStore = defineStore({
  id: "project-store",
  state: () => ({
    projects: [],
    //
  }),
  actions: {
    async fetchProjects() {
      // const response = await axios(BASE_URL, CONFIG);
      const data = await $fetch(BASE_URL, CONFIG);
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
