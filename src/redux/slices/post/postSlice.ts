import {createSlice, isPending, isRejected, PayloadAction} from "@reduxjs/toolkit";

import {PostSliceType} from "../../../models/types/PostSliceType.ts";
import {PostType} from "../../../models/types/PostType.ts";
import postSliceAsyncActions from "./postSliceAsyncActions.ts";
import {StateType} from "../../../models/types/StateType.ts";
import state from "../../states/state.ts";
import userSliceAsyncActions from "../user/userSliceAsyncActions.ts";
import actions from "../../actions/actions.ts";

const {setLoading} = actions


const initialState:PostSliceType & StateType = {
    posts: [],
    post: null,
    ...state
}


export const postSlice = createSlice({
    name: 'postSlice',
    initialState: initialState,
    reducers: {
        setLoading
    },
    extraReducers: builder => builder
        .addCase(postSliceAsyncActions.loadPosts.fulfilled, (state, action: PayloadAction<PostType[]>) => {
            state.posts = action.payload
        })
        .addCase(postSliceAsyncActions.loadPost.fulfilled, (state, action:PayloadAction<PostType>)=> {
            state.post = action.payload
        })
        .addMatcher(
            isPending(userSliceAsyncActions.loadUser, userSliceAsyncActions.loadUsers),
            (state) => {
                state.post = null;
            }
        )
        .addMatcher(isRejected, (_, action) => {
            console.error(action.payload)
        })
})
