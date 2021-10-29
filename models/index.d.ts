import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class RepostV3 {
  readonly id: string;
  readonly profileID?: string;
  readonly postID?: string;
  readonly repostDate?: string;
  readonly RepostToProfile?: ProfileV3;
  readonly RepostToPost?: PostV3;
  constructor(init: ModelInit<RepostV3>);
  static copyOf(source: RepostV3, mutator: (draft: MutableModel<RepostV3>) => MutableModel<RepostV3> | void): RepostV3;
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
  constructor(init: ModelInit<ProfileV3>);
  static copyOf(source: ProfileV3, mutator: (draft: MutableModel<ProfileV3>) => MutableModel<ProfileV3> | void): ProfileV3;
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
  constructor(init: ModelInit<PostV3>);
  static copyOf(source: PostV3, mutator: (draft: MutableModel<PostV3>) => MutableModel<PostV3> | void): PostV3;
}

export declare class FeedTypeV3 {
  readonly id: string;
  readonly profileID?: string;
  readonly FeedTypeToPost?: PostV3;
  readonly FeedTypeToProfile?: ProfileV3;
  readonly FeedTypeToFollowing?: (FollowingV3 | null)[];
  readonly followingID?: string;
  readonly feedName?: string;
  constructor(init: ModelInit<FeedTypeV3>);
  static copyOf(source: FeedTypeV3, mutator: (draft: MutableModel<FeedTypeV3>) => MutableModel<FeedTypeV3> | void): FeedTypeV3;
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
  constructor(init: ModelInit<FollowingV3>);
  static copyOf(source: FollowingV3, mutator: (draft: MutableModel<FollowingV3>) => MutableModel<FollowingV3> | void): FollowingV3;
}

export declare class LikesV3 {
  readonly id: string;
  readonly profileID?: string;
  readonly postID?: string;
  readonly likeDate?: string;
  readonly LikeToProfile?: ProfileV3;
  readonly LikeToPost?: PostV3;
  constructor(init: ModelInit<LikesV3>);
  static copyOf(source: LikesV3, mutator: (draft: MutableModel<LikesV3>) => MutableModel<LikesV3> | void): LikesV3;
}

export declare class CommentV3 {
  readonly id: string;
  readonly profileID?: string;
  readonly postID?: string;
  readonly comment?: string;
  readonly commentDate?: string;
  readonly CommentToProfile?: ProfileV3;
  readonly CommentToPost?: PostV3;
  constructor(init: ModelInit<CommentV3>);
  static copyOf(source: CommentV3, mutator: (draft: MutableModel<CommentV3>) => MutableModel<CommentV3> | void): CommentV3;
}