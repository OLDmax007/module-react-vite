import {PayloadAction} from "@reduxjs/toolkit";
import {PostStateType} from "../../../models/types/post/PostStateType.ts";

const postActions = {
    filteredPosts: (state: PostStateType, action: PayloadAction<number>) => {
        state.postsByUserId = state.posts.filter(post => post.userId === action.payload)
}
}

export default postActions