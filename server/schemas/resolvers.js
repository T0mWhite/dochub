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
    technologies: async () => {
      return await Technology.find({});
    },
    technology: async (parent, {technologyName}, context) => {
      const technology =  await Technology.findOne({technologyName});
        console.log(technologyName);
        console.log(technology);
        return technology;
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
