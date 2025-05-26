import {PostType} from "./PostType.ts";
import {StateType} from "./StateType.ts";

export type PostSliceType = Pick<StateType, 'loading'> & {
    posts: PostType[]
    post: null | PostType
}
