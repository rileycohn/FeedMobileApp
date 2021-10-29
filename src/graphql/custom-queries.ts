export const getProfilePageDetails = /* GraphQL */ `
query GetProfilePageDetails {
  getProfileV3(id: "1") {
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