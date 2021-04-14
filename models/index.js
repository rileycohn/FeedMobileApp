// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { RepostV3, ProfileV3, PostV3, FeedTypeV3, FollowingV3, LikesV3, CommentV3 } = initSchema(schema);

export {
  RepostV3,
  ProfileV3,
  PostV3,
  FeedTypeV3,
  FollowingV3,
  LikesV3,
  CommentV3
};