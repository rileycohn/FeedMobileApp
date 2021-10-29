import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type RepostV3MetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProfileV3MetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostV3MetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FeedTypeV3MetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FollowingV3MetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LikesV3MetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommentV3MetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class RepostV3 {
  readonly id: string;
  readonly profileID?: string;
  readonly postID?: string;
  readonly repostDate?: string;
  readonly RepostToProfile?: ProfileV3;
  readonly RepostToPost?: PostV3;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<RepostV3, RepostV3MetaData>);
  static copyOf(source: RepostV3, mutator: (draft: MutableModel<RepostV3, RepostV3MetaData>) => MutableModel<RepostV3, RepostV3MetaData> | void): RepostV3;
}

export declare class ProfileV3 {
  readonly id: string;
  readonly name: string;
  readonly phoneNum?: string;
  readonly email: string;
  readonly profilePic?: string;
  readonly dob?: string;
  readonly profileDate?: string;
  readonly ProfileToPosts?: (PostV3 | null)[];
  readonly ProfileToFollowings?: (FollowingV3 | null)[];
  readonly ProfileToFeedTypes?: (FeedTypeV3 | null)[];
  readonly ProfileToLikes?: (LikesV3 | null)[];
  readonly ProfileToComments?: (CommentV3 | null)[];
  readonly ProfileToReposts?: (RepostV3 | null)[];
  readonly bio?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ProfileV3, ProfileV3MetaData>);
  static copyOf(source: ProfileV3, mutator: (draft: MutableModel<ProfileV3, ProfileV3MetaData>) => MutableModel<ProfileV3, ProfileV3MetaData> | void): ProfileV3;
}

export declare class PostV3 {
  readonly id: string;
  readonly profileID?: string;
  readonly feedTypeID?: string;
  readonly postDate?: string;
  readonly tags?: string;
  readonly post?: string;
  readonly PostToProfile?: ProfileV3;
  readonly PostToFeedType?: FeedTypeV3;
  readonly PostToLikes?: (LikesV3 | null)[];
  readonly PostToComments?: (CommentV3 | null)[];
  readonly PostToReposts?: (RepostV3 | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<PostV3, PostV3MetaData>);
  static copyOf(source: PostV3, mutator: (draft: MutableModel<PostV3, PostV3MetaData>) => MutableModel<PostV3, PostV3MetaData> | void): PostV3;
}

export declare class FeedTypeV3 {
  readonly id: string;
  readonly profileID?: string;
  readonly FeedTypeToPost?: PostV3;
  readonly FeedTypeToProfile?: ProfileV3;
  readonly FeedTypeToFollowing?: (FollowingV3 | null)[];
  readonly followingID?: string;
  readonly feedName?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<FeedTypeV3, FeedTypeV3MetaData>);
  static copyOf(source: FeedTypeV3, mutator: (draft: MutableModel<FeedTypeV3, FeedTypeV3MetaData>) => MutableModel<FeedTypeV3, FeedTypeV3MetaData> | void): FeedTypeV3;
}

export declare class FollowingV3 {
  readonly id: string;
  readonly profileID?: string;
  readonly feedTypeID?: string;
  readonly followingDate?: string;
  readonly followsAll?: boolean;
  readonly FollowingToProfile?: ProfileV3;
  readonly FollowingToFeedTypes?: (FeedTypeV3 | null)[];
  readonly feedtype2ID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<FollowingV3, FollowingV3MetaData>);
  static copyOf(source: FollowingV3, mutator: (draft: MutableModel<FollowingV3, FollowingV3MetaData>) => MutableModel<FollowingV3, FollowingV3MetaData> | void): FollowingV3;
}

export declare class LikesV3 {
  readonly id: string;
  readonly profileID?: string;
  readonly postID?: string;
  readonly likeDate?: string;
  readonly LikeToProfile?: ProfileV3;
  readonly LikeToPost?: PostV3;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<LikesV3, LikesV3MetaData>);
  static copyOf(source: LikesV3, mutator: (draft: MutableModel<LikesV3, LikesV3MetaData>) => MutableModel<LikesV3, LikesV3MetaData> | void): LikesV3;
}

export declare class CommentV3 {
  readonly id: string;
  readonly profileID?: string;
  readonly postID?: string;
  readonly comment?: string;
  readonly commentDate?: string;
  readonly CommentToProfile?: ProfileV3;
  readonly CommentToPost?: PostV3;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<CommentV3, CommentV3MetaData>);
  static copyOf(source: CommentV3, mutator: (draft: MutableModel<CommentV3, CommentV3MetaData>) => MutableModel<CommentV3, CommentV3MetaData> | void): CommentV3;
}