import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type AuthorsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BlogPostsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Authors {
  readonly id: string;
  readonly name?: string;
  readonly BlogPosts?: (BlogPosts | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Authors, AuthorsMetaData>);
  static copyOf(source: Authors, mutator: (draft: MutableModel<Authors, AuthorsMetaData>) => MutableModel<Authors, AuthorsMetaData> | void): Authors;
}

export declare class BlogPosts {
  readonly id: string;
  readonly post?: string;
  readonly authorsID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<BlogPosts, BlogPostsMetaData>);
  static copyOf(source: BlogPosts, mutator: (draft: MutableModel<BlogPosts, BlogPostsMetaData>) => MutableModel<BlogPosts, BlogPostsMetaData> | void): BlogPosts;
}