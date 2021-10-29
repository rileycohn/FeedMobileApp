/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRepostV3 = /* GraphQL */ `
  query GetRepostV3($id: ID!) {
    getRepostV3(id: $id) {
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
export const listRepostV3s = /* GraphQL */ `
  query ListRepostV3s(
    $filter: ModelRepostV3FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRepostV3s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        profileID
        postID
        repostDate
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRepostV3s = /* GraphQL */ `
  query SyncRepostV3s(
    $filter: ModelRepostV3FilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRepostV3s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        profileID
        postID
        repostDate
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCommentV3 = /* GraphQL */ `
  query GetCommentV3($id: ID!) {
    getCommentV3(id: $id) {
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
export const listCommentV3s = /* GraphQL */ `
  query ListCommentV3s(
    $filter: ModelCommentV3FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommentV3s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCommentV3s = /* GraphQL */ `
  query SyncCommentV3s(
    $filter: ModelCommentV3FilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCommentV3s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      }
      nextToken
      startedAt
    }
  }
`;
export const getLikesV3 = /* GraphQL */ `
  query GetLikesV3($id: ID!) {
    getLikesV3(id: $id) {
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
export const listLikesV3s = /* GraphQL */ `
  query ListLikesV3s(
    $filter: ModelLikesV3FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikesV3s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        profileID
        postID
        likeDate
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLikesV3s = /* GraphQL */ `
  query SyncLikesV3s(
    $filter: ModelLikesV3FilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLikesV3s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        profileID
        postID
        likeDate
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getFeedTypeV3 = /* GraphQL */ `
  query GetFeedTypeV3($id: ID!) {
    getFeedTypeV3(id: $id) {
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
export const listFeedTypeV3s = /* GraphQL */ `
  query ListFeedTypeV3s(
    $filter: ModelFeedTypeV3FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFeedTypeV3s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncFeedTypeV3s = /* GraphQL */ `
  query SyncFeedTypeV3s(
    $filter: ModelFeedTypeV3FilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFeedTypeV3s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getFollowingV3 = /* GraphQL */ `
  query GetFollowingV3($id: ID!) {
    getFollowingV3(id: $id) {
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
export const listFollowingV3s = /* GraphQL */ `
  query ListFollowingV3s(
    $filter: ModelFollowingV3FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowingV3s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFollowingV3s = /* GraphQL */ `
  query SyncFollowingV3s(
    $filter: ModelFollowingV3FilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFollowingV3s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      }
      nextToken
      startedAt
    }
  }
`;
export const getPostV3 = /* GraphQL */ `
  query GetPostV3($id: ID!) {
    getPostV3(id: $id) {
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
export const listPostV3s = /* GraphQL */ `
  query ListPostV3s(
    $filter: ModelPostV3FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostV3s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncPostV3s = /* GraphQL */ `
  query SyncPostV3s(
    $filter: ModelPostV3FilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPostV3s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getProfileV3 = /* GraphQL */ `
  query GetProfileV3($id: ID!) {
    getProfileV3(id: $id) {
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
export const listProfileV3s = /* GraphQL */ `
  query ListProfileV3s(
    $filter: ModelProfileV3FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfileV3s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncProfileV3s = /* GraphQL */ `
  query SyncProfileV3s(
    $filter: ModelProfileV3FilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProfileV3s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
