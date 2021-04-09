// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Repost, Profile, Post, FeedType, Following, Likes, Comment } = initSchema(schema);

export {
  Repost,
  Profile,
  Post,
  FeedType,
  Following,
  Likes,
  Comment
};