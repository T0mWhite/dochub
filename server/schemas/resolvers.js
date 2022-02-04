const { User, Technology } = require("../models");

const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    
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
    addUser: async (parent, args) => {

      console.log('cucumber');
      
      console.log(args);

      const user = await User.create(args);
      const token = signToken(user);

      console.log(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    addRating: async () => {
      return await undefined;
    },
  },
};

module.exports = resolvers;
