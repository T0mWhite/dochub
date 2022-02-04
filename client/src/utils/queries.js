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

// multiple users
// export const QUERY_ALL_USERS = gql`
//   query user($username: String!) {
//     user(username: $username) {
//       _id
//       username
//       email
//     }
//   }
// `;

export const QUERY_TECHNOLOGIES_SIDEBAR = gql`
  query getTechnologies {
    technologiesArray {
      technologyName
      technologyContent {
        contentTitle
        contentBody {
          featureName
        }
      }
    }
  }
`;

export const QUERY_SINGLE_TECHNOLOGY_MAIN = gql`
  query getSingleTechnology($technologyName: String) {
    technology(technologyName: $technologyName) {
      technologyName
    }
  }
`;

// query getSingleTechnology($technologyName: String) {
//   technology (technologyName: $technologyName) {
//     technologyName
//     technologyContent {
//       contentTitle
//       contentBody{
//         featureName
//         featureRating
//         featureBody
//         featureExample
//         featureReference
//       }
//     }
//   }
// }
