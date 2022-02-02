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
    featureBody: FeatureBody
    featureExample: [],
    featureReference: []
  }

  type FeatureBody {
    name: String!
    content: []
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
  }

  type Mutation {
    addProfile(name: String!): Profile
    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile(profileId: ID!): Profile
    removeSkill(profileId: ID!, skill: String!): Profile
  }
`;

module.exports = typeDefs;
