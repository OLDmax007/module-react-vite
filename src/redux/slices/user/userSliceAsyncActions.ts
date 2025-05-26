import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAll} from "../../../services/api.jspl.service.ts";
import {UserType} from "../../../models/types/UserType.ts";

const userSliceAsyncActions = {
    loadUsers: createAsyncThunk<UserType[], void, {rejectValue: string}>(
        'userSlice/loadUsers',
        async (_, thunkAPI) => {
            try {
                return thunkAPI.fulfillWithValue(await getAll<UserType[]>('users'))
            } catch (error) {
                if (error instanceof Error) {
                    return  thunkAPI.rejectWithValue(error.message)
                }
                return thunkAPI.rejectWithValue('Unknown message')
            }

        }
    )

    ,loadUser:createAsyncThunk<UserType, number, {rejectValue: string}>(
        'userSlice/loadUser',
        async (id: number, thunkAPI) => {
            try {
                return thunkAPI.fulfillWithValue(await getAll<UserType>('users/' + id))
            } catch (error) {
                if (error instanceof Error) {
                    return  thunkAPI.rejectWithValue(error.message)
                }
                return thunkAPI.rejectWithValue('Unknown message')
            }

        }
    )


}

export default userSliceAsyncActions