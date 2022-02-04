const { User, Technology } = require("../models");

const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // user: async (parent, args, context) => {
    //   if (context.user) {
    //     const user = await User.findById(context.user._id);
    //     return user;
    //   }
    // },
    getUser: async (parent, { _id }, context) => {
      const user = await User.findById(_id);
      return user;
    },

    // Get all technologies for the sidebar
    technologiesArray: async () => {
      return await Technology.find({});
    },

    // Get single technology for the main view page
    technology: async (parent, { technologyName }, context) => {
      const technology = await Technology.findOne({ technologyName });
      console.log(technologyName);
      console.log(technology);
      return technology;
    },
  },
  Mutation: {
    addUser: async () => {
      return await undefined;
    },
    login: async (parent, { email, password }) => {
      return await User.findOne({ email });
    },
    addRating: async () => {
      return await undefined;
    },
  },
};

module.exports = resolvers;
