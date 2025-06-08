import {PostType} from "./PostType.ts";

export type PostStateType =  {
    posts: PostType[],
    postsByUserId: PostType[],
    post: null | PostType
}
