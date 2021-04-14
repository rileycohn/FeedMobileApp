/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

<<<<<<< HEAD
export const getRepostV3 = /* GraphQL */ `
  query GetRepostV3($id: ID!) {
    getRepostV3(id: $id) {
=======
export const getRepost = /* GraphQL */ `
  query GetRepost($id: ID!) {
    getRepost(id: $id) {
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
export const listRepostV3s = /* GraphQL */ `
  query ListRepostV3s(
    $filter: ModelRepostV3FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRepostV3s(filter: $filter, limit: $limit, nextToken: $nextToken) {
=======
export const listReposts = /* GraphQL */ `
  query ListReposts(
    $filter: ModelRepostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReposts(filter: $filter, limit: $limit, nextToken: $nextToken) {
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
export const syncRepostV3s = /* GraphQL */ `
  query SyncRepostV3s(
    $filter: ModelRepostV3FilterInput
=======
export const syncReposts = /* GraphQL */ `
  query SyncReposts(
    $filter: ModelRepostFilterInput
>>>>>>> 11b0e76 (trying the commit again)
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
<<<<<<< HEAD
    syncRepostV3s(
=======
    syncReposts(
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
export const getCommentV3 = /* GraphQL */ `
  query GetCommentV3($id: ID!) {
    getCommentV3(id: $id) {
=======
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listCommentV3s = /* GraphQL */ `
  query ListCommentV3s(
    $filter: ModelCommentV3FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommentV3s(filter: $filter, limit: $limit, nextToken: $nextToken) {
=======
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
export const syncCommentV3s = /* GraphQL */ `
  query SyncCommentV3s(
    $filter: ModelCommentV3FilterInput
=======
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentFilterInput
>>>>>>> 11b0e76 (trying the commit again)
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
<<<<<<< HEAD
    syncCommentV3s(
=======
    syncComments(
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
export const getLikesV3 = /* GraphQL */ `
  query GetLikesV3($id: ID!) {
    getLikesV3(id: $id) {
=======
export const getLikes = /* GraphQL */ `
  query GetLikes($id: ID!) {
    getLikes(id: $id) {
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
export const listLikesV3s = /* GraphQL */ `
  query ListLikesV3s(
    $filter: ModelLikesV3FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikesV3s(filter: $filter, limit: $limit, nextToken: $nextToken) {
=======
export const listLikess = /* GraphQL */ `
  query ListLikess(
    $filter: ModelLikesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikess(filter: $filter, limit: $limit, nextToken: $nextToken) {
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
export const syncLikesV3s = /* GraphQL */ `
  query SyncLikesV3s(
    $filter: ModelLikesV3FilterInput
=======
export const syncLikes = /* GraphQL */ `
  query SyncLikes(
    $filter: ModelLikesFilterInput
>>>>>>> 11b0e76 (trying the commit again)
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
<<<<<<< HEAD
    syncLikesV3s(
=======
    syncLikes(
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
export const getFeedTypeV3 = /* GraphQL */ `
  query GetFeedTypeV3($id: ID!) {
    getFeedTypeV3(id: $id) {
      id
      profileID
      followingID
      feedName
=======
export const getFeedType = /* GraphQL */ `
  query GetFeedType($id: ID!) {
    getFeedType(id: $id) {
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
export const listFeedTypeV3s = /* GraphQL */ `
  query ListFeedTypeV3s(
    $filter: ModelFeedTypeV3FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFeedTypeV3s(filter: $filter, limit: $limit, nextToken: $nextToken) {
=======
export const listFeedTypes = /* GraphQL */ `
  query ListFeedTypes(
    $filter: ModelFeedTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFeedTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
>>>>>>> 11b0e76 (trying the commit again)
      items {
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
      nextToken
      startedAt
    }
  }
`;
<<<<<<< HEAD
export const syncFeedTypeV3s = /* GraphQL */ `
  query SyncFeedTypeV3s(
    $filter: ModelFeedTypeV3FilterInput
=======
export const syncFeedTypes = /* GraphQL */ `
  query SyncFeedTypes(
    $filter: ModelFeedTypeFilterInput
>>>>>>> 11b0e76 (trying the commit again)
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
<<<<<<< HEAD
    syncFeedTypeV3s(
=======
    syncFeedTypes(
>>>>>>> 11b0e76 (trying the commit again)
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
<<<<<<< HEAD
export const getFollowingV3 = /* GraphQL */ `
  query GetFollowingV3($id: ID!) {
    getFollowingV3(id: $id) {
=======
export const getFollowing = /* GraphQL */ `
  query GetFollowing($id: ID!) {
    getFollowing(id: $id) {
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
export const listFollowingV3s = /* GraphQL */ `
  query ListFollowingV3s(
    $filter: ModelFollowingV3FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowingV3s(filter: $filter, limit: $limit, nextToken: $nextToken) {
=======
export const listFollowings = /* GraphQL */ `
  query ListFollowings(
    $filter: ModelFollowingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowings(filter: $filter, limit: $limit, nextToken: $nextToken) {
>>>>>>> 11b0e76 (trying the commit again)
      items {
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
      }
      nextToken
      startedAt
    }
  }
`;
<<<<<<< HEAD
export const syncFollowingV3s = /* GraphQL */ `
  query SyncFollowingV3s(
    $filter: ModelFollowingV3FilterInput
=======
export const syncFollowings = /* GraphQL */ `
  query SyncFollowings(
    $filter: ModelFollowingFilterInput
>>>>>>> 11b0e76 (trying the commit again)
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
<<<<<<< HEAD
    syncFollowingV3s(
=======
    syncFollowings(
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
        feedtype2ID
=======
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
export const getPostV3 = /* GraphQL */ `
  query GetPostV3($id: ID!) {
    getPostV3(id: $id) {
=======
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPostV3s = /* GraphQL */ `
  query ListPostV3s(
    $filter: ModelPostV3FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostV3s(filter: $filter, limit: $limit, nextToken: $nextToken) {
=======
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
export const syncPostV3s = /* GraphQL */ `
  query SyncPostV3s(
    $filter: ModelPostV3FilterInput
=======
export const syncPosts = /* GraphQL */ `
  query SyncPosts(
    $filter: ModelPostFilterInput
>>>>>>> 11b0e76 (trying the commit again)
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
<<<<<<< HEAD
    syncPostV3s(
=======
    syncPosts(
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
export const getProfileV3 = /* GraphQL */ `
  query GetProfileV3($id: ID!) {
    getProfileV3(id: $id) {
=======
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
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
=======
export const syncProfiles = /* GraphQL */ `
  query SyncProfiles(
    $filter: ModelProfileFilterInput
>>>>>>> 11b0e76 (trying the commit again)
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
<<<<<<< HEAD
    syncProfileV3s(
=======
    syncProfiles(
>>>>>>> 11b0e76 (trying the commit again)
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
