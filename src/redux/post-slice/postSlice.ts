import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PostType} from "../../models/types/PostType.ts";
import {PostSliceType} from "../../models/types/PostSliceType.ts";

const initialState:PostSliceType = {
    posts: []
}

export const postSlice = createSlice({
    name: 'postSlice',
    initialState: initialState,
    reducers: {
        loadPosts: (state, action:PayloadAction<PostType[]>) => {
            state.posts = action.payload
        }
    }
})

export const postSliceActions = {...postSlice.actions}

