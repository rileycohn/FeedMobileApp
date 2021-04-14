/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

<<<<<<< HEAD
export const createRepostV3 = /* GraphQL */ `
  mutation CreateRepostV3(
    $input: CreateRepostV3Input!
    $condition: ModelRepostV3ConditionInput
  ) {
    createRepostV3(input: $input, condition: $condition) {
=======
export const createRepost = /* GraphQL */ `
  mutation CreateRepost(
    $input: CreateRepostInput!
    $condition: ModelRepostConditionInput
  ) {
    createRepost(input: $input, condition: $condition) {
>>>>>>> 11b0e76 (trying the commit again)
      id
      profileID
      postID
      repostDate
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      RepostToPost {
        id
        profileID
        feedTypeID
        postDate
        tags
        post
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      RepostToProfile {
        id
        name
        phoneNum
        email
        profilePic
        dob
        profileDate
        bio
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
<<<<<<< HEAD
export const updateRepostV3 = /* GraphQL */ `
  mutation UpdateRepostV3(
    $input: UpdateRepostV3Input!
    $condition: ModelRepostV3ConditionInput
  ) {
    updateRepostV3(input: $input, condition: $condition) {
=======
export const updateRepost = /* GraphQL */ `
  mutation UpdateRepost(
    $input: UpdateRepostInput!
    $condition: ModelRepostConditionInput
  ) {
    updateRepost(input: $input, condition: $condition) {
>>>>>>> 11b0e76 (trying the commit again)
      id
      profileID
      postID
      repostDate
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      RepostToPost {
        id
        profileID
        feedTypeID
        postDate
        tags
        post
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      RepostToProfile {
        id
        name
        phoneNum
        email
        profilePic
        dob
        profileDate
        bio
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
<<<<<<< HEAD
export const deleteRepostV3 = /* GraphQL */ `
  mutation DeleteRepostV3(
    $input: DeleteRepostV3Input!
    $condition: ModelRepostV3ConditionInput
  ) {
    deleteRepostV3(input: $input, condition: $condition) {
=======
export const deleteRepost = /* GraphQL */ `
  mutation DeleteRepost(
    $input: DeleteRepostInput!
    $condition: ModelRepostConditionInput
  ) {
    deleteRepost(input: $input, condition: $condition) {
>>>>>>> 11b0e76 (trying the commit again)
      id
      profileID
      postID
      repostDate
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      RepostToPost {
        id
        profileID
        feedTypeID
        postDate
        tags
        post
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      RepostToProfile {
        id
        name
        phoneNum
        email
        profilePic
        dob
        profileDate
        bio
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
<<<<<<< HEAD
export const createCommentV3 = /* GraphQL */ `
  mutation CreateCommentV3(
    $input: CreateCommentV3Input!
    $condition: ModelCommentV3ConditionInput
  ) {
    createCommentV3(input: $input, condition: $condition) {
=======
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
>>>>>>> 11b0e76 (trying the commit again)
      id
      profileID
      postID
      comment
      commentDate
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      CommentToPost {
        id
        profileID
        feedTypeID
        postDate
        tags
        post
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      CommentToProfile {
        id
        name
        phoneNum
        email
        profilePic
        dob
        profileDate
        bio
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
<<<<<<< HEAD
export const updateCommentV3 = /* GraphQL */ `
  mutation UpdateCommentV3(
    $input: UpdateCommentV3Input!
    $condition: ModelCommentV3ConditionInput
  ) {
    updateCommentV3(input: $input, condition: $condition) {
=======
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
>>>>>>> 11b0e76 (trying the commit again)
      id
      profileID
      postID
      comment
      commentDate
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      CommentToPost {
        id
        profileID
        feedTypeID
        postDate
        tags
        post
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      CommentToProfile {
        id
        name
        phoneNum
        email
        profilePic
        dob
        profileDate
        bio
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
<<<<<<< HEAD
export const deleteCommentV3 = /* GraphQL */ `
  mutation DeleteCommentV3(
    $input: DeleteCommentV3Input!
    $condition: ModelCommentV3ConditionInput
  ) {
    deleteCommentV3(input: $input, condition: $condition) {
=======
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
>>>>>>> 11b0e76 (trying the commit again)
      id
      profileID
      postID
      comment
      commentDate
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      CommentToPost {
        id
        profileID
        feedTypeID
        postDate
        tags
        post
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      CommentToProfile {
        id
        name
        phoneNum
        email
        profilePic
        dob
        profileDate
        bio
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
<<<<<<< HEAD
export const createLikesV3 = /* GraphQL */ `
  mutation CreateLikesV3(
    $input: CreateLikesV3Input!
    $condition: ModelLikesV3ConditionInput
  ) {
    createLikesV3(input: $input, condition: $condition) {
=======
export const createLikes = /* GraphQL */ `
  mutation CreateLikes(
    $input: CreateLikesInput!
    $condition: ModelLikesConditionInput
  ) {
    createLikes(input: $input, condition: $condition) {
>>>>>>> 11b0e76 (trying the commit again)
      id
      profileID
      postID
      likeDate
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      LikeToPost {
        id
        profileID
        feedTypeID
        postDate
        tags
        post
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      LikeToProfile {
        id
        name
        phoneNum
        email
        profilePic
        dob
        profileDate
        bio
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
<<<<<<< HEAD
export const updateLikesV3 = /* GraphQL */ `
  mutation UpdateLikesV3(
    $input: UpdateLikesV3Input!
    $condition: ModelLikesV3ConditionInput
  ) {
    updateLikesV3(input: $input, condition: $condition) {
=======
export const updateLikes = /* GraphQL */ `
  mutation UpdateLikes(
    $input: UpdateLikesInput!
    $condition: ModelLikesConditionInput
  ) {
    updateLikes(input: $input, condition: $condition) {
>>>>>>> 11b0e76 (trying the commit again)
      id
      profileID
      postID
      likeDate
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      LikeToPost {
        id
        profileID
        feedTypeID
        postDate
        tags
        post
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      LikeToProfile {
        id
        name
        phoneNum
        email
        profilePic
        dob
        profileDate
        bio
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
<<<<<<< HEAD
export const deleteLikesV3 = /* GraphQL */ `
  mutation DeleteLikesV3(
    $input: DeleteLikesV3Input!
    $condition: ModelLikesV3ConditionInput
  ) {
    deleteLikesV3(input: $input, condition: $condition) {
=======
export const deleteLikes = /* GraphQL */ `
  mutation DeleteLikes(
    $input: DeleteLikesInput!
    $condition: ModelLikesConditionInput
  ) {
    deleteLikes(input: $input, condition: $condition) {
>>>>>>> 11b0e76 (trying the commit again)
      id
      profileID
      postID
      likeDate
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      LikeToPost {
        id
        profileID
        feedTypeID
        postDate
        tags
        post
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      LikeToProfile {
        id
        name
        phoneNum
        email
        profilePic
        dob
        profileDate
        bio
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
<<<<<<< HEAD
export const createFeedTypeV3 = /* GraphQL */ `
  mutation CreateFeedTypeV3(
    $input: CreateFeedTypeV3Input!
    $condition: ModelFeedTypeV3ConditionInput
  ) {
    createFeedTypeV3(input: $input, condition: $condition) {
      id
      profileID
      followingID
      feedName
=======
export const createFeedType = /* GraphQL */ `
  mutation CreateFeedType(
    $input: CreateFeedTypeInput!
    $condition: ModelFeedTypeConditionInput
  ) {
    createFeedType(input: $input, condition: $condition) {
      id
      profileID
      followingID
>>>>>>> 11b0e76 (trying the commit again)
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      FeedTypeToFollowing {
<<<<<<< HEAD
        nextToken
        startedAt
=======
        id
        profileID
        feedTypeID
        followingDate
        followsAll
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
>>>>>>> 11b0e76 (trying the commit again)
      }
      FeedTypeToPost {
        id
        profileID
        feedTypeID
        postDate
        tags
        post
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      FeedTypeToProfile {
        id
        name
        phoneNum
        email
        profilePic
        dob
        profileDate
        bio
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
<<<<<<< HEAD
export const updateFeedTypeV3 = /* GraphQL */ `
  mutation UpdateFeedTypeV3(
    $input: UpdateFeedTypeV3Input!
    $condition: ModelFeedTypeV3ConditionInput
  ) {
    updateFeedTypeV3(input: $input, condition: $condition) {
      id
      profileID
      followingID
      feedName
=======
export const updateFeedType = /* GraphQL */ `
  mutation UpdateFeedType(
    $input: UpdateFeedTypeInput!
    $condition: ModelFeedTypeConditionInput
  ) {
    updateFeedType(input: $input, condition: $condition) {
      id
      profileID
      followingID
>>>>>>> 11b0e76 (trying the commit again)
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      FeedTypeToFollowing {
<<<<<<< HEAD
        nextToken
        startedAt
=======
        id
        profileID
        feedTypeID
        followingDate
        followsAll
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
>>>>>>> 11b0e76 (trying the commit again)
      }
      FeedTypeToPost {
        id
        profileID
        feedTypeID
        postDate
        tags
        post
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      FeedTypeToProfile {
        id
        name
        phoneNum
        email
        profilePic
        dob
        profileDate
        bio
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
<<<<<<< HEAD
export const deleteFeedTypeV3 = /* GraphQL */ `
  mutation DeleteFeedTypeV3(
    $input: DeleteFeedTypeV3Input!
    $condition: ModelFeedTypeV3ConditionInput
  ) {
    deleteFeedTypeV3(input: $input, condition: $condition) {
      id
      profileID
      followingID
      feedName
=======
export const deleteFeedType = /* GraphQL */ `
  mutation DeleteFeedType(
    $input: DeleteFeedTypeInput!
    $condition: ModelFeedTypeConditionInput
  ) {
    deleteFeedType(input: $input, condition: $condition) {
      id
      profileID
      followingID
>>>>>>> 11b0e76 (trying the commit again)
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      FeedTypeToFollowing {
<<<<<<< HEAD
        nextToken
        startedAt
=======
        id
        profileID
        feedTypeID
        followingDate
        followsAll
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
>>>>>>> 11b0e76 (trying the commit again)
      }
      FeedTypeToPost {
        id
        profileID
        feedTypeID
        postDate
        tags
        post
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      FeedTypeToProfile {
        id
        name
        phoneNum
        email
        profilePic
        dob
        profileDate
        bio
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
<<<<<<< HEAD
export const createFollowingV3 = /* GraphQL */ `
  mutation CreateFollowingV3(
    $input: CreateFollowingV3Input!
    $condition: ModelFollowingV3ConditionInput
  ) {
    createFollowingV3(input: $input, condition: $condition) {
=======
export const createFollowing = /* GraphQL */ `
  mutation CreateFollowing(
    $input: CreateFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    createFollowing(input: $input, condition: $condition) {
>>>>>>> 11b0e76 (trying the commit again)
      id
      profileID
      feedTypeID
      followingDate
      followsAll
<<<<<<< HEAD
      feedtype2ID
=======
>>>>>>> 11b0e76 (trying the commit again)
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      FollowingToFeedTypes {
        nextToken
        startedAt
      }
      FollowingToProfile {
        id
        name
        phoneNum
        email
        profilePic
        dob
        profileDate
        bio
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
<<<<<<< HEAD
export const updateFollowingV3 = /* GraphQL */ `
  mutation UpdateFollowingV3(
    $input: UpdateFollowingV3Input!
    $condition: ModelFollowingV3ConditionInput
  ) {
    updateFollowingV3(input: $input, condition: $condition) {
=======
export const updateFollowing = /* GraphQL */ `
  mutation UpdateFollowing(
    $input: UpdateFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    updateFollowing(input: $input, condition: $condition) {
>>>>>>> 11b0e76 (trying the commit again)
      id
      profileID
      feedTypeID
      followingDate
      followsAll
<<<<<<< HEAD
      feedtype2ID
=======
>>>>>>> 11b0e76 (trying the commit again)
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      FollowingToFeedTypes {
        nextToken
        startedAt
      }
      FollowingToProfile {
        id
        name
        phoneNum
        email
        profilePic
        dob
        profileDate
        bio
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
<<<<<<< HEAD
export const deleteFollowingV3 = /* GraphQL */ `
  mutation DeleteFollowingV3(
    $input: DeleteFollowingV3Input!
    $condition: ModelFollowingV3ConditionInput
  ) {
    deleteFollowingV3(input: $input, condition: $condition) {
=======
export const deleteFollowing = /* GraphQL */ `
  mutation DeleteFollowing(
    $input: DeleteFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    deleteFollowing(input: $input, condition: $condition) {
>>>>>>> 11b0e76 (trying the commit again)
      id
      profileID
      feedTypeID
      followingDate
      followsAll
<<<<<<< HEAD
      feedtype2ID
=======
>>>>>>> 11b0e76 (trying the commit again)
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      FollowingToFeedTypes {
        nextToken
        startedAt
      }
      FollowingToProfile {
        id
        name
        phoneNum
        email
        profilePic
        dob
        profileDate
        bio
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
<<<<<<< HEAD
export const createPostV3 = /* GraphQL */ `
  mutation CreatePostV3(
    $input: CreatePostV3Input!
    $condition: ModelPostV3ConditionInput
  ) {
    createPostV3(input: $input, condition: $condition) {
=======
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
>>>>>>> 11b0e76 (trying the commit again)
      id
      profileID
      feedTypeID
      postDate
      tags
      post
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      PostToReposts {
        nextToken
        startedAt
      }
      PostToComments {
        nextToken
        startedAt
      }
      PostToLikes {
        nextToken
        startedAt
      }
      PostToFeedType {
        id
        profileID
        followingID
<<<<<<< HEAD
        feedName
=======
>>>>>>> 11b0e76 (trying the commit again)
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      PostToProfile {
        id
        name
        phoneNum
        email
        profilePic
        dob
        profileDate
        bio
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
<<<<<<< HEAD
export const updatePostV3 = /* GraphQL */ `
  mutation UpdatePostV3(
    $input: UpdatePostV3Input!
    $condition: ModelPostV3ConditionInput
  ) {
    updatePostV3(input: $input, condition: $condition) {
=======
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
>>>>>>> 11b0e76 (trying the commit again)
      id
      profileID
      feedTypeID
      postDate
      tags
      post
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      PostToReposts {
        nextToken
        startedAt
      }
      PostToComments {
        nextToken
        startedAt
      }
      PostToLikes {
        nextToken
        startedAt
      }
      PostToFeedType {
        id
        profileID
        followingID
<<<<<<< HEAD
        feedName
=======
>>>>>>> 11b0e76 (trying the commit again)
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      PostToProfile {
        id
        name
        phoneNum
        email
        profilePic
        dob
        profileDate
        bio
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
<<<<<<< HEAD
export const deletePostV3 = /* GraphQL */ `
  mutation DeletePostV3(
    $input: DeletePostV3Input!
    $condition: ModelPostV3ConditionInput
  ) {
    deletePostV3(input: $input, condition: $condition) {
=======
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
>>>>>>> 11b0e76 (trying the commit again)
      id
      profileID
      feedTypeID
      postDate
      tags
      post
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      PostToReposts {
        nextToken
        startedAt
      }
      PostToComments {
        nextToken
        startedAt
      }
      PostToLikes {
        nextToken
        startedAt
      }
      PostToFeedType {
        id
        profileID
        followingID
<<<<<<< HEAD
        feedName
=======
>>>>>>> 11b0e76 (trying the commit again)
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      PostToProfile {
        id
        name
        phoneNum
        email
        profilePic
        dob
        profileDate
        bio
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
<<<<<<< HEAD
export const createProfileV3 = /* GraphQL */ `
  mutation CreateProfileV3(
    $input: CreateProfileV3Input!
    $condition: ModelProfileV3ConditionInput
  ) {
    createProfileV3(input: $input, condition: $condition) {
=======
export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
>>>>>>> 11b0e76 (trying the commit again)
      id
      name
      phoneNum
      email
      profilePic
      dob
      profileDate
      bio
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      ProfileToReposts {
        nextToken
        startedAt
      }
      ProfileToComments {
        nextToken
        startedAt
      }
      ProfileToLikes {
        nextToken
        startedAt
      }
      ProfileToFeedTypes {
        nextToken
        startedAt
      }
      ProfileToFollowings {
        nextToken
        startedAt
      }
      ProfileToPosts {
        nextToken
        startedAt
      }
    }
  }
`;
<<<<<<< HEAD
export const updateProfileV3 = /* GraphQL */ `
  mutation UpdateProfileV3(
    $input: UpdateProfileV3Input!
    $condition: ModelProfileV3ConditionInput
  ) {
    updateProfileV3(input: $input, condition: $condition) {
=======
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
>>>>>>> 11b0e76 (trying the commit again)
      id
      name
      phoneNum
      email
      profilePic
      dob
      profileDate
      bio
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      ProfileToReposts {
        nextToken
        startedAt
      }
      ProfileToComments {
        nextToken
        startedAt
      }
      ProfileToLikes {
        nextToken
        startedAt
      }
      ProfileToFeedTypes {
        nextToken
        startedAt
      }
      ProfileToFollowings {
        nextToken
        startedAt
      }
      ProfileToPosts {
        nextToken
        startedAt
      }
    }
  }
`;
<<<<<<< HEAD
export const deleteProfileV3 = /* GraphQL */ `
  mutation DeleteProfileV3(
    $input: DeleteProfileV3Input!
    $condition: ModelProfileV3ConditionInput
  ) {
    deleteProfileV3(input: $input, condition: $condition) {
=======
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
>>>>>>> 11b0e76 (trying the commit again)
      id
      name
      phoneNum
      email
      profilePic
      dob
      profileDate
      bio
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      ProfileToReposts {
        nextToken
        startedAt
      }
      ProfileToComments {
        nextToken
        startedAt
      }
      ProfileToLikes {
        nextToken
        startedAt
      }
      ProfileToFeedTypes {
        nextToken
        startedAt
      }
      ProfileToFollowings {
        nextToken
        startedAt
      }
      ProfileToPosts {
        nextToken
        startedAt
      }
    }
  }
`;
