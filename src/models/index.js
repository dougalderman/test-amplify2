// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Authors, BlogPosts } = initSchema(schema);

export {
  Authors,
  BlogPosts
};