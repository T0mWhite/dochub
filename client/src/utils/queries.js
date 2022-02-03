import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_TECHNOLOGIES = gql`
  query getTechnologies {
    technology {
      _id
      technologyName
      technologyContent {
        _id
        contentTitle
        contentBody {
          featureName
        }
      }
    }
  }
`;

export const QUERY_SINGLE_TECHNOLOGY = gql`
  query getSingleTechnology($technologyName: String!) {
    technology {
      _id
      technologyName
      technologyContent {
        _id
        contentTitle
        contentBody {
          featureName
          featureRating
          featureBody {
            name
            content
          }
          featureExample
          featureReference
      }
    }
  }
`;
