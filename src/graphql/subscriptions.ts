/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRepost = /* GraphQL */ `
  subscription OnCreateRepost {
    onCreateRepost {
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
export const onUpdateRepost = /* GraphQL */ `
  subscription OnUpdateRepost {
    onUpdateRepost {
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
export const onDeleteRepost = /* GraphQL */ `
  subscription OnDeleteRepost {
    onDeleteRepost {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateLikes = /* GraphQL */ `
  subscription OnCreateLikes {
    onCreateLikes {
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
export const onUpdateLikes = /* GraphQL */ `
  subscription OnUpdateLikes {
    onUpdateLikes {
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
export const onDeleteLikes = /* GraphQL */ `
  subscription OnDeleteLikes {
    onDeleteLikes {
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
export const onCreateFeedType = /* GraphQL */ `
  subscription OnCreateFeedType {
    onCreateFeedType {
      id
      profileID
      followingID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      FeedTypeToFollowing {
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
export const onUpdateFeedType = /* GraphQL */ `
  subscription OnUpdateFeedType {
    onUpdateFeedType {
      id
      profileID
      followingID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      FeedTypeToFollowing {
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
export const onDeleteFeedType = /* GraphQL */ `
  subscription OnDeleteFeedType {
    onDeleteFeedType {
      id
      profileID
      followingID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      FeedTypeToFollowing {
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
export const onCreateFollowing = /* GraphQL */ `
  subscription OnCreateFollowing {
    onCreateFollowing {
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
export const onUpdateFollowing = /* GraphQL */ `
  subscription OnUpdateFollowing {
    onUpdateFollowing {
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
export const onDeleteFollowing = /* GraphQL */ `
  subscription OnDeleteFollowing {
    onDeleteFollowing {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile {
    onCreateProfile {
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
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile {
    onUpdateProfile {
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
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile {
    onDeleteProfile {
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
