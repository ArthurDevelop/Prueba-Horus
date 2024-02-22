const devices = [];
let deviceIdCounter = 1;

export const DispoResolver = {
  Query: {
    devices: ({ projectId }) => devices.filter(device => device.project.id === projectId && device.visible)
  },
  Mutation: {
    createDevice: ({ projectId, deviceInput }) => {
      const newDevice = { id: deviceIdCounter++, ...deviceInput, project: { id: projectId } };
      devices.push(newDevice);
      return newDevice;
    },
    updateDevice: ({ id, deviceInput }) => {
      const deviceIndex = devices.findIndex(device => device.id === id);
      if (deviceIndex === -1) return null;
      devices[deviceIndex] = { ...devices[deviceIndex], ...deviceInput };
      return devices[deviceIndex];
    },
    deleteDevice: ({ id }) => {
      const deviceIndex = devices.findIndex(device => device.id === id);
      if (deviceIndex === -1) return false;
      devices[deviceIndex].visible = false; 
      return true;
    }
  }
};