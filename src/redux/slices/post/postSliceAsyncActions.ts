import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAll} from "../../../services/api.jspl.service.ts";
import {PostType} from "../../../models/types/PostType.ts";
import {postSlice} from "./postSlice.ts";


const postSliceAsyncActions = {
    loadPosts: createAsyncThunk<PostType[], void, {rejectValue: string }>('postSlice/loadPosts', async (_, thunkAPI) => {
        try {
            const data = await getAll<PostType[]>('posts');
            thunkAPI.dispatch(postSlice.actions.setLoading(true))
            return thunkAPI.fulfillWithValue(data)
        } catch (error) {
            if (error instanceof Error) {
                return thunkAPI.rejectWithValue(error.message)
            }
            return thunkAPI.rejectWithValue('Unknown message')
        }
    }),

    loadPost: createAsyncThunk<PostType, number, {rejectValue: string }>('postSlice/loadPost', async (id: number, thunkAPI) => {
        try {
            const data = await getAll<PostType>('posts/' + id);
            thunkAPI.dispatch(postSlice.actions.setLoading(true))
            return thunkAPI.fulfillWithValue(data)
        } catch (error) {
            if (error instanceof Error) {
                return thunkAPI.rejectWithValue(error.message)
            }
            return thunkAPI.rejectWithValue('Unknown message')
        }
    })

}

export  default postSliceAsyncActions