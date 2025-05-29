import {createSlice, isFulfilled, isPending, isRejected, PayloadAction} from "@reduxjs/toolkit";

import asyncActions from "./asyncActions.ts";
import userState from "./userState.ts";
import {UserType} from "../../../models/types/user/UserType.ts";


export const userSlice = createSlice({
    name: 'userSlice',
    initialState: userState,
    reducers: {
    },
    extraReducers: builder =>
        builder
            .addCase(asyncActions.loadUsers.fulfilled,
                (state, action: PayloadAction<UserType[]>) => {
                state.users = action.payload
    })
            .addCase(asyncActions.loadUser.fulfilled, (state, action: PayloadAction<UserType>) => {
                state.user = action.payload
            })
            .addMatcher(
                isFulfilled(asyncActions.loadUser, asyncActions.loadUsers),
                (state) => {
                    state.loading = true
                }
            )
            .addMatcher(
                isPending(asyncActions.loadUser, asyncActions.loadUsers),
                (state) => {
                    state.loading = false;
                    state.user = null;
                }
            )

            .addMatcher(isRejected, (_, action) => {
                console.error('Error:', action.payload)
            })

})



