const { User, Technology } = require("../models");

const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({});
    },
    user: async () => {
      return await undefined;
    },
    technologies: async () => {
      return await Technology.find({});
    },
    technology: async () => {
      return await undefined;
    },
    me: async () => {
      return await undefined;
    },
  },

  Mutation: {
    addUser: async () => {
      return await undefined;
    },
    login: async () => {
      return await undefined;
    },
    addRating: async () => {
      return await undefined;
    },
  },
};

module.exports = resolvers;
