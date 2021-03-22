/* tslint:disable */
/* eslint-disable */

export const getProfilePageDetails = /* GraphQL */ `
    query GetProfilePageDetails {
      getProfile(id: "1") {
        id
        email
        name
        profilePic
        ProfileToPosts(limit: 10) {
          items {
            post
            postDate
            feedTypeID
          }
        }
        ProfileToFollowings {
          items {
            FollowingToProfile {
              id
            }
          }
        }
        ProfileToLikes {
          items {
            id
          }
        }
      }
    }
`;