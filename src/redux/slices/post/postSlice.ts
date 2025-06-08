import {createSlice, isPending, isRejected, PayloadAction} from "@reduxjs/toolkit";
import asyncActions from "./asyncActions.ts";
import actions from "../../actions/actions.ts";
import postState from "./postState.ts";
import {PostType} from "../../../models/types/post/PostType.ts";

import postActions from "./postActions.ts";

export const postSlice = createSlice({
    name: 'postSlice',
    initialState: postState,
    reducers: {
        ...actions,
        ...postActions,
    },
    extraReducers: builder => builder
        .addCase(asyncActions.loadPosts.fulfilled, (state, action: PayloadAction<PostType[]>) => {
            state.posts = action.payload
        })
        .addCase(asyncActions.loadPost.fulfilled, (state, action:PayloadAction<PostType>)=> {
            state.post = action.payload
        })
        .addMatcher(
            isPending(asyncActions.loadPost, asyncActions.loadPosts),
            (state) => {
                state.post = null;
            }
        )
        .addMatcher(isRejected, (_, action) => {
            console.error(action.payload)
        })
})

export const postSliceActions = {...postSlice.actions}