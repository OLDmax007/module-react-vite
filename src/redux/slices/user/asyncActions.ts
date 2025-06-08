import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAll} from "../../../services/api.jspl.service.ts";
import {UserType} from "../../../models/types/user/UserType.ts";
import handleError from "../../../helpers/handleError.ts";


const asyncActions = {
    loadUsers: createAsyncThunk<UserType[], void, {rejectValue: string}>(
        'userSlice/loadUsers',
        async (_, thunkAPI) => {
            try {
                return thunkAPI.fulfillWithValue(await getAll<UserType[]>('users'))
            } catch (error) {
                return thunkAPI.rejectWithValue(handleError(error))
            }

        }
    )

    ,loadUser:createAsyncThunk<UserType, number, {rejectValue: string}>(
        'userSlice/loadUser',
        async (id: number, thunkAPI) => {
            try {
                return thunkAPI.fulfillWithValue(await getAll<UserType>('users/' + id))
            } catch (error) {
                return thunkAPI.rejectWithValue(handleError(error))
            }

        }
    )

}

export default asyncActions