const { gql } = require("apollo-server-express");

const typeDefs = gql`

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String
  }
  
  type Auth {
    token: ID!
    user: User
  }

  type Technology {
    _id: ID
    technologyName: String
    technologyContent: [TechContent]
  }

  type TechContent {
    contentTitle: String
    contentBody: [ContentBody]
  }

  type ContentBody {
    featureName: String
    featureRating: Int
    featureBody: String
    featureExample: [String]
    featureReference: [String]
  }

  type Query {
    users: [User]
    user(username: String): User
    technologies: [Technology]
    technology(technologyName: String): Technology
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addRating(featureRating: Int!): Technology
  }
`;

module.exports = typeDefs;
