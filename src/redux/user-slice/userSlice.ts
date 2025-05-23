import {UserSliceType} from "../../models/types/UserSliceType.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserType} from "../../models/types/UserType.ts";

const initialState: UserSliceType = {
    users: []
}

export const userSlise = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: {
        loadUsers: (state, action:PayloadAction<UserType[]>) => {
            state.users = action.payload
        }
    }
})

export const userSliceActions = {...userSlise.actions}

