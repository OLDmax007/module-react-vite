import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAll} from "../../../services/api.jspl.service.ts";
import {postSlice} from "./postSlice.ts";
import {PostType} from "../../../models/types/post/PostType.ts";
import handleError from "../../../helpers/handleError.ts";


const asyncActions = {
    loadPosts: createAsyncThunk<PostType[], void, {rejectValue: string }>('postSlice/loadPosts', async (_, thunkAPI) => {
        try {
            thunkAPI.dispatch(postSlice.actions.setLoading(false))
            const data = await getAll<PostType[]>('posts');
            thunkAPI.dispatch(postSlice.actions.setLoading(true))
            return thunkAPI.fulfillWithValue(data)
        } catch (error) {
            return thunkAPI.rejectWithValue(handleError(error))
        }
    }),

    loadPost: createAsyncThunk<PostType, number, {rejectValue: string }>('postSlice/loadPost', async (id: number, thunkAPI) => {
        try {
            thunkAPI.dispatch(postSlice.actions.setLoading(false))
            const data = await getAll<PostType>('posts/' + id);
            thunkAPI.dispatch(postSlice.actions.setLoading(true))
            return thunkAPI.fulfillWithValue(data)

        } catch (error) {
            return thunkAPI.rejectWithValue(handleError(error))
        }
    })

}

export  default asyncActions