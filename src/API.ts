/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRepostV3Input = {
  id?: string | null,
  profileID?: string | null,
  postID?: string | null,
  repostDate?: string | null,
  _version?: number | null,
  repostV3RepostToProfileId?: string | null,
  repostV3RepostToPostId?: string | null,
};

export type ModelRepostV3ConditionInput = {
  profileID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  repostDate?: ModelStringInput | null,
  and?: Array< ModelRepostV3ConditionInput | null > | null,
  or?: Array< ModelRepostV3ConditionInput | null > | null,
  not?: ModelRepostV3ConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type RepostV3 = {
  __typename: "RepostV3",
  id?: string,
  profileID?: string | null,
  postID?: string | null,
  repostDate?: string | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
  RepostToPost?: PostV3,
  RepostToProfile?: ProfileV3,
};

export type PostV3 = {
  __typename: "PostV3",
  id?: string,
  profileID?: string | null,
  feedTypeID?: string | null,
  postDate?: string | null,
  tags?: string | null,
  post?: string | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
  PostToReposts?: ModelRepostV3Connection,
  PostToComments?: ModelCommentV3Connection,
  PostToLikes?: ModelLikesV3Connection,
  PostToFeedType?: FeedTypeV3,
  PostToProfile?: ProfileV3,
};

export type ModelRepostV3Connection = {
  __typename: "ModelRepostV3Connection",
  items?:  Array<RepostV3 | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCommentV3Connection = {
  __typename: "ModelCommentV3Connection",
  items?:  Array<CommentV3 | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CommentV3 = {
  __typename: "CommentV3",
  id?: string,
  profileID?: string | null,
  postID?: string | null,
  comment?: string | null,
  commentDate?: string | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
  CommentToPost?: PostV3,
  CommentToProfile?: ProfileV3,
};

export type ProfileV3 = {
  __typename: "ProfileV3",
  id?: string,
  name?: string,
  phoneNum?: string | null,
  email?: string,
  profilePic?: string | null,
  dob?: string | null,
  profileDate?: string | null,
  bio?: string | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
  ProfileToReposts?: ModelRepostV3Connection,
  ProfileToComments?: ModelCommentV3Connection,
  ProfileToLikes?: ModelLikesV3Connection,
  ProfileToFeedTypes?: ModelFeedTypeV3Connection,
  ProfileToFollowings?: ModelFollowingV3Connection,
  ProfileToPosts?: ModelPostV3Connection,
};

export type ModelLikesV3Connection = {
  __typename: "ModelLikesV3Connection",
  items?:  Array<LikesV3 | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type LikesV3 = {
  __typename: "LikesV3",
  id?: string,
  profileID?: string | null,
  postID?: string | null,
  likeDate?: string | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
  LikeToPost?: PostV3,
  LikeToProfile?: ProfileV3,
};

export type ModelFeedTypeV3Connection = {
  __typename: "ModelFeedTypeV3Connection",
  items?:  Array<FeedTypeV3 | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type FeedTypeV3 = {
  __typename: "FeedTypeV3",
  id?: string,
  profileID?: string | null,
  followingID?: string | null,
  feedName?: string | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
  FeedTypeToFollowing?: ModelFollowingV3Connection,
  FeedTypeToPost?: PostV3,
  FeedTypeToProfile?: ProfileV3,
};

export type ModelFollowingV3Connection = {
  __typename: "ModelFollowingV3Connection",
  items?:  Array<FollowingV3 | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type FollowingV3 = {
  __typename: "FollowingV3",
  id?: string,
  profileID?: string | null,
  feedTypeID?: string | null,
  followingDate?: string | null,
  followsAll?: boolean | null,
  feedtype2ID?: string | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
  FollowingToFeedTypes?: ModelFeedTypeV3Connection,
  FollowingToProfile?: ProfileV3,
};

export type ModelPostV3Connection = {
  __typename: "ModelPostV3Connection",
  items?:  Array<PostV3 | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateRepostV3Input = {
  id: string,
  profileID?: string | null,
  postID?: string | null,
  repostDate?: string | null,
  _version?: number | null,
  repostV3RepostToProfileId?: string | null,
  repostV3RepostToPostId?: string | null,
};

export type DeleteRepostV3Input = {
  id: string,
  _version?: number | null,
};

export type CreateCommentV3Input = {
  id?: string | null,
  profileID?: string | null,
  postID?: string | null,
  comment?: string | null,
  commentDate?: string | null,
  _version?: number | null,
  commentV3CommentToProfileId?: string | null,
  commentV3CommentToPostId?: string | null,
};

export type ModelCommentV3ConditionInput = {
  profileID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  comment?: ModelStringInput | null,
  commentDate?: ModelStringInput | null,
  and?: Array< ModelCommentV3ConditionInput | null > | null,
  or?: Array< ModelCommentV3ConditionInput | null > | null,
  not?: ModelCommentV3ConditionInput | null,
};

export type UpdateCommentV3Input = {
  id: string,
  profileID?: string | null,
  postID?: string | null,
  comment?: string | null,
  commentDate?: string | null,
  _version?: number | null,
  commentV3CommentToProfileId?: string | null,
  commentV3CommentToPostId?: string | null,
};

export type DeleteCommentV3Input = {
  id: string,
  _version?: number | null,
};

export type CreateLikesV3Input = {
  id?: string | null,
  profileID?: string | null,
  postID?: string | null,
  likeDate?: string | null,
  _version?: number | null,
  likesV3LikeToProfileId?: string | null,
  likesV3LikeToPostId?: string | null,
};

export type ModelLikesV3ConditionInput = {
  profileID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  likeDate?: ModelStringInput | null,
  and?: Array< ModelLikesV3ConditionInput | null > | null,
  or?: Array< ModelLikesV3ConditionInput | null > | null,
  not?: ModelLikesV3ConditionInput | null,
};

export type UpdateLikesV3Input = {
  id: string,
  profileID?: string | null,
  postID?: string | null,
  likeDate?: string | null,
  _version?: number | null,
  likesV3LikeToProfileId?: string | null,
  likesV3LikeToPostId?: string | null,
};

export type DeleteLikesV3Input = {
  id: string,
  _version?: number | null,
};

export type CreateFeedTypeV3Input = {
  id?: string | null,
  profileID?: string | null,
  followingID?: string | null,
  feedName?: string | null,
  _version?: number | null,
  feedTypeV3FeedTypeToPostId?: string | null,
  feedTypeV3FeedTypeToProfileId?: string | null,
};

export type ModelFeedTypeV3ConditionInput = {
  profileID?: ModelIDInput | null,
  followingID?: ModelIDInput | null,
  feedName?: ModelStringInput | null,
  and?: Array< ModelFeedTypeV3ConditionInput | null > | null,
  or?: Array< ModelFeedTypeV3ConditionInput | null > | null,
  not?: ModelFeedTypeV3ConditionInput | null,
};

export type UpdateFeedTypeV3Input = {
  id: string,
  profileID?: string | null,
  followingID?: string | null,
  feedName?: string | null,
  _version?: number | null,
  feedTypeV3FeedTypeToPostId?: string | null,
  feedTypeV3FeedTypeToProfileId?: string | null,
};

export type DeleteFeedTypeV3Input = {
  id: string,
  _version?: number | null,
};

export type CreateFollowingV3Input = {
  id?: string | null,
  profileID?: string | null,
  feedTypeID?: string | null,
  followingDate?: string | null,
  followsAll?: boolean | null,
  feedtype2ID?: string | null,
  _version?: number | null,
  followingV3FollowingToProfileId?: string | null,
};

export type ModelFollowingV3ConditionInput = {
  profileID?: ModelIDInput | null,
  feedTypeID?: ModelIDInput | null,
  followingDate?: ModelStringInput | null,
  followsAll?: ModelBooleanInput | null,
  feedtype2ID?: ModelIDInput | null,
  and?: Array< ModelFollowingV3ConditionInput | null > | null,
  or?: Array< ModelFollowingV3ConditionInput | null > | null,
  not?: ModelFollowingV3ConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateFollowingV3Input = {
  id: string,
  profileID?: string | null,
  feedTypeID?: string | null,
  followingDate?: string | null,
  followsAll?: boolean | null,
  feedtype2ID?: string | null,
  _version?: number | null,
  followingV3FollowingToProfileId?: string | null,
};

export type DeleteFollowingV3Input = {
  id: string,
  _version?: number | null,
};

export type CreatePostV3Input = {
  id?: string | null,
  profileID?: string | null,
  feedTypeID?: string | null,
  postDate?: string | null,
  tags?: string | null,
  post?: string | null,
  _version?: number | null,
  postV3PostToProfileId?: string | null,
  postV3PostToFeedTypeId?: string | null,
};

export type ModelPostV3ConditionInput = {
  profileID?: ModelIDInput | null,
  feedTypeID?: ModelIDInput | null,
  postDate?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  post?: ModelStringInput | null,
  and?: Array< ModelPostV3ConditionInput | null > | null,
  or?: Array< ModelPostV3ConditionInput | null > | null,
  not?: ModelPostV3ConditionInput | null,
};

export type UpdatePostV3Input = {
  id: string,
  profileID?: string | null,
  feedTypeID?: string | null,
  postDate?: string | null,
  tags?: string | null,
  post?: string | null,
  _version?: number | null,
  postV3PostToProfileId?: string | null,
  postV3PostToFeedTypeId?: string | null,
};

export type DeletePostV3Input = {
  id: string,
  _version?: number | null,
};

export type CreateProfileV3Input = {
  id?: string | null,
  name: string,
  phoneNum?: string | null,
  email: string,
  profilePic?: string | null,
  dob?: string | null,
  profileDate?: string | null,
  bio?: string | null,
  _version?: number | null,
};

export type ModelProfileV3ConditionInput = {
  name?: ModelStringInput | null,
  phoneNum?: ModelStringInput | null,
  email?: ModelStringInput | null,
  profilePic?: ModelStringInput | null,
  dob?: ModelStringInput | null,
  profileDate?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  and?: Array< ModelProfileV3ConditionInput | null > | null,
  or?: Array< ModelProfileV3ConditionInput | null > | null,
  not?: ModelProfileV3ConditionInput | null,
};

export type UpdateProfileV3Input = {
  id: string,
  name?: string | null,
  phoneNum?: string | null,
  email?: string | null,
  profilePic?: string | null,
  dob?: string | null,
  profileDate?: string | null,
  bio?: string | null,
  _version?: number | null,
};

export type DeleteProfileV3Input = {
  id: string,
  _version?: number | null,
};

export type ModelRepostV3FilterInput = {
  id?: ModelIDInput | null,
  profileID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  repostDate?: ModelStringInput | null,
  and?: Array< ModelRepostV3FilterInput | null > | null,
  or?: Array< ModelRepostV3FilterInput | null > | null,
  not?: ModelRepostV3FilterInput | null,
};

export type ModelCommentV3FilterInput = {
  id?: ModelIDInput | null,
  profileID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  comment?: ModelStringInput | null,
  commentDate?: ModelStringInput | null,
  and?: Array< ModelCommentV3FilterInput | null > | null,
  or?: Array< ModelCommentV3FilterInput | null > | null,
  not?: ModelCommentV3FilterInput | null,
};

export type ModelLikesV3FilterInput = {
  id?: ModelIDInput | null,
  profileID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  likeDate?: ModelStringInput | null,
  and?: Array< ModelLikesV3FilterInput | null > | null,
  or?: Array< ModelLikesV3FilterInput | null > | null,
  not?: ModelLikesV3FilterInput | null,
};

export type ModelFeedTypeV3FilterInput = {
  id?: ModelIDInput | null,
  profileID?: ModelIDInput | null,
  followingID?: ModelIDInput | null,
  feedName?: ModelStringInput | null,
  and?: Array< ModelFeedTypeV3FilterInput | null > | null,
  or?: Array< ModelFeedTypeV3FilterInput | null > | null,
  not?: ModelFeedTypeV3FilterInput | null,
};

export type ModelFollowingV3FilterInput = {
  id?: ModelIDInput | null,
  profileID?: ModelIDInput | null,
  feedTypeID?: ModelIDInput | null,
  followingDate?: ModelStringInput | null,
  followsAll?: ModelBooleanInput | null,
  feedtype2ID?: ModelIDInput | null,
  and?: Array< ModelFollowingV3FilterInput | null > | null,
  or?: Array< ModelFollowingV3FilterInput | null > | null,
  not?: ModelFollowingV3FilterInput | null,
};

export type ModelPostV3FilterInput = {
  id?: ModelIDInput | null,
  profileID?: ModelIDInput | null,
  feedTypeID?: ModelIDInput | null,
  postDate?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  post?: ModelStringInput | null,
  and?: Array< ModelPostV3FilterInput | null > | null,
  or?: Array< ModelPostV3FilterInput | null > | null,
  not?: ModelPostV3FilterInput | null,
};

export type ModelProfileV3FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  phoneNum?: ModelStringInput | null,
  email?: ModelStringInput | null,
  profilePic?: ModelStringInput | null,
  dob?: ModelStringInput | null,
  profileDate?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  and?: Array< ModelProfileV3FilterInput | null > | null,
  or?: Array< ModelProfileV3FilterInput | null > | null,
  not?: ModelProfileV3FilterInput | null,
};

export type ModelProfileV3Connection = {
  __typename: "ModelProfileV3Connection",
  items?:  Array<ProfileV3 | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateRepostV3MutationVariables = {
  input?: CreateRepostV3Input,
  condition?: ModelRepostV3ConditionInput | null,
};

export type CreateRepostV3Mutation = {
  createRepostV3?:  {
    __typename: "RepostV3",
    id: string,
    profileID?: string | null,
    postID?: string | null,
    repostDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    RepostToPost?:  {
      __typename: "PostV3",
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      postDate?: string | null,
      tags?: string | null,
      post?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    RepostToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdateRepostV3MutationVariables = {
  input?: UpdateRepostV3Input,
  condition?: ModelRepostV3ConditionInput | null,
};

export type UpdateRepostV3Mutation = {
  updateRepostV3?:  {
    __typename: "RepostV3",
    id: string,
    profileID?: string | null,
    postID?: string | null,
    repostDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    RepostToPost?:  {
      __typename: "PostV3",
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      postDate?: string | null,
      tags?: string | null,
      post?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    RepostToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeleteRepostV3MutationVariables = {
  input?: DeleteRepostV3Input,
  condition?: ModelRepostV3ConditionInput | null,
};

export type DeleteRepostV3Mutation = {
  deleteRepostV3?:  {
    __typename: "RepostV3",
    id: string,
    profileID?: string | null,
    postID?: string | null,
    repostDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    RepostToPost?:  {
      __typename: "PostV3",
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      postDate?: string | null,
      tags?: string | null,
      post?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    RepostToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type CreateCommentV3MutationVariables = {
  input?: CreateCommentV3Input,
  condition?: ModelCommentV3ConditionInput | null,
};

export type CreateCommentV3Mutation = {
  createCommentV3?:  {
    __typename: "CommentV3",
    id: string,
    profileID?: string | null,
    postID?: string | null,
    comment?: string | null,
    commentDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    CommentToPost?:  {
      __typename: "PostV3",
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      postDate?: string | null,
      tags?: string | null,
      post?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    CommentToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdateCommentV3MutationVariables = {
  input?: UpdateCommentV3Input,
  condition?: ModelCommentV3ConditionInput | null,
};

export type UpdateCommentV3Mutation = {
  updateCommentV3?:  {
    __typename: "CommentV3",
    id: string,
    profileID?: string | null,
    postID?: string | null,
    comment?: string | null,
    commentDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    CommentToPost?:  {
      __typename: "PostV3",
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      postDate?: string | null,
      tags?: string | null,
      post?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    CommentToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeleteCommentV3MutationVariables = {
  input?: DeleteCommentV3Input,
  condition?: ModelCommentV3ConditionInput | null,
};

export type DeleteCommentV3Mutation = {
  deleteCommentV3?:  {
    __typename: "CommentV3",
    id: string,
    profileID?: string | null,
    postID?: string | null,
    comment?: string | null,
    commentDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    CommentToPost?:  {
      __typename: "PostV3",
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      postDate?: string | null,
      tags?: string | null,
      post?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    CommentToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type CreateLikesV3MutationVariables = {
  input?: CreateLikesV3Input,
  condition?: ModelLikesV3ConditionInput | null,
};

export type CreateLikesV3Mutation = {
  createLikesV3?:  {
    __typename: "LikesV3",
    id: string,
    profileID?: string | null,
    postID?: string | null,
    likeDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    LikeToPost?:  {
      __typename: "PostV3",
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      postDate?: string | null,
      tags?: string | null,
      post?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    LikeToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdateLikesV3MutationVariables = {
  input?: UpdateLikesV3Input,
  condition?: ModelLikesV3ConditionInput | null,
};

export type UpdateLikesV3Mutation = {
  updateLikesV3?:  {
    __typename: "LikesV3",
    id: string,
    profileID?: string | null,
    postID?: string | null,
    likeDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    LikeToPost?:  {
      __typename: "PostV3",
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      postDate?: string | null,
      tags?: string | null,
      post?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    LikeToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeleteLikesV3MutationVariables = {
  input?: DeleteLikesV3Input,
  condition?: ModelLikesV3ConditionInput | null,
};

export type DeleteLikesV3Mutation = {
  deleteLikesV3?:  {
    __typename: "LikesV3",
    id: string,
    profileID?: string | null,
    postID?: string | null,
    likeDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    LikeToPost?:  {
      __typename: "PostV3",
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      postDate?: string | null,
      tags?: string | null,
      post?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    LikeToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type CreateFeedTypeV3MutationVariables = {
  input?: CreateFeedTypeV3Input,
  condition?: ModelFeedTypeV3ConditionInput | null,
};

export type CreateFeedTypeV3Mutation = {
  createFeedTypeV3?:  {
    __typename: "FeedTypeV3",
    id: string,
    profileID?: string | null,
    followingID?: string | null,
    feedName?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FeedTypeToFollowing?:  {
      __typename: "ModelFollowingV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    FeedTypeToPost?:  {
      __typename: "PostV3",
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      postDate?: string | null,
      tags?: string | null,
      post?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    FeedTypeToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdateFeedTypeV3MutationVariables = {
  input?: UpdateFeedTypeV3Input,
  condition?: ModelFeedTypeV3ConditionInput | null,
};

export type UpdateFeedTypeV3Mutation = {
  updateFeedTypeV3?:  {
    __typename: "FeedTypeV3",
    id: string,
    profileID?: string | null,
    followingID?: string | null,
    feedName?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FeedTypeToFollowing?:  {
      __typename: "ModelFollowingV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    FeedTypeToPost?:  {
      __typename: "PostV3",
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      postDate?: string | null,
      tags?: string | null,
      post?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    FeedTypeToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeleteFeedTypeV3MutationVariables = {
  input?: DeleteFeedTypeV3Input,
  condition?: ModelFeedTypeV3ConditionInput | null,
};

export type DeleteFeedTypeV3Mutation = {
  deleteFeedTypeV3?:  {
    __typename: "FeedTypeV3",
    id: string,
    profileID?: string | null,
    followingID?: string | null,
    feedName?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FeedTypeToFollowing?:  {
      __typename: "ModelFollowingV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    FeedTypeToPost?:  {
      __typename: "PostV3",
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      postDate?: string | null,
      tags?: string | null,
      post?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    FeedTypeToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type CreateFollowingV3MutationVariables = {
  input?: CreateFollowingV3Input,
  condition?: ModelFollowingV3ConditionInput | null,
};

export type CreateFollowingV3Mutation = {
  createFollowingV3?:  {
    __typename: "FollowingV3",
    id: string,
    profileID?: string | null,
    feedTypeID?: string | null,
    followingDate?: string | null,
    followsAll?: boolean | null,
    feedtype2ID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FollowingToFeedTypes?:  {
      __typename: "ModelFeedTypeV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    FollowingToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdateFollowingV3MutationVariables = {
  input?: UpdateFollowingV3Input,
  condition?: ModelFollowingV3ConditionInput | null,
};

export type UpdateFollowingV3Mutation = {
  updateFollowingV3?:  {
    __typename: "FollowingV3",
    id: string,
    profileID?: string | null,
    feedTypeID?: string | null,
    followingDate?: string | null,
    followsAll?: boolean | null,
    feedtype2ID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FollowingToFeedTypes?:  {
      __typename: "ModelFeedTypeV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    FollowingToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeleteFollowingV3MutationVariables = {
  input?: DeleteFollowingV3Input,
  condition?: ModelFollowingV3ConditionInput | null,
};

export type DeleteFollowingV3Mutation = {
  deleteFollowingV3?:  {
    __typename: "FollowingV3",
    id: string,
    profileID?: string | null,
    feedTypeID?: string | null,
    followingDate?: string | null,
    followsAll?: boolean | null,
    feedtype2ID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FollowingToFeedTypes?:  {
      __typename: "ModelFeedTypeV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    FollowingToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type CreatePostV3MutationVariables = {
  input?: CreatePostV3Input,
  condition?: ModelPostV3ConditionInput | null,
};

export type CreatePostV3Mutation = {
  createPostV3?:  {
    __typename: "PostV3",
    id: string,
    profileID?: string | null,
    feedTypeID?: string | null,
    postDate?: string | null,
    tags?: string | null,
    post?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    PostToReposts?:  {
      __typename: "ModelRepostV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToComments?:  {
      __typename: "ModelCommentV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToLikes?:  {
      __typename: "ModelLikesV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToFeedType?:  {
      __typename: "FeedTypeV3",
      id: string,
      profileID?: string | null,
      followingID?: string | null,
      feedName?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    PostToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdatePostV3MutationVariables = {
  input?: UpdatePostV3Input,
  condition?: ModelPostV3ConditionInput | null,
};

export type UpdatePostV3Mutation = {
  updatePostV3?:  {
    __typename: "PostV3",
    id: string,
    profileID?: string | null,
    feedTypeID?: string | null,
    postDate?: string | null,
    tags?: string | null,
    post?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    PostToReposts?:  {
      __typename: "ModelRepostV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToComments?:  {
      __typename: "ModelCommentV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToLikes?:  {
      __typename: "ModelLikesV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToFeedType?:  {
      __typename: "FeedTypeV3",
      id: string,
      profileID?: string | null,
      followingID?: string | null,
      feedName?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    PostToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeletePostV3MutationVariables = {
  input?: DeletePostV3Input,
  condition?: ModelPostV3ConditionInput | null,
};

export type DeletePostV3Mutation = {
  deletePostV3?:  {
    __typename: "PostV3",
    id: string,
    profileID?: string | null,
    feedTypeID?: string | null,
    postDate?: string | null,
    tags?: string | null,
    post?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    PostToReposts?:  {
      __typename: "ModelRepostV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToComments?:  {
      __typename: "ModelCommentV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToLikes?:  {
      __typename: "ModelLikesV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToFeedType?:  {
      __typename: "FeedTypeV3",
      id: string,
      profileID?: string | null,
      followingID?: string | null,
      feedName?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    PostToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type CreateProfileV3MutationVariables = {
  input?: CreateProfileV3Input,
  condition?: ModelProfileV3ConditionInput | null,
};

export type CreateProfileV3Mutation = {
  createProfileV3?:  {
    __typename: "ProfileV3",
    id: string,
    name: string,
    phoneNum?: string | null,
    email: string,
    profilePic?: string | null,
    dob?: string | null,
    profileDate?: string | null,
    bio?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    ProfileToReposts?:  {
      __typename: "ModelRepostV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToComments?:  {
      __typename: "ModelCommentV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToLikes?:  {
      __typename: "ModelLikesV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFeedTypes?:  {
      __typename: "ModelFeedTypeV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFollowings?:  {
      __typename: "ModelFollowingV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToPosts?:  {
      __typename: "ModelPostV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type UpdateProfileV3MutationVariables = {
  input?: UpdateProfileV3Input,
  condition?: ModelProfileV3ConditionInput | null,
};

export type UpdateProfileV3Mutation = {
  updateProfileV3?:  {
    __typename: "ProfileV3",
    id: string,
    name: string,
    phoneNum?: string | null,
    email: string,
    profilePic?: string | null,
    dob?: string | null,
    profileDate?: string | null,
    bio?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    ProfileToReposts?:  {
      __typename: "ModelRepostV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToComments?:  {
      __typename: "ModelCommentV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToLikes?:  {
      __typename: "ModelLikesV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFeedTypes?:  {
      __typename: "ModelFeedTypeV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFollowings?:  {
      __typename: "ModelFollowingV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToPosts?:  {
      __typename: "ModelPostV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type DeleteProfileV3MutationVariables = {
  input?: DeleteProfileV3Input,
  condition?: ModelProfileV3ConditionInput | null,
};

export type DeleteProfileV3Mutation = {
  deleteProfileV3?:  {
    __typename: "ProfileV3",
    id: string,
    name: string,
    phoneNum?: string | null,
    email: string,
    profilePic?: string | null,
    dob?: string | null,
    profileDate?: string | null,
    bio?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    ProfileToReposts?:  {
      __typename: "ModelRepostV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToComments?:  {
      __typename: "ModelCommentV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToLikes?:  {
      __typename: "ModelLikesV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFeedTypes?:  {
      __typename: "ModelFeedTypeV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFollowings?:  {
      __typename: "ModelFollowingV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToPosts?:  {
      __typename: "ModelPostV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type GetRepostV3QueryVariables = {
  id?: string,
};

export type GetRepostV3Query = {
  getRepostV3?:  {
    __typename: "RepostV3",
    id: string,
    profileID?: string | null,
    postID?: string | null,
    repostDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    RepostToPost?:  {
      __typename: "PostV3",
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      postDate?: string | null,
      tags?: string | null,
      post?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    RepostToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type ListRepostV3sQueryVariables = {
  filter?: ModelRepostV3FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRepostV3sQuery = {
  listRepostV3s?:  {
    __typename: "ModelRepostV3Connection",
    items?:  Array< {
      __typename: "RepostV3",
      id: string,
      profileID?: string | null,
      postID?: string | null,
      repostDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncRepostV3sQueryVariables = {
  filter?: ModelRepostV3FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncRepostV3sQuery = {
  syncRepostV3s?:  {
    __typename: "ModelRepostV3Connection",
    items?:  Array< {
      __typename: "RepostV3",
      id: string,
      profileID?: string | null,
      postID?: string | null,
      repostDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCommentV3QueryVariables = {
  id?: string,
};

export type GetCommentV3Query = {
  getCommentV3?:  {
    __typename: "CommentV3",
    id: string,
    profileID?: string | null,
    postID?: string | null,
    comment?: string | null,
    commentDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    CommentToPost?:  {
      __typename: "PostV3",
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      postDate?: string | null,
      tags?: string | null,
      post?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    CommentToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type ListCommentV3sQueryVariables = {
  filter?: ModelCommentV3FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentV3sQuery = {
  listCommentV3s?:  {
    __typename: "ModelCommentV3Connection",
    items?:  Array< {
      __typename: "CommentV3",
      id: string,
      profileID?: string | null,
      postID?: string | null,
      comment?: string | null,
      commentDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCommentV3sQueryVariables = {
  filter?: ModelCommentV3FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCommentV3sQuery = {
  syncCommentV3s?:  {
    __typename: "ModelCommentV3Connection",
    items?:  Array< {
      __typename: "CommentV3",
      id: string,
      profileID?: string | null,
      postID?: string | null,
      comment?: string | null,
      commentDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetLikesV3QueryVariables = {
  id?: string,
};

export type GetLikesV3Query = {
  getLikesV3?:  {
    __typename: "LikesV3",
    id: string,
    profileID?: string | null,
    postID?: string | null,
    likeDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    LikeToPost?:  {
      __typename: "PostV3",
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      postDate?: string | null,
      tags?: string | null,
      post?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    LikeToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type ListLikesV3sQueryVariables = {
  filter?: ModelLikesV3FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLikesV3sQuery = {
  listLikesV3s?:  {
    __typename: "ModelLikesV3Connection",
    items?:  Array< {
      __typename: "LikesV3",
      id: string,
      profileID?: string | null,
      postID?: string | null,
      likeDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncLikesV3sQueryVariables = {
  filter?: ModelLikesV3FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncLikesV3sQuery = {
  syncLikesV3s?:  {
    __typename: "ModelLikesV3Connection",
    items?:  Array< {
      __typename: "LikesV3",
      id: string,
      profileID?: string | null,
      postID?: string | null,
      likeDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetFeedTypeV3QueryVariables = {
  id?: string,
};

export type GetFeedTypeV3Query = {
  getFeedTypeV3?:  {
    __typename: "FeedTypeV3",
    id: string,
    profileID?: string | null,
    followingID?: string | null,
    feedName?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FeedTypeToFollowing?:  {
      __typename: "ModelFollowingV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    FeedTypeToPost?:  {
      __typename: "PostV3",
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      postDate?: string | null,
      tags?: string | null,
      post?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    FeedTypeToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type ListFeedTypeV3sQueryVariables = {
  filter?: ModelFeedTypeV3FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFeedTypeV3sQuery = {
  listFeedTypeV3s?:  {
    __typename: "ModelFeedTypeV3Connection",
    items?:  Array< {
      __typename: "FeedTypeV3",
      id: string,
      profileID?: string | null,
      followingID?: string | null,
      feedName?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncFeedTypeV3sQueryVariables = {
  filter?: ModelFeedTypeV3FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncFeedTypeV3sQuery = {
  syncFeedTypeV3s?:  {
    __typename: "ModelFeedTypeV3Connection",
    items?:  Array< {
      __typename: "FeedTypeV3",
      id: string,
      profileID?: string | null,
      followingID?: string | null,
      feedName?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetFollowingV3QueryVariables = {
  id?: string,
};

export type GetFollowingV3Query = {
  getFollowingV3?:  {
    __typename: "FollowingV3",
    id: string,
    profileID?: string | null,
    feedTypeID?: string | null,
    followingDate?: string | null,
    followsAll?: boolean | null,
    feedtype2ID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FollowingToFeedTypes?:  {
      __typename: "ModelFeedTypeV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    FollowingToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type ListFollowingV3sQueryVariables = {
  filter?: ModelFollowingV3FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFollowingV3sQuery = {
  listFollowingV3s?:  {
    __typename: "ModelFollowingV3Connection",
    items?:  Array< {
      __typename: "FollowingV3",
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      followingDate?: string | null,
      followsAll?: boolean | null,
      feedtype2ID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncFollowingV3sQueryVariables = {
  filter?: ModelFollowingV3FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncFollowingV3sQuery = {
  syncFollowingV3s?:  {
    __typename: "ModelFollowingV3Connection",
    items?:  Array< {
      __typename: "FollowingV3",
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      followingDate?: string | null,
      followsAll?: boolean | null,
      feedtype2ID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPostV3QueryVariables = {
  id?: string,
};

export type GetPostV3Query = {
  getPostV3?:  {
    __typename: "PostV3",
    id: string,
    profileID?: string | null,
    feedTypeID?: string | null,
    postDate?: string | null,
    tags?: string | null,
    post?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    PostToReposts?:  {
      __typename: "ModelRepostV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToComments?:  {
      __typename: "ModelCommentV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToLikes?:  {
      __typename: "ModelLikesV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToFeedType?:  {
      __typename: "FeedTypeV3",
      id: string,
      profileID?: string | null,
      followingID?: string | null,
      feedName?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    PostToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type ListPostV3sQueryVariables = {
  filter?: ModelPostV3FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostV3sQuery = {
  listPostV3s?:  {
    __typename: "ModelPostV3Connection",
    items?:  Array< {
      __typename: "PostV3",
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      postDate?: string | null,
      tags?: string | null,
      post?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPostV3sQueryVariables = {
  filter?: ModelPostV3FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPostV3sQuery = {
  syncPostV3s?:  {
    __typename: "ModelPostV3Connection",
    items?:  Array< {
      __typename: "PostV3",
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      postDate?: string | null,
      tags?: string | null,
      post?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetProfileV3QueryVariables = {
  id?: string,
};

export type GetProfileV3Query = {
  getProfileV3?:  {
    __typename: "ProfileV3",
    id: string,
    name: string,
    phoneNum?: string | null,
    email: string,
    profilePic?: string | null,
    dob?: string | null,
    profileDate?: string | null,
    bio?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    ProfileToReposts?:  {
      __typename: "ModelRepostV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToComments?:  {
      __typename: "ModelCommentV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToLikes?:  {
      __typename: "ModelLikesV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFeedTypes?:  {
      __typename: "ModelFeedTypeV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFollowings?:  {
      __typename: "ModelFollowingV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToPosts?:  {
      __typename: "ModelPostV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type ListProfileV3sQueryVariables = {
  filter?: ModelProfileV3FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProfileV3sQuery = {
  listProfileV3s?:  {
    __typename: "ModelProfileV3Connection",
    items?:  Array< {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProfileV3sQueryVariables = {
  filter?: ModelProfileV3FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProfileV3sQuery = {
  syncProfileV3s?:  {
    __typename: "ModelProfileV3Connection",
    items?:  Array< {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateRepostV3Subscription = {
  onCreateRepostV3?:  {
    __typename: "RepostV3",
    id: string,
    profileID?: string | null,
    postID?: string | null,
    repostDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    RepostToPost?:  {
      __typename: "PostV3",
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      postDate?: string | null,
      tags?: string | null,
      post?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    RepostToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdateRepostV3Subscription = {
  onUpdateRepostV3?:  {
    __typename: "RepostV3",
    id: string,
    profileID?: string | null,
    postID?: string | null,
    repostDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    RepostToPost?:  {
      __typename: "PostV3",
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      postDate?: string | null,
      tags?: string | null,
      post?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    RepostToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeleteRepostV3Subscription = {
  onDeleteRepostV3?:  {
    __typename: "RepostV3",
    id: string,
    profileID?: string | null,
    postID?: string | null,
    repostDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    RepostToPost?:  {
      __typename: "PostV3",
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      postDate?: string | null,
      tags?: string | null,
      post?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    RepostToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreateCommentV3Subscription = {
  onCreateCommentV3?:  {
    __typename: "CommentV3",
    id: string,
    profileID?: string | null,
    postID?: string | null,
    comment?: string | null,
    commentDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    CommentToPost?:  {
      __typename: "PostV3",
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      postDate?: string | null,
      tags?: string | null,
      post?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    CommentToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdateCommentV3Subscription = {
  onUpdateCommentV3?:  {
    __typename: "CommentV3",
    id: string,
    profileID?: string | null,
    postID?: string | null,
    comment?: string | null,
    commentDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    CommentToPost?:  {
      __typename: "PostV3",
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      postDate?: string | null,
      tags?: string | null,
      post?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    CommentToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeleteCommentV3Subscription = {
  onDeleteCommentV3?:  {
    __typename: "CommentV3",
    id: string,
    profileID?: string | null,
    postID?: string | null,
    comment?: string | null,
    commentDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    CommentToPost?:  {
      __typename: "PostV3",
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      postDate?: string | null,
      tags?: string | null,
      post?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    CommentToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreateLikesV3Subscription = {
  onCreateLikesV3?:  {
    __typename: "LikesV3",
    id: string,
    profileID?: string | null,
    postID?: string | null,
    likeDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    LikeToPost?:  {
      __typename: "PostV3",
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      postDate?: string | null,
      tags?: string | null,
      post?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    LikeToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdateLikesV3Subscription = {
  onUpdateLikesV3?:  {
    __typename: "LikesV3",
    id: string,
    profileID?: string | null,
    postID?: string | null,
    likeDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    LikeToPost?:  {
      __typename: "PostV3",
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      postDate?: string | null,
      tags?: string | null,
      post?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    LikeToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeleteLikesV3Subscription = {
  onDeleteLikesV3?:  {
    __typename: "LikesV3",
    id: string,
    profileID?: string | null,
    postID?: string | null,
    likeDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    LikeToPost?:  {
      __typename: "PostV3",
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      postDate?: string | null,
      tags?: string | null,
      post?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    LikeToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreateFeedTypeV3Subscription = {
  onCreateFeedTypeV3?:  {
    __typename: "FeedTypeV3",
    id: string,
    profileID?: string | null,
    followingID?: string | null,
    feedName?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FeedTypeToFollowing?:  {
      __typename: "ModelFollowingV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    FeedTypeToPost?:  {
      __typename: "PostV3",
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      postDate?: string | null,
      tags?: string | null,
      post?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    FeedTypeToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdateFeedTypeV3Subscription = {
  onUpdateFeedTypeV3?:  {
    __typename: "FeedTypeV3",
    id: string,
    profileID?: string | null,
    followingID?: string | null,
    feedName?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FeedTypeToFollowing?:  {
      __typename: "ModelFollowingV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    FeedTypeToPost?:  {
      __typename: "PostV3",
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      postDate?: string | null,
      tags?: string | null,
      post?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    FeedTypeToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeleteFeedTypeV3Subscription = {
  onDeleteFeedTypeV3?:  {
    __typename: "FeedTypeV3",
    id: string,
    profileID?: string | null,
    followingID?: string | null,
    feedName?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FeedTypeToFollowing?:  {
      __typename: "ModelFollowingV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    FeedTypeToPost?:  {
      __typename: "PostV3",
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      postDate?: string | null,
      tags?: string | null,
      post?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    FeedTypeToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreateFollowingV3Subscription = {
  onCreateFollowingV3?:  {
    __typename: "FollowingV3",
    id: string,
    profileID?: string | null,
    feedTypeID?: string | null,
    followingDate?: string | null,
    followsAll?: boolean | null,
    feedtype2ID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FollowingToFeedTypes?:  {
      __typename: "ModelFeedTypeV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    FollowingToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdateFollowingV3Subscription = {
  onUpdateFollowingV3?:  {
    __typename: "FollowingV3",
    id: string,
    profileID?: string | null,
    feedTypeID?: string | null,
    followingDate?: string | null,
    followsAll?: boolean | null,
    feedtype2ID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FollowingToFeedTypes?:  {
      __typename: "ModelFeedTypeV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    FollowingToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeleteFollowingV3Subscription = {
  onDeleteFollowingV3?:  {
    __typename: "FollowingV3",
    id: string,
    profileID?: string | null,
    feedTypeID?: string | null,
    followingDate?: string | null,
    followsAll?: boolean | null,
    feedtype2ID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FollowingToFeedTypes?:  {
      __typename: "ModelFeedTypeV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    FollowingToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreatePostV3Subscription = {
  onCreatePostV3?:  {
    __typename: "PostV3",
    id: string,
    profileID?: string | null,
    feedTypeID?: string | null,
    postDate?: string | null,
    tags?: string | null,
    post?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    PostToReposts?:  {
      __typename: "ModelRepostV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToComments?:  {
      __typename: "ModelCommentV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToLikes?:  {
      __typename: "ModelLikesV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToFeedType?:  {
      __typename: "FeedTypeV3",
      id: string,
      profileID?: string | null,
      followingID?: string | null,
      feedName?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    PostToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdatePostV3Subscription = {
  onUpdatePostV3?:  {
    __typename: "PostV3",
    id: string,
    profileID?: string | null,
    feedTypeID?: string | null,
    postDate?: string | null,
    tags?: string | null,
    post?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    PostToReposts?:  {
      __typename: "ModelRepostV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToComments?:  {
      __typename: "ModelCommentV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToLikes?:  {
      __typename: "ModelLikesV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToFeedType?:  {
      __typename: "FeedTypeV3",
      id: string,
      profileID?: string | null,
      followingID?: string | null,
      feedName?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    PostToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeletePostV3Subscription = {
  onDeletePostV3?:  {
    __typename: "PostV3",
    id: string,
    profileID?: string | null,
    feedTypeID?: string | null,
    postDate?: string | null,
    tags?: string | null,
    post?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    PostToReposts?:  {
      __typename: "ModelRepostV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToComments?:  {
      __typename: "ModelCommentV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToLikes?:  {
      __typename: "ModelLikesV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToFeedType?:  {
      __typename: "FeedTypeV3",
      id: string,
      profileID?: string | null,
      followingID?: string | null,
      feedName?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    PostToProfile?:  {
      __typename: "ProfileV3",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      bio?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreateProfileV3Subscription = {
  onCreateProfileV3?:  {
    __typename: "ProfileV3",
    id: string,
    name: string,
    phoneNum?: string | null,
    email: string,
    profilePic?: string | null,
    dob?: string | null,
    profileDate?: string | null,
    bio?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    ProfileToReposts?:  {
      __typename: "ModelRepostV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToComments?:  {
      __typename: "ModelCommentV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToLikes?:  {
      __typename: "ModelLikesV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFeedTypes?:  {
      __typename: "ModelFeedTypeV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFollowings?:  {
      __typename: "ModelFollowingV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToPosts?:  {
      __typename: "ModelPostV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnUpdateProfileV3Subscription = {
  onUpdateProfileV3?:  {
    __typename: "ProfileV3",
    id: string,
    name: string,
    phoneNum?: string | null,
    email: string,
    profilePic?: string | null,
    dob?: string | null,
    profileDate?: string | null,
    bio?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    ProfileToReposts?:  {
      __typename: "ModelRepostV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToComments?:  {
      __typename: "ModelCommentV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToLikes?:  {
      __typename: "ModelLikesV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFeedTypes?:  {
      __typename: "ModelFeedTypeV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFollowings?:  {
      __typename: "ModelFollowingV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToPosts?:  {
      __typename: "ModelPostV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnDeleteProfileV3Subscription = {
  onDeleteProfileV3?:  {
    __typename: "ProfileV3",
    id: string,
    name: string,
    phoneNum?: string | null,
    email: string,
    profilePic?: string | null,
    dob?: string | null,
    profileDate?: string | null,
    bio?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    ProfileToReposts?:  {
      __typename: "ModelRepostV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToComments?:  {
      __typename: "ModelCommentV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToLikes?:  {
      __typename: "ModelLikesV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFeedTypes?:  {
      __typename: "ModelFeedTypeV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFollowings?:  {
      __typename: "ModelFollowingV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToPosts?:  {
      __typename: "ModelPostV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};
