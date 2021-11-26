export const getProfilePageDetails = /* GraphQL */ `
query GetProfilePageDetails ($profileID: ID!) {
   
  getProfileV3(id: $profileID) {
    id
    email
    name
    profilePic
    bio
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
    ProfileToFeedTypes {
      items {
        id
        feedName
        FeedTypeToFollowing {
          items {
            profileID
          }
        }
      }
    }
  }
}`