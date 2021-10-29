/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRepostV3 = /* GraphQL */ `
  subscription OnCreateRepostV3 {
    onCreateRepostV3 {
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
export const onUpdateRepostV3 = /* GraphQL */ `
  subscription OnUpdateRepostV3 {
    onUpdateRepostV3 {
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
export const onDeleteRepostV3 = /* GraphQL */ `
  subscription OnDeleteRepostV3 {
    onDeleteRepostV3 {
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
export const onCreateCommentV3 = /* GraphQL */ `
  subscription OnCreateCommentV3 {
    onCreateCommentV3 {
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
export const onUpdateCommentV3 = /* GraphQL */ `
  subscription OnUpdateCommentV3 {
    onUpdateCommentV3 {
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
export const onDeleteCommentV3 = /* GraphQL */ `
  subscription OnDeleteCommentV3 {
    onDeleteCommentV3 {
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
export const onCreateLikesV3 = /* GraphQL */ `
  subscription OnCreateLikesV3 {
    onCreateLikesV3 {
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
export const onUpdateLikesV3 = /* GraphQL */ `
  subscription OnUpdateLikesV3 {
    onUpdateLikesV3 {
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
export const onDeleteLikesV3 = /* GraphQL */ `
  subscription OnDeleteLikesV3 {
    onDeleteLikesV3 {
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
export const onCreateFeedTypeV3 = /* GraphQL */ `
  subscription OnCreateFeedTypeV3 {
    onCreateFeedTypeV3 {
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
export const onUpdateFeedTypeV3 = /* GraphQL */ `
  subscription OnUpdateFeedTypeV3 {
    onUpdateFeedTypeV3 {
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
export const onDeleteFeedTypeV3 = /* GraphQL */ `
  subscription OnDeleteFeedTypeV3 {
    onDeleteFeedTypeV3 {
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
export const onCreateFollowingV3 = /* GraphQL */ `
  subscription OnCreateFollowingV3 {
    onCreateFollowingV3 {
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
export const onUpdateFollowingV3 = /* GraphQL */ `
  subscription OnUpdateFollowingV3 {
    onUpdateFollowingV3 {
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
export const onDeleteFollowingV3 = /* GraphQL */ `
  subscription OnDeleteFollowingV3 {
    onDeleteFollowingV3 {
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
export const onCreatePostV3 = /* GraphQL */ `
  subscription OnCreatePostV3 {
    onCreatePostV3 {
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
export const onUpdatePostV3 = /* GraphQL */ `
  subscription OnUpdatePostV3 {
    onUpdatePostV3 {
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
export const onDeletePostV3 = /* GraphQL */ `
  subscription OnDeletePostV3 {
    onDeletePostV3 {
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
export const onCreateProfileV3 = /* GraphQL */ `
  subscription OnCreateProfileV3 {
    onCreateProfileV3 {
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
export const onUpdateProfileV3 = /* GraphQL */ `
  subscription OnUpdateProfileV3 {
    onUpdateProfileV3 {
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
export const onDeleteProfileV3 = /* GraphQL */ `
  subscription OnDeleteProfileV3 {
    onDeleteProfileV3 {
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
