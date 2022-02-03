const { gql } = require("apollo-server-express");

const typeDefs = gql`

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Technology {
    _id: ID
    technology: [TechType]
  }

  type TechType {
    technologyName: String!
    technologyContent: [TechContent]
  }

  type TechContent {
    contentTitle: String!
    contentBody: [ContentBody]
  }

  type ContentBody {
    featureName: String!
    featureRating: Number
    featureBody: FeatureBody
    featureExample: []
    featureReference: []
  }

  type FeatureBody {
    name: String!
    content: []
  }

  type Query {
    users: [User]
    user(username: String!): User
    technologies: [Technology]
    technology(technologyName: String!): Technology
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addRating(featureRating: Number!): Technology
  }
`;

module.exports = typeDefs;
