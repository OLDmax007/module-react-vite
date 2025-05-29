import {createAsyncThunk} from "@reduxjs/toolkit";
import handleError from "../../../helpers/handleError.ts";
import {getAll} from "../../../services/api.jspl.service.ts";
import {CommentType} from "../../../models/types/comment/CommentType.ts";

const asyncActions = {
    loadComments: createAsyncThunk('commentSlice/loadComments', async (_, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue( await getAll<CommentType[]>('comments'))
        } catch (error) {
            return thunkAPI.rejectWithValue(handleError(error))
        }
    }),
    loadComment: createAsyncThunk('commentSlice/loadComment', async (id: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue( await getAll<CommentType>('comments/' + id))
        } catch (error) {
            return thunkAPI.rejectWithValue(handleError(error))
        }
    })

}

export default asyncActions




