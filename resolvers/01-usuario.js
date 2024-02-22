const User = require('../typeDefs/01-Usuario.js');

export const usuResolv = {
  Query: {
    users: async () => await User.findAll(),
    user: async (_, { id }) => await User.findByPk(id)
  },
  Mutation: {
    createUser: async (_, { username, password }) => {
      const user = await User.create({ username, password });
      return user;
    }
  }
};