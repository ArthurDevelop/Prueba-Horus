const projects = [];
let projectIdCounter = 1;

export const projectResolvers = {
  Query: {
    projects: () => projects.filter(project => project.enabled),
    project: ({ id }) => projects.find(project => project.id === id)
  },
  Mutation: {
    createProject: ({ name, enabled, time_zone }) => {
      const newProject = { id: projectIdCounter++, name, enabled, time_zone };
      projects.push(newProject);
      return newProject;
    },
    updateProject: ({ id, name, enabled, time_zone }) => {
      const projectIndex = projects.findIndex(project => project.id === id);
      if (projectIndex === -1) return null;
      if (name) projects[projectIndex].name = name;
      if (enabled) projects[projectIndex].enabled = enabled;
      if (time_zone) projects[projectIndex].time_zone = time_zone;
      return projects[projectIndex];
    },
    deleteProject: ({ id }) => {
      const projectIndex = projects.findIndex(project => project.id === id);
      if (projectIndex === -1) return false;
      projects[projectIndex].enabled = false; 
      return true;
    }
  }
};