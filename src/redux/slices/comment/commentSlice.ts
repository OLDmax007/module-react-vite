import {createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";
import commentState from "./commentState.ts";
import asyncActions from "./asyncActions.ts";

const {loadComments, loadComment} = asyncActions

const commentSlice =  createSlice(
    {
        name: 'commentSlice',
        initialState: commentState,
        reducers: {},
        extraReducers: builder => builder.addMatcher(isFulfilled(loadComments,loadComment), (state, action) => {
            state.loading = true
            if (loadComments.fulfilled.match(action)) {
                state.comments = action.payload
            } else if (loadComment.fulfilled.match(action)) {
                state.comment = action.payload
            }
        }).addMatcher(isPending, (state) => {
            state.loading = false
            state.comment = null
        })
            .addMatcher(isRejected, ( _,action) => {
                console.error('Error:', action.payload)
            })
    }
)

export default commentSlice
