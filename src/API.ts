/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRepostInput = {
  id?: string | null,
  profileID?: string | null,
  postID?: string | null,
  repostDate?: string | null,
  _version?: number | null,
  repostRepostToProfileId?: string | null,
  repostRepostToPostId?: string | null,
};

export type ModelRepostConditionInput = {
  profileID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  repostDate?: ModelStringInput | null,
  and?: Array< ModelRepostConditionInput | null > | null,
  or?: Array< ModelRepostConditionInput | null > | null,
  not?: ModelRepostConditionInput | null,
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

export type Repost = {
  __typename: "Repost",
  id?: string,
  profileID?: string | null,
  postID?: string | null,
  repostDate?: string | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
  RepostToPost?: Post,
  RepostToProfile?: Profile,
};

export type Post = {
  __typename: "Post",
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
  PostToReposts?: ModelRepostConnection,
  PostToComments?: ModelCommentConnection,
  PostToLikes?: ModelLikesConnection,
  PostToFeedType?: FeedType,
  PostToProfile?: Profile,
};

export type ModelRepostConnection = {
  __typename: "ModelRepostConnection",
  items?:  Array<Repost | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items?:  Array<Comment | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Comment = {
  __typename: "Comment",
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
  CommentToPost?: Post,
  CommentToProfile?: Profile,
};

export type Profile = {
  __typename: "Profile",
  id?: string,
  name?: string,
  phoneNum?: string | null,
  email?: string,
  profilePic?: string | null,
  dob?: string | null,
  profileDate?: string | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
  ProfileToReposts?: ModelRepostConnection,
  ProfileToComments?: ModelCommentConnection,
  ProfileToLikes?: ModelLikesConnection,
  ProfileToFeedTypes?: ModelFeedTypeConnection,
  ProfileToFollowings?: ModelFollowingConnection,
  ProfileToPosts?: ModelPostConnection,
};

export type ModelLikesConnection = {
  __typename: "ModelLikesConnection",
  items?:  Array<Likes | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Likes = {
  __typename: "Likes",
  id?: string,
  profileID?: string | null,
  postID?: string | null,
  likeDate?: string | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
  LikeToPost?: Post,
  LikeToProfile?: Profile,
};

export type ModelFeedTypeConnection = {
  __typename: "ModelFeedTypeConnection",
  items?:  Array<FeedType | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type FeedType = {
  __typename: "FeedType",
  id?: string,
  profileID?: string | null,
  followingID?: string | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
  FeedTypeToFollowing?: Following,
  FeedTypeToPost?: Post,
  FeedTypeToProfile?: Profile,
};

export type Following = {
  __typename: "Following",
  id?: string,
  profileID?: string | null,
  feedTypeID?: string | null,
  followingDate?: string | null,
  followsAll?: boolean | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
  FollowingToFeedTypes?: ModelFeedTypeConnection,
  FollowingToProfile?: Profile,
};

export type ModelFollowingConnection = {
  __typename: "ModelFollowingConnection",
  items?:  Array<Following | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items?:  Array<Post | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateRepostInput = {
  id: string,
  profileID?: string | null,
  postID?: string | null,
  repostDate?: string | null,
  _version?: number | null,
  repostRepostToProfileId?: string | null,
  repostRepostToPostId?: string | null,
};

export type DeleteRepostInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateCommentInput = {
  id?: string | null,
  profileID?: string | null,
  postID?: string | null,
  comment?: string | null,
  commentDate?: string | null,
  _version?: number | null,
  commentCommentToProfileId?: string | null,
  commentCommentToPostId?: string | null,
};

export type ModelCommentConditionInput = {
  profileID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  comment?: ModelStringInput | null,
  commentDate?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type UpdateCommentInput = {
  id: string,
  profileID?: string | null,
  postID?: string | null,
  comment?: string | null,
  commentDate?: string | null,
  _version?: number | null,
  commentCommentToProfileId?: string | null,
  commentCommentToPostId?: string | null,
};

export type DeleteCommentInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateLikesInput = {
  id?: string | null,
  profileID?: string | null,
  postID?: string | null,
  likeDate?: string | null,
  _version?: number | null,
  likesLikeToProfileId?: string | null,
  likesLikeToPostId?: string | null,
};

export type ModelLikesConditionInput = {
  profileID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  likeDate?: ModelStringInput | null,
  and?: Array< ModelLikesConditionInput | null > | null,
  or?: Array< ModelLikesConditionInput | null > | null,
  not?: ModelLikesConditionInput | null,
};

export type UpdateLikesInput = {
  id: string,
  profileID?: string | null,
  postID?: string | null,
  likeDate?: string | null,
  _version?: number | null,
  likesLikeToProfileId?: string | null,
  likesLikeToPostId?: string | null,
};

export type DeleteLikesInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateFeedTypeInput = {
  id?: string | null,
  profileID?: string | null,
  followingID?: string | null,
  _version?: number | null,
  feedTypeFeedTypeToPostId?: string | null,
  feedTypeFeedTypeToProfileId?: string | null,
  feedTypeFeedTypeToFollowingId?: string | null,
};

export type ModelFeedTypeConditionInput = {
  profileID?: ModelIDInput | null,
  followingID?: ModelIDInput | null,
  and?: Array< ModelFeedTypeConditionInput | null > | null,
  or?: Array< ModelFeedTypeConditionInput | null > | null,
  not?: ModelFeedTypeConditionInput | null,
};

export type UpdateFeedTypeInput = {
  id: string,
  profileID?: string | null,
  followingID?: string | null,
  _version?: number | null,
  feedTypeFeedTypeToPostId?: string | null,
  feedTypeFeedTypeToProfileId?: string | null,
  feedTypeFeedTypeToFollowingId?: string | null,
};

export type DeleteFeedTypeInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateFollowingInput = {
  id?: string | null,
  profileID?: string | null,
  feedTypeID?: string | null,
  followingDate?: string | null,
  followsAll?: boolean | null,
  _version?: number | null,
  followingFollowingToProfileId?: string | null,
};

export type ModelFollowingConditionInput = {
  profileID?: ModelIDInput | null,
  feedTypeID?: ModelIDInput | null,
  followingDate?: ModelStringInput | null,
  followsAll?: ModelBooleanInput | null,
  and?: Array< ModelFollowingConditionInput | null > | null,
  or?: Array< ModelFollowingConditionInput | null > | null,
  not?: ModelFollowingConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateFollowingInput = {
  id: string,
  profileID?: string | null,
  feedTypeID?: string | null,
  followingDate?: string | null,
  followsAll?: boolean | null,
  _version?: number | null,
  followingFollowingToProfileId?: string | null,
};

export type DeleteFollowingInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreatePostInput = {
  id?: string | null,
  profileID?: string | null,
  feedTypeID?: string | null,
  postDate?: string | null,
  tags?: string | null,
  post?: string | null,
  _version?: number | null,
  postPostToProfileId?: string | null,
  postPostToFeedTypeId?: string | null,
};

export type ModelPostConditionInput = {
  profileID?: ModelIDInput | null,
  feedTypeID?: ModelIDInput | null,
  postDate?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  post?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type UpdatePostInput = {
  id: string,
  profileID?: string | null,
  feedTypeID?: string | null,
  postDate?: string | null,
  tags?: string | null,
  post?: string | null,
  _version?: number | null,
  postPostToProfileId?: string | null,
  postPostToFeedTypeId?: string | null,
};

export type DeletePostInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateProfileInput = {
  id?: string | null,
  name: string,
  phoneNum?: string | null,
  email: string,
  profilePic?: string | null,
  dob?: string | null,
  profileDate?: string | null,
  _version?: number | null,
};

export type ModelProfileConditionInput = {
  name?: ModelStringInput | null,
  phoneNum?: ModelStringInput | null,
  email?: ModelStringInput | null,
  profilePic?: ModelStringInput | null,
  dob?: ModelStringInput | null,
  profileDate?: ModelStringInput | null,
  and?: Array< ModelProfileConditionInput | null > | null,
  or?: Array< ModelProfileConditionInput | null > | null,
  not?: ModelProfileConditionInput | null,
};

export type UpdateProfileInput = {
  id: string,
  name?: string | null,
  phoneNum?: string | null,
  email?: string | null,
  profilePic?: string | null,
  dob?: string | null,
  profileDate?: string | null,
  _version?: number | null,
};

export type DeleteProfileInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelRepostFilterInput = {
  id?: ModelIDInput | null,
  profileID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  repostDate?: ModelStringInput | null,
  and?: Array< ModelRepostFilterInput | null > | null,
  or?: Array< ModelRepostFilterInput | null > | null,
  not?: ModelRepostFilterInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  profileID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  comment?: ModelStringInput | null,
  commentDate?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelLikesFilterInput = {
  id?: ModelIDInput | null,
  profileID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  likeDate?: ModelStringInput | null,
  and?: Array< ModelLikesFilterInput | null > | null,
  or?: Array< ModelLikesFilterInput | null > | null,
  not?: ModelLikesFilterInput | null,
};

export type ModelFeedTypeFilterInput = {
  id?: ModelIDInput | null,
  profileID?: ModelIDInput | null,
  followingID?: ModelIDInput | null,
  and?: Array< ModelFeedTypeFilterInput | null > | null,
  or?: Array< ModelFeedTypeFilterInput | null > | null,
  not?: ModelFeedTypeFilterInput | null,
};

export type ModelFollowingFilterInput = {
  id?: ModelIDInput | null,
  profileID?: ModelIDInput | null,
  feedTypeID?: ModelIDInput | null,
  followingDate?: ModelStringInput | null,
  followsAll?: ModelBooleanInput | null,
  and?: Array< ModelFollowingFilterInput | null > | null,
  or?: Array< ModelFollowingFilterInput | null > | null,
  not?: ModelFollowingFilterInput | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  profileID?: ModelIDInput | null,
  feedTypeID?: ModelIDInput | null,
  postDate?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  post?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelProfileFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  phoneNum?: ModelStringInput | null,
  email?: ModelStringInput | null,
  profilePic?: ModelStringInput | null,
  dob?: ModelStringInput | null,
  profileDate?: ModelStringInput | null,
  and?: Array< ModelProfileFilterInput | null > | null,
  or?: Array< ModelProfileFilterInput | null > | null,
  not?: ModelProfileFilterInput | null,
};

export type ModelProfileConnection = {
  __typename: "ModelProfileConnection",
  items?:  Array<Profile | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateRepostMutationVariables = {
  input?: CreateRepostInput,
  condition?: ModelRepostConditionInput | null,
};

export type CreateRepostMutation = {
  createRepost?:  {
    __typename: "Repost",
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
      __typename: "Post",
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
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdateRepostMutationVariables = {
  input?: UpdateRepostInput,
  condition?: ModelRepostConditionInput | null,
};

export type UpdateRepostMutation = {
  updateRepost?:  {
    __typename: "Repost",
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
      __typename: "Post",
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
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeleteRepostMutationVariables = {
  input?: DeleteRepostInput,
  condition?: ModelRepostConditionInput | null,
};

export type DeleteRepostMutation = {
  deleteRepost?:  {
    __typename: "Repost",
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
      __typename: "Post",
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
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  input?: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
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
      __typename: "Post",
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
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input?: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
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
      __typename: "Post",
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
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input?: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
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
      __typename: "Post",
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
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type CreateLikesMutationVariables = {
  input?: CreateLikesInput,
  condition?: ModelLikesConditionInput | null,
};

export type CreateLikesMutation = {
  createLikes?:  {
    __typename: "Likes",
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
      __typename: "Post",
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
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdateLikesMutationVariables = {
  input?: UpdateLikesInput,
  condition?: ModelLikesConditionInput | null,
};

export type UpdateLikesMutation = {
  updateLikes?:  {
    __typename: "Likes",
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
      __typename: "Post",
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
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeleteLikesMutationVariables = {
  input?: DeleteLikesInput,
  condition?: ModelLikesConditionInput | null,
};

export type DeleteLikesMutation = {
  deleteLikes?:  {
    __typename: "Likes",
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
      __typename: "Post",
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
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type CreateFeedTypeMutationVariables = {
  input?: CreateFeedTypeInput,
  condition?: ModelFeedTypeConditionInput | null,
};

export type CreateFeedTypeMutation = {
  createFeedType?:  {
    __typename: "FeedType",
    id: string,
    profileID?: string | null,
    followingID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FeedTypeToFollowing?:  {
      __typename: "Following",
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      followingDate?: string | null,
      followsAll?: boolean | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    FeedTypeToPost?:  {
      __typename: "Post",
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
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdateFeedTypeMutationVariables = {
  input?: UpdateFeedTypeInput,
  condition?: ModelFeedTypeConditionInput | null,
};

export type UpdateFeedTypeMutation = {
  updateFeedType?:  {
    __typename: "FeedType",
    id: string,
    profileID?: string | null,
    followingID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FeedTypeToFollowing?:  {
      __typename: "Following",
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      followingDate?: string | null,
      followsAll?: boolean | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    FeedTypeToPost?:  {
      __typename: "Post",
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
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeleteFeedTypeMutationVariables = {
  input?: DeleteFeedTypeInput,
  condition?: ModelFeedTypeConditionInput | null,
};

export type DeleteFeedTypeMutation = {
  deleteFeedType?:  {
    __typename: "FeedType",
    id: string,
    profileID?: string | null,
    followingID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FeedTypeToFollowing?:  {
      __typename: "Following",
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      followingDate?: string | null,
      followsAll?: boolean | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    FeedTypeToPost?:  {
      __typename: "Post",
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
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type CreateFollowingMutationVariables = {
  input?: CreateFollowingInput,
  condition?: ModelFollowingConditionInput | null,
};

export type CreateFollowingMutation = {
  createFollowing?:  {
    __typename: "Following",
    id: string,
    profileID?: string | null,
    feedTypeID?: string | null,
    followingDate?: string | null,
    followsAll?: boolean | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FollowingToFeedTypes?:  {
      __typename: "ModelFeedTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    FollowingToProfile?:  {
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdateFollowingMutationVariables = {
  input?: UpdateFollowingInput,
  condition?: ModelFollowingConditionInput | null,
};

export type UpdateFollowingMutation = {
  updateFollowing?:  {
    __typename: "Following",
    id: string,
    profileID?: string | null,
    feedTypeID?: string | null,
    followingDate?: string | null,
    followsAll?: boolean | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FollowingToFeedTypes?:  {
      __typename: "ModelFeedTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    FollowingToProfile?:  {
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeleteFollowingMutationVariables = {
  input?: DeleteFollowingInput,
  condition?: ModelFollowingConditionInput | null,
};

export type DeleteFollowingMutation = {
  deleteFollowing?:  {
    __typename: "Following",
    id: string,
    profileID?: string | null,
    feedTypeID?: string | null,
    followingDate?: string | null,
    followsAll?: boolean | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FollowingToFeedTypes?:  {
      __typename: "ModelFeedTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    FollowingToProfile?:  {
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type CreatePostMutationVariables = {
  input?: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
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
      __typename: "ModelRepostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToComments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToLikes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToFeedType?:  {
      __typename: "FeedType",
      id: string,
      profileID?: string | null,
      followingID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    PostToProfile?:  {
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input?: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
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
      __typename: "ModelRepostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToComments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToLikes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToFeedType?:  {
      __typename: "FeedType",
      id: string,
      profileID?: string | null,
      followingID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    PostToProfile?:  {
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input?: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
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
      __typename: "ModelRepostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToComments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToLikes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToFeedType?:  {
      __typename: "FeedType",
      id: string,
      profileID?: string | null,
      followingID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    PostToProfile?:  {
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type CreateProfileMutationVariables = {
  input?: CreateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type CreateProfileMutation = {
  createProfile?:  {
    __typename: "Profile",
    id: string,
    name: string,
    phoneNum?: string | null,
    email: string,
    profilePic?: string | null,
    dob?: string | null,
    profileDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    ProfileToReposts?:  {
      __typename: "ModelRepostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToComments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToLikes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFeedTypes?:  {
      __typename: "ModelFeedTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFollowings?:  {
      __typename: "ModelFollowingConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToPosts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type UpdateProfileMutationVariables = {
  input?: UpdateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type UpdateProfileMutation = {
  updateProfile?:  {
    __typename: "Profile",
    id: string,
    name: string,
    phoneNum?: string | null,
    email: string,
    profilePic?: string | null,
    dob?: string | null,
    profileDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    ProfileToReposts?:  {
      __typename: "ModelRepostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToComments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToLikes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFeedTypes?:  {
      __typename: "ModelFeedTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFollowings?:  {
      __typename: "ModelFollowingConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToPosts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type DeleteProfileMutationVariables = {
  input?: DeleteProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type DeleteProfileMutation = {
  deleteProfile?:  {
    __typename: "Profile",
    id: string,
    name: string,
    phoneNum?: string | null,
    email: string,
    profilePic?: string | null,
    dob?: string | null,
    profileDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    ProfileToReposts?:  {
      __typename: "ModelRepostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToComments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToLikes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFeedTypes?:  {
      __typename: "ModelFeedTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFollowings?:  {
      __typename: "ModelFollowingConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToPosts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type GetRepostQueryVariables = {
  id?: string,
};

export type GetRepostQuery = {
  getRepost?:  {
    __typename: "Repost",
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
      __typename: "Post",
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
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type ListRepostsQueryVariables = {
  filter?: ModelRepostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRepostsQuery = {
  listReposts?:  {
    __typename: "ModelRepostConnection",
    items?:  Array< {
      __typename: "Repost",
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

export type SyncRepostsQueryVariables = {
  filter?: ModelRepostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncRepostsQuery = {
  syncReposts?:  {
    __typename: "ModelRepostConnection",
    items?:  Array< {
      __typename: "Repost",
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

export type GetCommentQueryVariables = {
  id?: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
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
      __typename: "Post",
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
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items?:  Array< {
      __typename: "Comment",
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

export type SyncCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCommentsQuery = {
  syncComments?:  {
    __typename: "ModelCommentConnection",
    items?:  Array< {
      __typename: "Comment",
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

export type GetLikesQueryVariables = {
  id?: string,
};

export type GetLikesQuery = {
  getLikes?:  {
    __typename: "Likes",
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
      __typename: "Post",
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
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type ListLikessQueryVariables = {
  filter?: ModelLikesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLikessQuery = {
  listLikess?:  {
    __typename: "ModelLikesConnection",
    items?:  Array< {
      __typename: "Likes",
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

export type SyncLikesQueryVariables = {
  filter?: ModelLikesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncLikesQuery = {
  syncLikes?:  {
    __typename: "ModelLikesConnection",
    items?:  Array< {
      __typename: "Likes",
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

export type GetFeedTypeQueryVariables = {
  id?: string,
};

export type GetFeedTypeQuery = {
  getFeedType?:  {
    __typename: "FeedType",
    id: string,
    profileID?: string | null,
    followingID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FeedTypeToFollowing?:  {
      __typename: "Following",
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      followingDate?: string | null,
      followsAll?: boolean | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    FeedTypeToPost?:  {
      __typename: "Post",
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
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type ListFeedTypesQueryVariables = {
  filter?: ModelFeedTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFeedTypesQuery = {
  listFeedTypes?:  {
    __typename: "ModelFeedTypeConnection",
    items?:  Array< {
      __typename: "FeedType",
      id: string,
      profileID?: string | null,
      followingID?: string | null,
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

export type SyncFeedTypesQueryVariables = {
  filter?: ModelFeedTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncFeedTypesQuery = {
  syncFeedTypes?:  {
    __typename: "ModelFeedTypeConnection",
    items?:  Array< {
      __typename: "FeedType",
      id: string,
      profileID?: string | null,
      followingID?: string | null,
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

export type GetFollowingQueryVariables = {
  id?: string,
};

export type GetFollowingQuery = {
  getFollowing?:  {
    __typename: "Following",
    id: string,
    profileID?: string | null,
    feedTypeID?: string | null,
    followingDate?: string | null,
    followsAll?: boolean | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FollowingToFeedTypes?:  {
      __typename: "ModelFeedTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    FollowingToProfile?:  {
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type ListFollowingsQueryVariables = {
  filter?: ModelFollowingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFollowingsQuery = {
  listFollowings?:  {
    __typename: "ModelFollowingConnection",
    items?:  Array< {
      __typename: "Following",
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      followingDate?: string | null,
      followsAll?: boolean | null,
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

export type SyncFollowingsQueryVariables = {
  filter?: ModelFollowingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncFollowingsQuery = {
  syncFollowings?:  {
    __typename: "ModelFollowingConnection",
    items?:  Array< {
      __typename: "Following",
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      followingDate?: string | null,
      followsAll?: boolean | null,
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

export type GetPostQueryVariables = {
  id?: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
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
      __typename: "ModelRepostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToComments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToLikes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToFeedType?:  {
      __typename: "FeedType",
      id: string,
      profileID?: string | null,
      followingID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    PostToProfile?:  {
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items?:  Array< {
      __typename: "Post",
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

export type SyncPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPostsQuery = {
  syncPosts?:  {
    __typename: "ModelPostConnection",
    items?:  Array< {
      __typename: "Post",
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

export type ListProfilesQueryVariables = {
  filter?: ModelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProfilesQuery = {
  listProfiles?:  {
    __typename: "ModelProfileConnection",
    items?:  Array< {
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
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

export type GetProfileQueryVariables = {
  id?: string,
};

export type GetProfileQuery = {
  getProfile?:  {
    __typename: "Profile",
    id: string,
    name: string,
    phoneNum?: string | null,
    email: string,
    profilePic?: string | null,
    dob?: string | null,
    profileDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    ProfileToReposts?:  {
      __typename: "ModelRepostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToComments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToLikes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFeedTypes?:  {
      __typename: "ModelFeedTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFollowings?:  {
      __typename: "ModelFollowingConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToPosts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type SyncProfilesQueryVariables = {
  filter?: ModelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProfilesQuery = {
  syncProfiles?:  {
    __typename: "ModelProfileConnection",
    items?:  Array< {
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
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

export type OnCreateRepostSubscription = {
  onCreateRepost?:  {
    __typename: "Repost",
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
      __typename: "Post",
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
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdateRepostSubscription = {
  onUpdateRepost?:  {
    __typename: "Repost",
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
      __typename: "Post",
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
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeleteRepostSubscription = {
  onDeleteRepost?:  {
    __typename: "Repost",
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
      __typename: "Post",
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
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
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
      __typename: "Post",
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
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
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
      __typename: "Post",
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
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
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
      __typename: "Post",
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
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreateLikesSubscription = {
  onCreateLikes?:  {
    __typename: "Likes",
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
      __typename: "Post",
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
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdateLikesSubscription = {
  onUpdateLikes?:  {
    __typename: "Likes",
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
      __typename: "Post",
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
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeleteLikesSubscription = {
  onDeleteLikes?:  {
    __typename: "Likes",
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
      __typename: "Post",
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
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreateFeedTypeSubscription = {
  onCreateFeedType?:  {
    __typename: "FeedType",
    id: string,
    profileID?: string | null,
    followingID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FeedTypeToFollowing?:  {
      __typename: "Following",
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      followingDate?: string | null,
      followsAll?: boolean | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    FeedTypeToPost?:  {
      __typename: "Post",
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
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdateFeedTypeSubscription = {
  onUpdateFeedType?:  {
    __typename: "FeedType",
    id: string,
    profileID?: string | null,
    followingID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FeedTypeToFollowing?:  {
      __typename: "Following",
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      followingDate?: string | null,
      followsAll?: boolean | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    FeedTypeToPost?:  {
      __typename: "Post",
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
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeleteFeedTypeSubscription = {
  onDeleteFeedType?:  {
    __typename: "FeedType",
    id: string,
    profileID?: string | null,
    followingID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FeedTypeToFollowing?:  {
      __typename: "Following",
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      followingDate?: string | null,
      followsAll?: boolean | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    FeedTypeToPost?:  {
      __typename: "Post",
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
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreateFollowingSubscription = {
  onCreateFollowing?:  {
    __typename: "Following",
    id: string,
    profileID?: string | null,
    feedTypeID?: string | null,
    followingDate?: string | null,
    followsAll?: boolean | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FollowingToFeedTypes?:  {
      __typename: "ModelFeedTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    FollowingToProfile?:  {
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdateFollowingSubscription = {
  onUpdateFollowing?:  {
    __typename: "Following",
    id: string,
    profileID?: string | null,
    feedTypeID?: string | null,
    followingDate?: string | null,
    followsAll?: boolean | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FollowingToFeedTypes?:  {
      __typename: "ModelFeedTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    FollowingToProfile?:  {
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeleteFollowingSubscription = {
  onDeleteFollowing?:  {
    __typename: "Following",
    id: string,
    profileID?: string | null,
    feedTypeID?: string | null,
    followingDate?: string | null,
    followsAll?: boolean | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FollowingToFeedTypes?:  {
      __typename: "ModelFeedTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    FollowingToProfile?:  {
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
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
      __typename: "ModelRepostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToComments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToLikes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToFeedType?:  {
      __typename: "FeedType",
      id: string,
      profileID?: string | null,
      followingID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    PostToProfile?:  {
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
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
      __typename: "ModelRepostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToComments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToLikes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToFeedType?:  {
      __typename: "FeedType",
      id: string,
      profileID?: string | null,
      followingID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    PostToProfile?:  {
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
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
      __typename: "ModelRepostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToComments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToLikes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToFeedType?:  {
      __typename: "FeedType",
      id: string,
      profileID?: string | null,
      followingID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    PostToProfile?:  {
      __typename: "Profile",
      id: string,
      name: string,
      phoneNum?: string | null,
      email: string,
      profilePic?: string | null,
      dob?: string | null,
      profileDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreateProfileSubscription = {
  onCreateProfile?:  {
    __typename: "Profile",
    id: string,
    name: string,
    phoneNum?: string | null,
    email: string,
    profilePic?: string | null,
    dob?: string | null,
    profileDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    ProfileToReposts?:  {
      __typename: "ModelRepostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToComments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToLikes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFeedTypes?:  {
      __typename: "ModelFeedTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFollowings?:  {
      __typename: "ModelFollowingConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToPosts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnUpdateProfileSubscription = {
  onUpdateProfile?:  {
    __typename: "Profile",
    id: string,
    name: string,
    phoneNum?: string | null,
    email: string,
    profilePic?: string | null,
    dob?: string | null,
    profileDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    ProfileToReposts?:  {
      __typename: "ModelRepostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToComments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToLikes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFeedTypes?:  {
      __typename: "ModelFeedTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFollowings?:  {
      __typename: "ModelFollowingConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToPosts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnDeleteProfileSubscription = {
  onDeleteProfile?:  {
    __typename: "Profile",
    id: string,
    name: string,
    phoneNum?: string | null,
    email: string,
    profilePic?: string | null,
    dob?: string | null,
    profileDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    ProfileToReposts?:  {
      __typename: "ModelRepostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToComments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToLikes?:  {
      __typename: "ModelLikesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFeedTypes?:  {
      __typename: "ModelFeedTypeConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFollowings?:  {
      __typename: "ModelFollowingConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToPosts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};
