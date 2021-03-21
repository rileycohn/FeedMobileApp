import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Repost {
  readonly id: string;
  readonly profileID?: string;
  readonly postID?: string;
  readonly repostDate?: string;
  readonly RepostToProfile?: Profile;
  readonly RepostToPost?: Post;
  constructor(init: ModelInit<Repost>);
  static copyOf(source: Repost, mutator: (draft: MutableModel<Repost>) => MutableModel<Repost> | void): Repost;
}

export declare class Profile {
  readonly id: string;
  readonly name: string;
  readonly phoneNum?: string;
  readonly email: string;
  readonly profilePic?: string;
  readonly dob?: string;
  readonly profileDate?: string;
  readonly ProfileToPosts?: (Post | null)[];
  readonly ProfileToFollowings?: (Following | null)[];
  readonly ProfileToFeedTypes?: (FeedType | null)[];
  readonly ProfileToLikes?: (Likes | null)[];
  readonly ProfileToComments?: (Comment | null)[];
  readonly ProfileToReposts?: (Repost | null)[];
  constructor(init: ModelInit<Profile>);
  static copyOf(source: Profile, mutator: (draft: MutableModel<Profile>) => MutableModel<Profile> | void): Profile;
}

export declare class Post {
  readonly id: string;
  readonly profileID?: string;
  readonly feedTypeID?: string;
  readonly postDate?: string;
  readonly tags?: string;
  readonly post?: string;
  readonly PostToProfile?: Profile;
  readonly PostToFeedType?: FeedType;
  readonly PostToLikes?: (Likes | null)[];
  readonly PostToComments?: (Comment | null)[];
  readonly PostToReposts?: (Repost | null)[];
  constructor(init: ModelInit<Post>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

export declare class FeedType {
  readonly id: string;
  readonly profileID?: string;
  readonly FeedTypeToPost?: Post;
  readonly FeedTypeToProfile?: Profile;
  readonly FeedTypeToFollowing?: Following;
  readonly followingID?: string;
  constructor(init: ModelInit<FeedType>);
  static copyOf(source: FeedType, mutator: (draft: MutableModel<FeedType>) => MutableModel<FeedType> | void): FeedType;
}

export declare class Following {
  readonly id: string;
  readonly profileID?: string;
  readonly feedTypeID?: string;
  readonly followingDate?: string;
  readonly followsAll?: boolean;
  readonly FollowingToProfile?: Profile;
  readonly FollowingToFeedTypes?: (FeedType | null)[];
  constructor(init: ModelInit<Following>);
  static copyOf(source: Following, mutator: (draft: MutableModel<Following>) => MutableModel<Following> | void): Following;
}

export declare class Likes {
  readonly id: string;
  readonly profileID?: string;
  readonly postID?: string;
  readonly likeDate?: string;
  readonly LikeToProfile?: Profile;
  readonly LikeToPost?: Post;
  constructor(init: ModelInit<Likes>);
  static copyOf(source: Likes, mutator: (draft: MutableModel<Likes>) => MutableModel<Likes> | void): Likes;
}

export declare class Comment {
  readonly id: string;
  readonly profileID?: string;
  readonly postID?: string;
  readonly commen?: string;
  readonly commentDate?: string;
  readonly CommentToProfile?: Profile;
  readonly CommentToPost?: Post;
  constructor(init: ModelInit<Comment>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}