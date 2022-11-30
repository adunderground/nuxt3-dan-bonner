// makes a fetch projects request only if
// the nuxt app does not already have projects in store
// happens when a single project is requested
// by direct url request

import { useProjectStore } from "~/store/projects.js";

export default defineNuxtRouteMiddleware(async () => {
  const projectStore = useProjectStore();
  if (!projectStore.projects.length) {
    await projectStore.fetchProjects();
  }
});
