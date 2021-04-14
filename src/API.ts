/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

<<<<<<< HEAD
export type CreateRepostV3Input = {
=======
export type CreateRepostInput = {
>>>>>>> 11b0e76 (trying the commit again)
  id?: string | null,
  profileID?: string | null,
  postID?: string | null,
  repostDate?: string | null,
  _version?: number | null,
<<<<<<< HEAD
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
=======
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
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type RepostV3 = {
  __typename: "RepostV3",
=======
export type Repost = {
  __typename: "Repost",
>>>>>>> 11b0e76 (trying the commit again)
  id?: string,
  profileID?: string | null,
  postID?: string | null,
  repostDate?: string | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
<<<<<<< HEAD
  RepostToPost?: PostV3,
  RepostToProfile?: ProfileV3,
};

export type PostV3 = {
  __typename: "PostV3",
=======
  RepostToPost?: Post,
  RepostToProfile?: Profile,
};

export type Post = {
  __typename: "Post",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
  PostToReposts?: ModelRepostV3Connection,
  PostToComments?: ModelCommentV3Connection,
  PostToLikes?: ModelLikesV3Connection,
  PostToFeedType?: FeedTypeV3,
  PostToProfile?: ProfileV3,
};

export type ModelRepostV3Connection = {
  __typename: "ModelRepostV3Connection",
  items?:  Array<RepostV3 | null > | null,
=======
  PostToReposts?: ModelRepostConnection,
  PostToComments?: ModelCommentConnection,
  PostToLikes?: ModelLikesConnection,
  PostToFeedType?: FeedType,
  PostToProfile?: Profile,
};

export type ModelRepostConnection = {
  __typename: "ModelRepostConnection",
  items?:  Array<Repost | null > | null,
>>>>>>> 11b0e76 (trying the commit again)
  nextToken?: string | null,
  startedAt?: number | null,
};

<<<<<<< HEAD
export type ModelCommentV3Connection = {
  __typename: "ModelCommentV3Connection",
  items?:  Array<CommentV3 | null > | null,
=======
export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items?:  Array<Comment | null > | null,
>>>>>>> 11b0e76 (trying the commit again)
  nextToken?: string | null,
  startedAt?: number | null,
};

<<<<<<< HEAD
export type CommentV3 = {
  __typename: "CommentV3",
=======
export type Comment = {
  __typename: "Comment",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
  CommentToPost?: PostV3,
  CommentToProfile?: ProfileV3,
};

export type ProfileV3 = {
  __typename: "ProfileV3",
=======
  CommentToPost?: Post,
  CommentToProfile?: Profile,
};

export type Profile = {
  __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 11b0e76 (trying the commit again)
  nextToken?: string | null,
  startedAt?: number | null,
};

<<<<<<< HEAD
export type LikesV3 = {
  __typename: "LikesV3",
=======
export type Likes = {
  __typename: "Likes",
>>>>>>> 11b0e76 (trying the commit again)
  id?: string,
  profileID?: string | null,
  postID?: string | null,
  likeDate?: string | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
<<<<<<< HEAD
  LikeToPost?: PostV3,
  LikeToProfile?: ProfileV3,
};

export type ModelFeedTypeV3Connection = {
  __typename: "ModelFeedTypeV3Connection",
  items?:  Array<FeedTypeV3 | null > | null,
=======
  LikeToPost?: Post,
  LikeToProfile?: Profile,
};

export type ModelFeedTypeConnection = {
  __typename: "ModelFeedTypeConnection",
  items?:  Array<FeedType | null > | null,
>>>>>>> 11b0e76 (trying the commit again)
  nextToken?: string | null,
  startedAt?: number | null,
};

<<<<<<< HEAD
export type FeedTypeV3 = {
  __typename: "FeedTypeV3",
  id?: string,
  profileID?: string | null,
  followingID?: string | null,
  feedName?: string | null,
=======
export type FeedType = {
  __typename: "FeedType",
  id?: string,
  profileID?: string | null,
  followingID?: string | null,
>>>>>>> 11b0e76 (trying the commit again)
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
<<<<<<< HEAD
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
=======
  FeedTypeToFollowing?: Following,
  FeedTypeToPost?: Post,
  FeedTypeToProfile?: Profile,
};

export type Following = {
  __typename: "Following",
>>>>>>> 11b0e76 (trying the commit again)
  id?: string,
  profileID?: string | null,
  feedTypeID?: string | null,
  followingDate?: string | null,
  followsAll?: boolean | null,
<<<<<<< HEAD
  feedtype2ID?: string | null,
=======
>>>>>>> 11b0e76 (trying the commit again)
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
<<<<<<< HEAD
  FollowingToFeedTypes?: ModelFeedTypeV3Connection,
  FollowingToProfile?: ProfileV3,
};

export type ModelPostV3Connection = {
  __typename: "ModelPostV3Connection",
  items?:  Array<PostV3 | null > | null,
=======
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
>>>>>>> 11b0e76 (trying the commit again)
  nextToken?: string | null,
  startedAt?: number | null,
};

<<<<<<< HEAD
export type UpdateRepostV3Input = {
=======
export type UpdateRepostInput = {
>>>>>>> 11b0e76 (trying the commit again)
  id: string,
  profileID?: string | null,
  postID?: string | null,
  repostDate?: string | null,
  _version?: number | null,
<<<<<<< HEAD
  repostV3RepostToProfileId?: string | null,
  repostV3RepostToPostId?: string | null,
};

export type DeleteRepostV3Input = {
  id: string,
  _version?: number | null,
};

export type CreateCommentV3Input = {
=======
  repostRepostToProfileId?: string | null,
  repostRepostToPostId?: string | null,
};

export type DeleteRepostInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateCommentInput = {
>>>>>>> 11b0e76 (trying the commit again)
  id?: string | null,
  profileID?: string | null,
  postID?: string | null,
  comment?: string | null,
  commentDate?: string | null,
  _version?: number | null,
<<<<<<< HEAD
  commentV3CommentToProfileId?: string | null,
  commentV3CommentToPostId?: string | null,
};

export type ModelCommentV3ConditionInput = {
=======
  commentCommentToProfileId?: string | null,
  commentCommentToPostId?: string | null,
};

export type ModelCommentConditionInput = {
>>>>>>> 11b0e76 (trying the commit again)
  profileID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  comment?: ModelStringInput | null,
  commentDate?: ModelStringInput | null,
<<<<<<< HEAD
  and?: Array< ModelCommentV3ConditionInput | null > | null,
  or?: Array< ModelCommentV3ConditionInput | null > | null,
  not?: ModelCommentV3ConditionInput | null,
};

export type UpdateCommentV3Input = {
=======
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type UpdateCommentInput = {
>>>>>>> 11b0e76 (trying the commit again)
  id: string,
  profileID?: string | null,
  postID?: string | null,
  comment?: string | null,
  commentDate?: string | null,
  _version?: number | null,
<<<<<<< HEAD
  commentV3CommentToProfileId?: string | null,
  commentV3CommentToPostId?: string | null,
};

export type DeleteCommentV3Input = {
  id: string,
  _version?: number | null,
};

export type CreateLikesV3Input = {
=======
  commentCommentToProfileId?: string | null,
  commentCommentToPostId?: string | null,
};

export type DeleteCommentInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateLikesInput = {
>>>>>>> 11b0e76 (trying the commit again)
  id?: string | null,
  profileID?: string | null,
  postID?: string | null,
  likeDate?: string | null,
  _version?: number | null,
<<<<<<< HEAD
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
=======
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
>>>>>>> 11b0e76 (trying the commit again)
  id: string,
  profileID?: string | null,
  postID?: string | null,
  likeDate?: string | null,
  _version?: number | null,
<<<<<<< HEAD
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
=======
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
>>>>>>> 11b0e76 (trying the commit again)
  id?: string | null,
  profileID?: string | null,
  feedTypeID?: string | null,
  followingDate?: string | null,
  followsAll?: boolean | null,
<<<<<<< HEAD
  feedtype2ID?: string | null,
  _version?: number | null,
  followingV3FollowingToProfileId?: string | null,
};

export type ModelFollowingV3ConditionInput = {
=======
  _version?: number | null,
  followingFollowingToProfileId?: string | null,
};

export type ModelFollowingConditionInput = {
>>>>>>> 11b0e76 (trying the commit again)
  profileID?: ModelIDInput | null,
  feedTypeID?: ModelIDInput | null,
  followingDate?: ModelStringInput | null,
  followsAll?: ModelBooleanInput | null,
<<<<<<< HEAD
  feedtype2ID?: ModelIDInput | null,
  and?: Array< ModelFollowingV3ConditionInput | null > | null,
  or?: Array< ModelFollowingV3ConditionInput | null > | null,
  not?: ModelFollowingV3ConditionInput | null,
=======
  and?: Array< ModelFollowingConditionInput | null > | null,
  or?: Array< ModelFollowingConditionInput | null > | null,
  not?: ModelFollowingConditionInput | null,
>>>>>>> 11b0e76 (trying the commit again)
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

<<<<<<< HEAD
export type UpdateFollowingV3Input = {
=======
export type UpdateFollowingInput = {
>>>>>>> 11b0e76 (trying the commit again)
  id: string,
  profileID?: string | null,
  feedTypeID?: string | null,
  followingDate?: string | null,
  followsAll?: boolean | null,
<<<<<<< HEAD
  feedtype2ID?: string | null,
  _version?: number | null,
  followingV3FollowingToProfileId?: string | null,
};

export type DeleteFollowingV3Input = {
  id: string,
  _version?: number | null,
};

export type CreatePostV3Input = {
=======
  _version?: number | null,
  followingFollowingToProfileId?: string | null,
};

export type DeleteFollowingInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreatePostInput = {
>>>>>>> 11b0e76 (trying the commit again)
  id?: string | null,
  profileID?: string | null,
  feedTypeID?: string | null,
  postDate?: string | null,
  tags?: string | null,
  post?: string | null,
  _version?: number | null,
<<<<<<< HEAD
  postV3PostToProfileId?: string | null,
  postV3PostToFeedTypeId?: string | null,
};

export type ModelPostV3ConditionInput = {
=======
  postPostToProfileId?: string | null,
  postPostToFeedTypeId?: string | null,
};

export type ModelPostConditionInput = {
>>>>>>> 11b0e76 (trying the commit again)
  profileID?: ModelIDInput | null,
  feedTypeID?: ModelIDInput | null,
  postDate?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  post?: ModelStringInput | null,
<<<<<<< HEAD
  and?: Array< ModelPostV3ConditionInput | null > | null,
  or?: Array< ModelPostV3ConditionInput | null > | null,
  not?: ModelPostV3ConditionInput | null,
};

export type UpdatePostV3Input = {
=======
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type UpdatePostInput = {
>>>>>>> 11b0e76 (trying the commit again)
  id: string,
  profileID?: string | null,
  feedTypeID?: string | null,
  postDate?: string | null,
  tags?: string | null,
  post?: string | null,
  _version?: number | null,
<<<<<<< HEAD
  postV3PostToProfileId?: string | null,
  postV3PostToFeedTypeId?: string | null,
};

export type DeletePostV3Input = {
  id: string,
  _version?: number | null,
};

export type CreateProfileV3Input = {
=======
  postPostToProfileId?: string | null,
  postPostToFeedTypeId?: string | null,
};

export type DeletePostInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateProfileInput = {
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type ModelProfileV3ConditionInput = {
=======
export type ModelProfileConditionInput = {
>>>>>>> 11b0e76 (trying the commit again)
  name?: ModelStringInput | null,
  phoneNum?: ModelStringInput | null,
  email?: ModelStringInput | null,
  profilePic?: ModelStringInput | null,
  dob?: ModelStringInput | null,
  profileDate?: ModelStringInput | null,
  bio?: ModelStringInput | null,
<<<<<<< HEAD
  and?: Array< ModelProfileV3ConditionInput | null > | null,
  or?: Array< ModelProfileV3ConditionInput | null > | null,
  not?: ModelProfileV3ConditionInput | null,
};

export type UpdateProfileV3Input = {
=======
  and?: Array< ModelProfileConditionInput | null > | null,
  or?: Array< ModelProfileConditionInput | null > | null,
  not?: ModelProfileConditionInput | null,
};

export type UpdateProfileInput = {
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type DeleteProfileV3Input = {
  id: string,
  _version?: number | null,
};

export type ModelRepostV3FilterInput = {
=======
export type DeleteProfileInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelRepostFilterInput = {
>>>>>>> 11b0e76 (trying the commit again)
  id?: ModelIDInput | null,
  profileID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  repostDate?: ModelStringInput | null,
<<<<<<< HEAD
  and?: Array< ModelRepostV3FilterInput | null > | null,
  or?: Array< ModelRepostV3FilterInput | null > | null,
  not?: ModelRepostV3FilterInput | null,
};

export type ModelCommentV3FilterInput = {
=======
  and?: Array< ModelRepostFilterInput | null > | null,
  or?: Array< ModelRepostFilterInput | null > | null,
  not?: ModelRepostFilterInput | null,
};

export type ModelCommentFilterInput = {
>>>>>>> 11b0e76 (trying the commit again)
  id?: ModelIDInput | null,
  profileID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  comment?: ModelStringInput | null,
  commentDate?: ModelStringInput | null,
<<<<<<< HEAD
  and?: Array< ModelCommentV3FilterInput | null > | null,
  or?: Array< ModelCommentV3FilterInput | null > | null,
  not?: ModelCommentV3FilterInput | null,
};

export type ModelLikesV3FilterInput = {
=======
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelLikesFilterInput = {
>>>>>>> 11b0e76 (trying the commit again)
  id?: ModelIDInput | null,
  profileID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  likeDate?: ModelStringInput | null,
<<<<<<< HEAD
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
=======
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
>>>>>>> 11b0e76 (trying the commit again)
  id?: ModelIDInput | null,
  profileID?: ModelIDInput | null,
  feedTypeID?: ModelIDInput | null,
  followingDate?: ModelStringInput | null,
  followsAll?: ModelBooleanInput | null,
<<<<<<< HEAD
  feedtype2ID?: ModelIDInput | null,
  and?: Array< ModelFollowingV3FilterInput | null > | null,
  or?: Array< ModelFollowingV3FilterInput | null > | null,
  not?: ModelFollowingV3FilterInput | null,
};

export type ModelPostV3FilterInput = {
=======
  and?: Array< ModelFollowingFilterInput | null > | null,
  or?: Array< ModelFollowingFilterInput | null > | null,
  not?: ModelFollowingFilterInput | null,
};

export type ModelPostFilterInput = {
>>>>>>> 11b0e76 (trying the commit again)
  id?: ModelIDInput | null,
  profileID?: ModelIDInput | null,
  feedTypeID?: ModelIDInput | null,
  postDate?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  post?: ModelStringInput | null,
<<<<<<< HEAD
  and?: Array< ModelPostV3FilterInput | null > | null,
  or?: Array< ModelPostV3FilterInput | null > | null,
  not?: ModelPostV3FilterInput | null,
};

export type ModelProfileV3FilterInput = {
=======
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelProfileFilterInput = {
>>>>>>> 11b0e76 (trying the commit again)
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  phoneNum?: ModelStringInput | null,
  email?: ModelStringInput | null,
  profilePic?: ModelStringInput | null,
  dob?: ModelStringInput | null,
  profileDate?: ModelStringInput | null,
  bio?: ModelStringInput | null,
<<<<<<< HEAD
  and?: Array< ModelProfileV3FilterInput | null > | null,
  or?: Array< ModelProfileV3FilterInput | null > | null,
  not?: ModelProfileV3FilterInput | null,
};

export type ModelProfileV3Connection = {
  __typename: "ModelProfileV3Connection",
  items?:  Array<ProfileV3 | null > | null,
=======
  and?: Array< ModelProfileFilterInput | null > | null,
  or?: Array< ModelProfileFilterInput | null > | null,
  not?: ModelProfileFilterInput | null,
};

export type ModelProfileConnection = {
  __typename: "ModelProfileConnection",
  items?:  Array<Profile | null > | null,
>>>>>>> 11b0e76 (trying the commit again)
  nextToken?: string | null,
  startedAt?: number | null,
};

<<<<<<< HEAD
export type CreateRepostV3MutationVariables = {
  input?: CreateRepostV3Input,
  condition?: ModelRepostV3ConditionInput | null,
};

export type CreateRepostV3Mutation = {
  createRepostV3?:  {
    __typename: "RepostV3",
=======
export type CreateRepostMutationVariables = {
  input?: CreateRepostInput,
  condition?: ModelRepostConditionInput | null,
};

export type CreateRepostMutation = {
  createRepost?:  {
    __typename: "Repost",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "PostV3",
=======
      __typename: "Post",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type UpdateRepostV3MutationVariables = {
  input?: UpdateRepostV3Input,
  condition?: ModelRepostV3ConditionInput | null,
};

export type UpdateRepostV3Mutation = {
  updateRepostV3?:  {
    __typename: "RepostV3",
=======
export type UpdateRepostMutationVariables = {
  input?: UpdateRepostInput,
  condition?: ModelRepostConditionInput | null,
};

export type UpdateRepostMutation = {
  updateRepost?:  {
    __typename: "Repost",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "PostV3",
=======
      __typename: "Post",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type DeleteRepostV3MutationVariables = {
  input?: DeleteRepostV3Input,
  condition?: ModelRepostV3ConditionInput | null,
};

export type DeleteRepostV3Mutation = {
  deleteRepostV3?:  {
    __typename: "RepostV3",
=======
export type DeleteRepostMutationVariables = {
  input?: DeleteRepostInput,
  condition?: ModelRepostConditionInput | null,
};

export type DeleteRepostMutation = {
  deleteRepost?:  {
    __typename: "Repost",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "PostV3",
=======
      __typename: "Post",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type CreateCommentV3MutationVariables = {
  input?: CreateCommentV3Input,
  condition?: ModelCommentV3ConditionInput | null,
};

export type CreateCommentV3Mutation = {
  createCommentV3?:  {
    __typename: "CommentV3",
=======
export type CreateCommentMutationVariables = {
  input?: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "PostV3",
=======
      __typename: "Post",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type UpdateCommentV3MutationVariables = {
  input?: UpdateCommentV3Input,
  condition?: ModelCommentV3ConditionInput | null,
};

export type UpdateCommentV3Mutation = {
  updateCommentV3?:  {
    __typename: "CommentV3",
=======
export type UpdateCommentMutationVariables = {
  input?: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "PostV3",
=======
      __typename: "Post",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type DeleteCommentV3MutationVariables = {
  input?: DeleteCommentV3Input,
  condition?: ModelCommentV3ConditionInput | null,
};

export type DeleteCommentV3Mutation = {
  deleteCommentV3?:  {
    __typename: "CommentV3",
=======
export type DeleteCommentMutationVariables = {
  input?: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "PostV3",
=======
      __typename: "Post",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type CreateLikesV3MutationVariables = {
  input?: CreateLikesV3Input,
  condition?: ModelLikesV3ConditionInput | null,
};

export type CreateLikesV3Mutation = {
  createLikesV3?:  {
    __typename: "LikesV3",
=======
export type CreateLikesMutationVariables = {
  input?: CreateLikesInput,
  condition?: ModelLikesConditionInput | null,
};

export type CreateLikesMutation = {
  createLikes?:  {
    __typename: "Likes",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "PostV3",
=======
      __typename: "Post",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type UpdateLikesV3MutationVariables = {
  input?: UpdateLikesV3Input,
  condition?: ModelLikesV3ConditionInput | null,
};

export type UpdateLikesV3Mutation = {
  updateLikesV3?:  {
    __typename: "LikesV3",
=======
export type UpdateLikesMutationVariables = {
  input?: UpdateLikesInput,
  condition?: ModelLikesConditionInput | null,
};

export type UpdateLikesMutation = {
  updateLikes?:  {
    __typename: "Likes",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "PostV3",
=======
      __typename: "Post",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type DeleteLikesV3MutationVariables = {
  input?: DeleteLikesV3Input,
  condition?: ModelLikesV3ConditionInput | null,
};

export type DeleteLikesV3Mutation = {
  deleteLikesV3?:  {
    __typename: "LikesV3",
=======
export type DeleteLikesMutationVariables = {
  input?: DeleteLikesInput,
  condition?: ModelLikesConditionInput | null,
};

export type DeleteLikesMutation = {
  deleteLikes?:  {
    __typename: "Likes",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "PostV3",
=======
      __typename: "Post",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
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
=======
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
>>>>>>> 11b0e76 (trying the commit again)
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FeedTypeToFollowing?:  {
<<<<<<< HEAD
      __typename: "ModelFollowingV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    FeedTypeToPost?:  {
      __typename: "PostV3",
=======
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
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
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
=======
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
>>>>>>> 11b0e76 (trying the commit again)
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FeedTypeToFollowing?:  {
<<<<<<< HEAD
      __typename: "ModelFollowingV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    FeedTypeToPost?:  {
      __typename: "PostV3",
=======
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
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
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
=======
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
>>>>>>> 11b0e76 (trying the commit again)
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FeedTypeToFollowing?:  {
<<<<<<< HEAD
      __typename: "ModelFollowingV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    FeedTypeToPost?:  {
      __typename: "PostV3",
=======
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
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type CreateFollowingV3MutationVariables = {
  input?: CreateFollowingV3Input,
  condition?: ModelFollowingV3ConditionInput | null,
};

export type CreateFollowingV3Mutation = {
  createFollowingV3?:  {
    __typename: "FollowingV3",
=======
export type CreateFollowingMutationVariables = {
  input?: CreateFollowingInput,
  condition?: ModelFollowingConditionInput | null,
};

export type CreateFollowingMutation = {
  createFollowing?:  {
    __typename: "Following",
>>>>>>> 11b0e76 (trying the commit again)
    id: string,
    profileID?: string | null,
    feedTypeID?: string | null,
    followingDate?: string | null,
    followsAll?: boolean | null,
<<<<<<< HEAD
    feedtype2ID?: string | null,
=======
>>>>>>> 11b0e76 (trying the commit again)
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FollowingToFeedTypes?:  {
<<<<<<< HEAD
      __typename: "ModelFeedTypeV3Connection",
=======
      __typename: "ModelFeedTypeConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    FollowingToProfile?:  {
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type UpdateFollowingV3MutationVariables = {
  input?: UpdateFollowingV3Input,
  condition?: ModelFollowingV3ConditionInput | null,
};

export type UpdateFollowingV3Mutation = {
  updateFollowingV3?:  {
    __typename: "FollowingV3",
=======
export type UpdateFollowingMutationVariables = {
  input?: UpdateFollowingInput,
  condition?: ModelFollowingConditionInput | null,
};

export type UpdateFollowingMutation = {
  updateFollowing?:  {
    __typename: "Following",
>>>>>>> 11b0e76 (trying the commit again)
    id: string,
    profileID?: string | null,
    feedTypeID?: string | null,
    followingDate?: string | null,
    followsAll?: boolean | null,
<<<<<<< HEAD
    feedtype2ID?: string | null,
=======
>>>>>>> 11b0e76 (trying the commit again)
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FollowingToFeedTypes?:  {
<<<<<<< HEAD
      __typename: "ModelFeedTypeV3Connection",
=======
      __typename: "ModelFeedTypeConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    FollowingToProfile?:  {
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type DeleteFollowingV3MutationVariables = {
  input?: DeleteFollowingV3Input,
  condition?: ModelFollowingV3ConditionInput | null,
};

export type DeleteFollowingV3Mutation = {
  deleteFollowingV3?:  {
    __typename: "FollowingV3",
=======
export type DeleteFollowingMutationVariables = {
  input?: DeleteFollowingInput,
  condition?: ModelFollowingConditionInput | null,
};

export type DeleteFollowingMutation = {
  deleteFollowing?:  {
    __typename: "Following",
>>>>>>> 11b0e76 (trying the commit again)
    id: string,
    profileID?: string | null,
    feedTypeID?: string | null,
    followingDate?: string | null,
    followsAll?: boolean | null,
<<<<<<< HEAD
    feedtype2ID?: string | null,
=======
>>>>>>> 11b0e76 (trying the commit again)
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FollowingToFeedTypes?:  {
<<<<<<< HEAD
      __typename: "ModelFeedTypeV3Connection",
=======
      __typename: "ModelFeedTypeConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    FollowingToProfile?:  {
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type CreatePostV3MutationVariables = {
  input?: CreatePostV3Input,
  condition?: ModelPostV3ConditionInput | null,
};

export type CreatePostV3Mutation = {
  createPostV3?:  {
    __typename: "PostV3",
=======
export type CreatePostMutationVariables = {
  input?: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ModelRepostV3Connection",
=======
      __typename: "ModelRepostConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToComments?:  {
<<<<<<< HEAD
      __typename: "ModelCommentV3Connection",
=======
      __typename: "ModelCommentConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToLikes?:  {
<<<<<<< HEAD
      __typename: "ModelLikesV3Connection",
=======
      __typename: "ModelLikesConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToFeedType?:  {
<<<<<<< HEAD
      __typename: "FeedTypeV3",
      id: string,
      profileID?: string | null,
      followingID?: string | null,
      feedName?: string | null,
=======
      __typename: "FeedType",
      id: string,
      profileID?: string | null,
      followingID?: string | null,
>>>>>>> 11b0e76 (trying the commit again)
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    PostToProfile?:  {
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type UpdatePostV3MutationVariables = {
  input?: UpdatePostV3Input,
  condition?: ModelPostV3ConditionInput | null,
};

export type UpdatePostV3Mutation = {
  updatePostV3?:  {
    __typename: "PostV3",
=======
export type UpdatePostMutationVariables = {
  input?: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ModelRepostV3Connection",
=======
      __typename: "ModelRepostConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToComments?:  {
<<<<<<< HEAD
      __typename: "ModelCommentV3Connection",
=======
      __typename: "ModelCommentConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToLikes?:  {
<<<<<<< HEAD
      __typename: "ModelLikesV3Connection",
=======
      __typename: "ModelLikesConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToFeedType?:  {
<<<<<<< HEAD
      __typename: "FeedTypeV3",
      id: string,
      profileID?: string | null,
      followingID?: string | null,
      feedName?: string | null,
=======
      __typename: "FeedType",
      id: string,
      profileID?: string | null,
      followingID?: string | null,
>>>>>>> 11b0e76 (trying the commit again)
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    PostToProfile?:  {
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type DeletePostV3MutationVariables = {
  input?: DeletePostV3Input,
  condition?: ModelPostV3ConditionInput | null,
};

export type DeletePostV3Mutation = {
  deletePostV3?:  {
    __typename: "PostV3",
=======
export type DeletePostMutationVariables = {
  input?: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ModelRepostV3Connection",
=======
      __typename: "ModelRepostConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToComments?:  {
<<<<<<< HEAD
      __typename: "ModelCommentV3Connection",
=======
      __typename: "ModelCommentConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToLikes?:  {
<<<<<<< HEAD
      __typename: "ModelLikesV3Connection",
=======
      __typename: "ModelLikesConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToFeedType?:  {
<<<<<<< HEAD
      __typename: "FeedTypeV3",
      id: string,
      profileID?: string | null,
      followingID?: string | null,
      feedName?: string | null,
=======
      __typename: "FeedType",
      id: string,
      profileID?: string | null,
      followingID?: string | null,
>>>>>>> 11b0e76 (trying the commit again)
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    PostToProfile?:  {
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type CreateProfileV3MutationVariables = {
  input?: CreateProfileV3Input,
  condition?: ModelProfileV3ConditionInput | null,
};

export type CreateProfileV3Mutation = {
  createProfileV3?:  {
    __typename: "ProfileV3",
=======
export type CreateProfileMutationVariables = {
  input?: CreateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type CreateProfileMutation = {
  createProfile?:  {
    __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ModelRepostV3Connection",
=======
      __typename: "ModelRepostConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToComments?:  {
<<<<<<< HEAD
      __typename: "ModelCommentV3Connection",
=======
      __typename: "ModelCommentConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToLikes?:  {
<<<<<<< HEAD
      __typename: "ModelLikesV3Connection",
=======
      __typename: "ModelLikesConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFeedTypes?:  {
<<<<<<< HEAD
      __typename: "ModelFeedTypeV3Connection",
=======
      __typename: "ModelFeedTypeConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFollowings?:  {
<<<<<<< HEAD
      __typename: "ModelFollowingV3Connection",
=======
      __typename: "ModelFollowingConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToPosts?:  {
<<<<<<< HEAD
      __typename: "ModelPostV3Connection",
=======
      __typename: "ModelPostConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

<<<<<<< HEAD
export type UpdateProfileV3MutationVariables = {
  input?: UpdateProfileV3Input,
  condition?: ModelProfileV3ConditionInput | null,
};

export type UpdateProfileV3Mutation = {
  updateProfileV3?:  {
    __typename: "ProfileV3",
=======
export type UpdateProfileMutationVariables = {
  input?: UpdateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type UpdateProfileMutation = {
  updateProfile?:  {
    __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ModelRepostV3Connection",
=======
      __typename: "ModelRepostConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToComments?:  {
<<<<<<< HEAD
      __typename: "ModelCommentV3Connection",
=======
      __typename: "ModelCommentConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToLikes?:  {
<<<<<<< HEAD
      __typename: "ModelLikesV3Connection",
=======
      __typename: "ModelLikesConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFeedTypes?:  {
<<<<<<< HEAD
      __typename: "ModelFeedTypeV3Connection",
=======
      __typename: "ModelFeedTypeConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFollowings?:  {
<<<<<<< HEAD
      __typename: "ModelFollowingV3Connection",
=======
      __typename: "ModelFollowingConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToPosts?:  {
<<<<<<< HEAD
      __typename: "ModelPostV3Connection",
=======
      __typename: "ModelPostConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

<<<<<<< HEAD
export type DeleteProfileV3MutationVariables = {
  input?: DeleteProfileV3Input,
  condition?: ModelProfileV3ConditionInput | null,
};

export type DeleteProfileV3Mutation = {
  deleteProfileV3?:  {
    __typename: "ProfileV3",
=======
export type DeleteProfileMutationVariables = {
  input?: DeleteProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type DeleteProfileMutation = {
  deleteProfile?:  {
    __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ModelRepostV3Connection",
=======
      __typename: "ModelRepostConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToComments?:  {
<<<<<<< HEAD
      __typename: "ModelCommentV3Connection",
=======
      __typename: "ModelCommentConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToLikes?:  {
<<<<<<< HEAD
      __typename: "ModelLikesV3Connection",
=======
      __typename: "ModelLikesConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFeedTypes?:  {
<<<<<<< HEAD
      __typename: "ModelFeedTypeV3Connection",
=======
      __typename: "ModelFeedTypeConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFollowings?:  {
<<<<<<< HEAD
      __typename: "ModelFollowingV3Connection",
=======
      __typename: "ModelFollowingConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToPosts?:  {
<<<<<<< HEAD
      __typename: "ModelPostV3Connection",
=======
      __typename: "ModelPostConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

<<<<<<< HEAD
export type GetRepostV3QueryVariables = {
  id?: string,
};

export type GetRepostV3Query = {
  getRepostV3?:  {
    __typename: "RepostV3",
=======
export type GetRepostQueryVariables = {
  id?: string,
};

export type GetRepostQuery = {
  getRepost?:  {
    __typename: "Repost",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "PostV3",
=======
      __typename: "Post",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type ListRepostV3sQueryVariables = {
  filter?: ModelRepostV3FilterInput | null,
=======
export type ListRepostsQueryVariables = {
  filter?: ModelRepostFilterInput | null,
>>>>>>> 11b0e76 (trying the commit again)
  limit?: number | null,
  nextToken?: string | null,
};

<<<<<<< HEAD
export type ListRepostV3sQuery = {
  listRepostV3s?:  {
    __typename: "ModelRepostV3Connection",
    items?:  Array< {
      __typename: "RepostV3",
=======
export type ListRepostsQuery = {
  listReposts?:  {
    __typename: "ModelRepostConnection",
    items?:  Array< {
      __typename: "Repost",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type SyncRepostV3sQueryVariables = {
  filter?: ModelRepostV3FilterInput | null,
=======
export type SyncRepostsQueryVariables = {
  filter?: ModelRepostFilterInput | null,
>>>>>>> 11b0e76 (trying the commit again)
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

<<<<<<< HEAD
export type SyncRepostV3sQuery = {
  syncRepostV3s?:  {
    __typename: "ModelRepostV3Connection",
    items?:  Array< {
      __typename: "RepostV3",
=======
export type SyncRepostsQuery = {
  syncReposts?:  {
    __typename: "ModelRepostConnection",
    items?:  Array< {
      __typename: "Repost",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type GetCommentV3QueryVariables = {
  id?: string,
};

export type GetCommentV3Query = {
  getCommentV3?:  {
    __typename: "CommentV3",
=======
export type GetCommentQueryVariables = {
  id?: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "PostV3",
=======
      __typename: "Post",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type ListCommentV3sQueryVariables = {
  filter?: ModelCommentV3FilterInput | null,
=======
export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
>>>>>>> 11b0e76 (trying the commit again)
  limit?: number | null,
  nextToken?: string | null,
};

<<<<<<< HEAD
export type ListCommentV3sQuery = {
  listCommentV3s?:  {
    __typename: "ModelCommentV3Connection",
    items?:  Array< {
      __typename: "CommentV3",
=======
export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items?:  Array< {
      __typename: "Comment",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type SyncCommentV3sQueryVariables = {
  filter?: ModelCommentV3FilterInput | null,
=======
export type SyncCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
>>>>>>> 11b0e76 (trying the commit again)
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

<<<<<<< HEAD
export type SyncCommentV3sQuery = {
  syncCommentV3s?:  {
    __typename: "ModelCommentV3Connection",
    items?:  Array< {
      __typename: "CommentV3",
=======
export type SyncCommentsQuery = {
  syncComments?:  {
    __typename: "ModelCommentConnection",
    items?:  Array< {
      __typename: "Comment",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type GetLikesV3QueryVariables = {
  id?: string,
};

export type GetLikesV3Query = {
  getLikesV3?:  {
    __typename: "LikesV3",
=======
export type GetLikesQueryVariables = {
  id?: string,
};

export type GetLikesQuery = {
  getLikes?:  {
    __typename: "Likes",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "PostV3",
=======
      __typename: "Post",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type ListLikesV3sQueryVariables = {
  filter?: ModelLikesV3FilterInput | null,
=======
export type ListLikessQueryVariables = {
  filter?: ModelLikesFilterInput | null,
>>>>>>> 11b0e76 (trying the commit again)
  limit?: number | null,
  nextToken?: string | null,
};

<<<<<<< HEAD
export type ListLikesV3sQuery = {
  listLikesV3s?:  {
    __typename: "ModelLikesV3Connection",
    items?:  Array< {
      __typename: "LikesV3",
=======
export type ListLikessQuery = {
  listLikess?:  {
    __typename: "ModelLikesConnection",
    items?:  Array< {
      __typename: "Likes",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type SyncLikesV3sQueryVariables = {
  filter?: ModelLikesV3FilterInput | null,
=======
export type SyncLikesQueryVariables = {
  filter?: ModelLikesFilterInput | null,
>>>>>>> 11b0e76 (trying the commit again)
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

<<<<<<< HEAD
export type SyncLikesV3sQuery = {
  syncLikesV3s?:  {
    __typename: "ModelLikesV3Connection",
    items?:  Array< {
      __typename: "LikesV3",
=======
export type SyncLikesQuery = {
  syncLikes?:  {
    __typename: "ModelLikesConnection",
    items?:  Array< {
      __typename: "Likes",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
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
=======
export type GetFeedTypeQueryVariables = {
  id?: string,
};

export type GetFeedTypeQuery = {
  getFeedType?:  {
    __typename: "FeedType",
    id: string,
    profileID?: string | null,
    followingID?: string | null,
>>>>>>> 11b0e76 (trying the commit again)
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FeedTypeToFollowing?:  {
<<<<<<< HEAD
      __typename: "ModelFollowingV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    FeedTypeToPost?:  {
      __typename: "PostV3",
=======
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
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type ListFeedTypeV3sQueryVariables = {
  filter?: ModelFeedTypeV3FilterInput | null,
=======
export type ListFeedTypesQueryVariables = {
  filter?: ModelFeedTypeFilterInput | null,
>>>>>>> 11b0e76 (trying the commit again)
  limit?: number | null,
  nextToken?: string | null,
};

<<<<<<< HEAD
export type ListFeedTypeV3sQuery = {
  listFeedTypeV3s?:  {
    __typename: "ModelFeedTypeV3Connection",
    items?:  Array< {
      __typename: "FeedTypeV3",
      id: string,
      profileID?: string | null,
      followingID?: string | null,
      feedName?: string | null,
=======
export type ListFeedTypesQuery = {
  listFeedTypes?:  {
    __typename: "ModelFeedTypeConnection",
    items?:  Array< {
      __typename: "FeedType",
      id: string,
      profileID?: string | null,
      followingID?: string | null,
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type SyncFeedTypeV3sQueryVariables = {
  filter?: ModelFeedTypeV3FilterInput | null,
=======
export type SyncFeedTypesQueryVariables = {
  filter?: ModelFeedTypeFilterInput | null,
>>>>>>> 11b0e76 (trying the commit again)
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

<<<<<<< HEAD
export type SyncFeedTypeV3sQuery = {
  syncFeedTypeV3s?:  {
    __typename: "ModelFeedTypeV3Connection",
    items?:  Array< {
      __typename: "FeedTypeV3",
      id: string,
      profileID?: string | null,
      followingID?: string | null,
      feedName?: string | null,
=======
export type SyncFeedTypesQuery = {
  syncFeedTypes?:  {
    __typename: "ModelFeedTypeConnection",
    items?:  Array< {
      __typename: "FeedType",
      id: string,
      profileID?: string | null,
      followingID?: string | null,
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type GetFollowingV3QueryVariables = {
  id?: string,
};

export type GetFollowingV3Query = {
  getFollowingV3?:  {
    __typename: "FollowingV3",
=======
export type GetFollowingQueryVariables = {
  id?: string,
};

export type GetFollowingQuery = {
  getFollowing?:  {
    __typename: "Following",
>>>>>>> 11b0e76 (trying the commit again)
    id: string,
    profileID?: string | null,
    feedTypeID?: string | null,
    followingDate?: string | null,
    followsAll?: boolean | null,
<<<<<<< HEAD
    feedtype2ID?: string | null,
=======
>>>>>>> 11b0e76 (trying the commit again)
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FollowingToFeedTypes?:  {
<<<<<<< HEAD
      __typename: "ModelFeedTypeV3Connection",
=======
      __typename: "ModelFeedTypeConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    FollowingToProfile?:  {
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type ListFollowingV3sQueryVariables = {
  filter?: ModelFollowingV3FilterInput | null,
=======
export type ListFollowingsQueryVariables = {
  filter?: ModelFollowingFilterInput | null,
>>>>>>> 11b0e76 (trying the commit again)
  limit?: number | null,
  nextToken?: string | null,
};

<<<<<<< HEAD
export type ListFollowingV3sQuery = {
  listFollowingV3s?:  {
    __typename: "ModelFollowingV3Connection",
    items?:  Array< {
      __typename: "FollowingV3",
=======
export type ListFollowingsQuery = {
  listFollowings?:  {
    __typename: "ModelFollowingConnection",
    items?:  Array< {
      __typename: "Following",
>>>>>>> 11b0e76 (trying the commit again)
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      followingDate?: string | null,
      followsAll?: boolean | null,
<<<<<<< HEAD
      feedtype2ID?: string | null,
=======
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type SyncFollowingV3sQueryVariables = {
  filter?: ModelFollowingV3FilterInput | null,
=======
export type SyncFollowingsQueryVariables = {
  filter?: ModelFollowingFilterInput | null,
>>>>>>> 11b0e76 (trying the commit again)
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

<<<<<<< HEAD
export type SyncFollowingV3sQuery = {
  syncFollowingV3s?:  {
    __typename: "ModelFollowingV3Connection",
    items?:  Array< {
      __typename: "FollowingV3",
=======
export type SyncFollowingsQuery = {
  syncFollowings?:  {
    __typename: "ModelFollowingConnection",
    items?:  Array< {
      __typename: "Following",
>>>>>>> 11b0e76 (trying the commit again)
      id: string,
      profileID?: string | null,
      feedTypeID?: string | null,
      followingDate?: string | null,
      followsAll?: boolean | null,
<<<<<<< HEAD
      feedtype2ID?: string | null,
=======
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type GetPostV3QueryVariables = {
  id?: string,
};

export type GetPostV3Query = {
  getPostV3?:  {
    __typename: "PostV3",
=======
export type GetPostQueryVariables = {
  id?: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ModelRepostV3Connection",
=======
      __typename: "ModelRepostConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToComments?:  {
<<<<<<< HEAD
      __typename: "ModelCommentV3Connection",
=======
      __typename: "ModelCommentConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToLikes?:  {
<<<<<<< HEAD
      __typename: "ModelLikesV3Connection",
=======
      __typename: "ModelLikesConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToFeedType?:  {
<<<<<<< HEAD
      __typename: "FeedTypeV3",
      id: string,
      profileID?: string | null,
      followingID?: string | null,
      feedName?: string | null,
=======
      __typename: "FeedType",
      id: string,
      profileID?: string | null,
      followingID?: string | null,
>>>>>>> 11b0e76 (trying the commit again)
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    PostToProfile?:  {
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type ListPostV3sQueryVariables = {
  filter?: ModelPostV3FilterInput | null,
=======
export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
>>>>>>> 11b0e76 (trying the commit again)
  limit?: number | null,
  nextToken?: string | null,
};

<<<<<<< HEAD
export type ListPostV3sQuery = {
  listPostV3s?:  {
    __typename: "ModelPostV3Connection",
    items?:  Array< {
      __typename: "PostV3",
=======
export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items?:  Array< {
      __typename: "Post",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type SyncPostV3sQueryVariables = {
  filter?: ModelPostV3FilterInput | null,
=======
export type SyncPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
>>>>>>> 11b0e76 (trying the commit again)
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

<<<<<<< HEAD
export type SyncPostV3sQuery = {
  syncPostV3s?:  {
    __typename: "ModelPostV3Connection",
    items?:  Array< {
      __typename: "PostV3",
=======
export type SyncPostsQuery = {
  syncPosts?:  {
    __typename: "ModelPostConnection",
    items?:  Array< {
      __typename: "Post",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type GetProfileV3QueryVariables = {
  id?: string,
};

export type GetProfileV3Query = {
  getProfileV3?:  {
    __typename: "ProfileV3",
=======
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

export type GetProfileQueryVariables = {
  id?: string,
};

export type GetProfileQuery = {
  getProfile?:  {
    __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ModelRepostV3Connection",
=======
      __typename: "ModelRepostConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToComments?:  {
<<<<<<< HEAD
      __typename: "ModelCommentV3Connection",
=======
      __typename: "ModelCommentConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToLikes?:  {
<<<<<<< HEAD
      __typename: "ModelLikesV3Connection",
=======
      __typename: "ModelLikesConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFeedTypes?:  {
<<<<<<< HEAD
      __typename: "ModelFeedTypeV3Connection",
=======
      __typename: "ModelFeedTypeConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFollowings?:  {
<<<<<<< HEAD
      __typename: "ModelFollowingV3Connection",
=======
      __typename: "ModelFollowingConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToPosts?:  {
<<<<<<< HEAD
      __typename: "ModelPostV3Connection",
=======
      __typename: "ModelPostConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

<<<<<<< HEAD
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
=======
export type SyncProfilesQueryVariables = {
  filter?: ModelProfileFilterInput | null,
>>>>>>> 11b0e76 (trying the commit again)
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

<<<<<<< HEAD
export type SyncProfileV3sQuery = {
  syncProfileV3s?:  {
    __typename: "ModelProfileV3Connection",
    items?:  Array< {
      __typename: "ProfileV3",
=======
export type SyncProfilesQuery = {
  syncProfiles?:  {
    __typename: "ModelProfileConnection",
    items?:  Array< {
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type OnCreateRepostV3Subscription = {
  onCreateRepostV3?:  {
    __typename: "RepostV3",
=======
export type OnCreateRepostSubscription = {
  onCreateRepost?:  {
    __typename: "Repost",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "PostV3",
=======
      __typename: "Post",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type OnUpdateRepostV3Subscription = {
  onUpdateRepostV3?:  {
    __typename: "RepostV3",
=======
export type OnUpdateRepostSubscription = {
  onUpdateRepost?:  {
    __typename: "Repost",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "PostV3",
=======
      __typename: "Post",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type OnDeleteRepostV3Subscription = {
  onDeleteRepostV3?:  {
    __typename: "RepostV3",
=======
export type OnDeleteRepostSubscription = {
  onDeleteRepost?:  {
    __typename: "Repost",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "PostV3",
=======
      __typename: "Post",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type OnCreateCommentV3Subscription = {
  onCreateCommentV3?:  {
    __typename: "CommentV3",
=======
export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "PostV3",
=======
      __typename: "Post",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type OnUpdateCommentV3Subscription = {
  onUpdateCommentV3?:  {
    __typename: "CommentV3",
=======
export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "PostV3",
=======
      __typename: "Post",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type OnDeleteCommentV3Subscription = {
  onDeleteCommentV3?:  {
    __typename: "CommentV3",
=======
export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "PostV3",
=======
      __typename: "Post",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type OnCreateLikesV3Subscription = {
  onCreateLikesV3?:  {
    __typename: "LikesV3",
=======
export type OnCreateLikesSubscription = {
  onCreateLikes?:  {
    __typename: "Likes",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "PostV3",
=======
      __typename: "Post",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type OnUpdateLikesV3Subscription = {
  onUpdateLikesV3?:  {
    __typename: "LikesV3",
=======
export type OnUpdateLikesSubscription = {
  onUpdateLikes?:  {
    __typename: "Likes",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "PostV3",
=======
      __typename: "Post",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type OnDeleteLikesV3Subscription = {
  onDeleteLikesV3?:  {
    __typename: "LikesV3",
=======
export type OnDeleteLikesSubscription = {
  onDeleteLikes?:  {
    __typename: "Likes",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "PostV3",
=======
      __typename: "Post",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type OnCreateFeedTypeV3Subscription = {
  onCreateFeedTypeV3?:  {
    __typename: "FeedTypeV3",
    id: string,
    profileID?: string | null,
    followingID?: string | null,
    feedName?: string | null,
=======
export type OnCreateFeedTypeSubscription = {
  onCreateFeedType?:  {
    __typename: "FeedType",
    id: string,
    profileID?: string | null,
    followingID?: string | null,
>>>>>>> 11b0e76 (trying the commit again)
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FeedTypeToFollowing?:  {
<<<<<<< HEAD
      __typename: "ModelFollowingV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    FeedTypeToPost?:  {
      __typename: "PostV3",
=======
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
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type OnUpdateFeedTypeV3Subscription = {
  onUpdateFeedTypeV3?:  {
    __typename: "FeedTypeV3",
    id: string,
    profileID?: string | null,
    followingID?: string | null,
    feedName?: string | null,
=======
export type OnUpdateFeedTypeSubscription = {
  onUpdateFeedType?:  {
    __typename: "FeedType",
    id: string,
    profileID?: string | null,
    followingID?: string | null,
>>>>>>> 11b0e76 (trying the commit again)
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FeedTypeToFollowing?:  {
<<<<<<< HEAD
      __typename: "ModelFollowingV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    FeedTypeToPost?:  {
      __typename: "PostV3",
=======
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
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type OnDeleteFeedTypeV3Subscription = {
  onDeleteFeedTypeV3?:  {
    __typename: "FeedTypeV3",
    id: string,
    profileID?: string | null,
    followingID?: string | null,
    feedName?: string | null,
=======
export type OnDeleteFeedTypeSubscription = {
  onDeleteFeedType?:  {
    __typename: "FeedType",
    id: string,
    profileID?: string | null,
    followingID?: string | null,
>>>>>>> 11b0e76 (trying the commit again)
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FeedTypeToFollowing?:  {
<<<<<<< HEAD
      __typename: "ModelFollowingV3Connection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    FeedTypeToPost?:  {
      __typename: "PostV3",
=======
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
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type OnCreateFollowingV3Subscription = {
  onCreateFollowingV3?:  {
    __typename: "FollowingV3",
=======
export type OnCreateFollowingSubscription = {
  onCreateFollowing?:  {
    __typename: "Following",
>>>>>>> 11b0e76 (trying the commit again)
    id: string,
    profileID?: string | null,
    feedTypeID?: string | null,
    followingDate?: string | null,
    followsAll?: boolean | null,
<<<<<<< HEAD
    feedtype2ID?: string | null,
=======
>>>>>>> 11b0e76 (trying the commit again)
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FollowingToFeedTypes?:  {
<<<<<<< HEAD
      __typename: "ModelFeedTypeV3Connection",
=======
      __typename: "ModelFeedTypeConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    FollowingToProfile?:  {
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type OnUpdateFollowingV3Subscription = {
  onUpdateFollowingV3?:  {
    __typename: "FollowingV3",
=======
export type OnUpdateFollowingSubscription = {
  onUpdateFollowing?:  {
    __typename: "Following",
>>>>>>> 11b0e76 (trying the commit again)
    id: string,
    profileID?: string | null,
    feedTypeID?: string | null,
    followingDate?: string | null,
    followsAll?: boolean | null,
<<<<<<< HEAD
    feedtype2ID?: string | null,
=======
>>>>>>> 11b0e76 (trying the commit again)
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FollowingToFeedTypes?:  {
<<<<<<< HEAD
      __typename: "ModelFeedTypeV3Connection",
=======
      __typename: "ModelFeedTypeConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    FollowingToProfile?:  {
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type OnDeleteFollowingV3Subscription = {
  onDeleteFollowingV3?:  {
    __typename: "FollowingV3",
=======
export type OnDeleteFollowingSubscription = {
  onDeleteFollowing?:  {
    __typename: "Following",
>>>>>>> 11b0e76 (trying the commit again)
    id: string,
    profileID?: string | null,
    feedTypeID?: string | null,
    followingDate?: string | null,
    followsAll?: boolean | null,
<<<<<<< HEAD
    feedtype2ID?: string | null,
=======
>>>>>>> 11b0e76 (trying the commit again)
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    FollowingToFeedTypes?:  {
<<<<<<< HEAD
      __typename: "ModelFeedTypeV3Connection",
=======
      __typename: "ModelFeedTypeConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    FollowingToProfile?:  {
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type OnCreatePostV3Subscription = {
  onCreatePostV3?:  {
    __typename: "PostV3",
=======
export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ModelRepostV3Connection",
=======
      __typename: "ModelRepostConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToComments?:  {
<<<<<<< HEAD
      __typename: "ModelCommentV3Connection",
=======
      __typename: "ModelCommentConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToLikes?:  {
<<<<<<< HEAD
      __typename: "ModelLikesV3Connection",
=======
      __typename: "ModelLikesConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToFeedType?:  {
<<<<<<< HEAD
      __typename: "FeedTypeV3",
      id: string,
      profileID?: string | null,
      followingID?: string | null,
      feedName?: string | null,
=======
      __typename: "FeedType",
      id: string,
      profileID?: string | null,
      followingID?: string | null,
>>>>>>> 11b0e76 (trying the commit again)
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    PostToProfile?:  {
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type OnUpdatePostV3Subscription = {
  onUpdatePostV3?:  {
    __typename: "PostV3",
=======
export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ModelRepostV3Connection",
=======
      __typename: "ModelRepostConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToComments?:  {
<<<<<<< HEAD
      __typename: "ModelCommentV3Connection",
=======
      __typename: "ModelCommentConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToLikes?:  {
<<<<<<< HEAD
      __typename: "ModelLikesV3Connection",
=======
      __typename: "ModelLikesConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToFeedType?:  {
<<<<<<< HEAD
      __typename: "FeedTypeV3",
      id: string,
      profileID?: string | null,
      followingID?: string | null,
      feedName?: string | null,
=======
      __typename: "FeedType",
      id: string,
      profileID?: string | null,
      followingID?: string | null,
>>>>>>> 11b0e76 (trying the commit again)
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    PostToProfile?:  {
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type OnDeletePostV3Subscription = {
  onDeletePostV3?:  {
    __typename: "PostV3",
=======
export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ModelRepostV3Connection",
=======
      __typename: "ModelRepostConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToComments?:  {
<<<<<<< HEAD
      __typename: "ModelCommentV3Connection",
=======
      __typename: "ModelCommentConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToLikes?:  {
<<<<<<< HEAD
      __typename: "ModelLikesV3Connection",
=======
      __typename: "ModelLikesConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    PostToFeedType?:  {
<<<<<<< HEAD
      __typename: "FeedTypeV3",
      id: string,
      profileID?: string | null,
      followingID?: string | null,
      feedName?: string | null,
=======
      __typename: "FeedType",
      id: string,
      profileID?: string | null,
      followingID?: string | null,
>>>>>>> 11b0e76 (trying the commit again)
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    PostToProfile?:  {
<<<<<<< HEAD
      __typename: "ProfileV3",
=======
      __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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

<<<<<<< HEAD
export type OnCreateProfileV3Subscription = {
  onCreateProfileV3?:  {
    __typename: "ProfileV3",
=======
export type OnCreateProfileSubscription = {
  onCreateProfile?:  {
    __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ModelRepostV3Connection",
=======
      __typename: "ModelRepostConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToComments?:  {
<<<<<<< HEAD
      __typename: "ModelCommentV3Connection",
=======
      __typename: "ModelCommentConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToLikes?:  {
<<<<<<< HEAD
      __typename: "ModelLikesV3Connection",
=======
      __typename: "ModelLikesConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFeedTypes?:  {
<<<<<<< HEAD
      __typename: "ModelFeedTypeV3Connection",
=======
      __typename: "ModelFeedTypeConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFollowings?:  {
<<<<<<< HEAD
      __typename: "ModelFollowingV3Connection",
=======
      __typename: "ModelFollowingConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToPosts?:  {
<<<<<<< HEAD
      __typename: "ModelPostV3Connection",
=======
      __typename: "ModelPostConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

<<<<<<< HEAD
export type OnUpdateProfileV3Subscription = {
  onUpdateProfileV3?:  {
    __typename: "ProfileV3",
=======
export type OnUpdateProfileSubscription = {
  onUpdateProfile?:  {
    __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ModelRepostV3Connection",
=======
      __typename: "ModelRepostConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToComments?:  {
<<<<<<< HEAD
      __typename: "ModelCommentV3Connection",
=======
      __typename: "ModelCommentConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToLikes?:  {
<<<<<<< HEAD
      __typename: "ModelLikesV3Connection",
=======
      __typename: "ModelLikesConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFeedTypes?:  {
<<<<<<< HEAD
      __typename: "ModelFeedTypeV3Connection",
=======
      __typename: "ModelFeedTypeConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFollowings?:  {
<<<<<<< HEAD
      __typename: "ModelFollowingV3Connection",
=======
      __typename: "ModelFollowingConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToPosts?:  {
<<<<<<< HEAD
      __typename: "ModelPostV3Connection",
=======
      __typename: "ModelPostConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

<<<<<<< HEAD
export type OnDeleteProfileV3Subscription = {
  onDeleteProfileV3?:  {
    __typename: "ProfileV3",
=======
export type OnDeleteProfileSubscription = {
  onDeleteProfile?:  {
    __typename: "Profile",
>>>>>>> 11b0e76 (trying the commit again)
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
<<<<<<< HEAD
      __typename: "ModelRepostV3Connection",
=======
      __typename: "ModelRepostConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToComments?:  {
<<<<<<< HEAD
      __typename: "ModelCommentV3Connection",
=======
      __typename: "ModelCommentConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToLikes?:  {
<<<<<<< HEAD
      __typename: "ModelLikesV3Connection",
=======
      __typename: "ModelLikesConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFeedTypes?:  {
<<<<<<< HEAD
      __typename: "ModelFeedTypeV3Connection",
=======
      __typename: "ModelFeedTypeConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToFollowings?:  {
<<<<<<< HEAD
      __typename: "ModelFollowingV3Connection",
=======
      __typename: "ModelFollowingConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ProfileToPosts?:  {
<<<<<<< HEAD
      __typename: "ModelPostV3Connection",
=======
      __typename: "ModelPostConnection",
>>>>>>> 11b0e76 (trying the commit again)
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};
