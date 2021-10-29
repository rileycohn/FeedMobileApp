/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRepostV3 = /* GraphQL */ `
  mutation CreateRepostV3(
    $input: CreateRepostV3Input!
    $condition: ModelRepostV3ConditionInput
  ) {
    createRepostV3(input: $input, condition: $condition) {
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
export const updateRepostV3 = /* GraphQL */ `
  mutation UpdateRepostV3(
    $input: UpdateRepostV3Input!
    $condition: ModelRepostV3ConditionInput
  ) {
    updateRepostV3(input: $input, condition: $condition) {
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
export const deleteRepostV3 = /* GraphQL */ `
  mutation DeleteRepostV3(
    $input: DeleteRepostV3Input!
    $condition: ModelRepostV3ConditionInput
  ) {
    deleteRepostV3(input: $input, condition: $condition) {
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
export const createCommentV3 = /* GraphQL */ `
  mutation CreateCommentV3(
    $input: CreateCommentV3Input!
    $condition: ModelCommentV3ConditionInput
  ) {
    createCommentV3(input: $input, condition: $condition) {
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
export const updateCommentV3 = /* GraphQL */ `
  mutation UpdateCommentV3(
    $input: UpdateCommentV3Input!
    $condition: ModelCommentV3ConditionInput
  ) {
    updateCommentV3(input: $input, condition: $condition) {
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
export const deleteCommentV3 = /* GraphQL */ `
  mutation DeleteCommentV3(
    $input: DeleteCommentV3Input!
    $condition: ModelCommentV3ConditionInput
  ) {
    deleteCommentV3(input: $input, condition: $condition) {
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
export const createLikesV3 = /* GraphQL */ `
  mutation CreateLikesV3(
    $input: CreateLikesV3Input!
    $condition: ModelLikesV3ConditionInput
  ) {
    createLikesV3(input: $input, condition: $condition) {
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
export const updateLikesV3 = /* GraphQL */ `
  mutation UpdateLikesV3(
    $input: UpdateLikesV3Input!
    $condition: ModelLikesV3ConditionInput
  ) {
    updateLikesV3(input: $input, condition: $condition) {
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
export const deleteLikesV3 = /* GraphQL */ `
  mutation DeleteLikesV3(
    $input: DeleteLikesV3Input!
    $condition: ModelLikesV3ConditionInput
  ) {
    deleteLikesV3(input: $input, condition: $condition) {
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      FeedTypeToFollowing {
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      FeedTypeToFollowing {
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      FeedTypeToFollowing {
        nextToken
        startedAt
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
export const createFollowingV3 = /* GraphQL */ `
  mutation CreateFollowingV3(
    $input: CreateFollowingV3Input!
    $condition: ModelFollowingV3ConditionInput
  ) {
    createFollowingV3(input: $input, condition: $condition) {
      id
      profileID
      feedTypeID
      followingDate
      followsAll
      feedtype2ID
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
export const updateFollowingV3 = /* GraphQL */ `
  mutation UpdateFollowingV3(
    $input: UpdateFollowingV3Input!
    $condition: ModelFollowingV3ConditionInput
  ) {
    updateFollowingV3(input: $input, condition: $condition) {
      id
      profileID
      feedTypeID
      followingDate
      followsAll
      feedtype2ID
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
export const deleteFollowingV3 = /* GraphQL */ `
  mutation DeleteFollowingV3(
    $input: DeleteFollowingV3Input!
    $condition: ModelFollowingV3ConditionInput
  ) {
    deleteFollowingV3(input: $input, condition: $condition) {
      id
      profileID
      feedTypeID
      followingDate
      followsAll
      feedtype2ID
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
export const createPostV3 = /* GraphQL */ `
  mutation CreatePostV3(
    $input: CreatePostV3Input!
    $condition: ModelPostV3ConditionInput
  ) {
    createPostV3(input: $input, condition: $condition) {
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
        feedName
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
export const updatePostV3 = /* GraphQL */ `
  mutation UpdatePostV3(
    $input: UpdatePostV3Input!
    $condition: ModelPostV3ConditionInput
  ) {
    updatePostV3(input: $input, condition: $condition) {
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
        feedName
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
export const deletePostV3 = /* GraphQL */ `
  mutation DeletePostV3(
    $input: DeletePostV3Input!
    $condition: ModelPostV3ConditionInput
  ) {
    deletePostV3(input: $input, condition: $condition) {
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
        feedName
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
export const createProfileV3 = /* GraphQL */ `
  mutation CreateProfileV3(
    $input: CreateProfileV3Input!
    $condition: ModelProfileV3ConditionInput
  ) {
    createProfileV3(input: $input, condition: $condition) {
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
export const updateProfileV3 = /* GraphQL */ `
  mutation UpdateProfileV3(
    $input: UpdateProfileV3Input!
    $condition: ModelProfileV3ConditionInput
  ) {
    updateProfileV3(input: $input, condition: $condition) {
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
export const deleteProfileV3 = /* GraphQL */ `
  mutation DeleteProfileV3(
    $input: DeleteProfileV3Input!
    $condition: ModelProfileV3ConditionInput
  ) {
    deleteProfileV3(input: $input, condition: $condition) {
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
