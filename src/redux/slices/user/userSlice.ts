import {createSlice, isFulfilled, isPending, isRejected, PayloadAction} from "@reduxjs/toolkit";
import {UserSliceType} from "../../../models/types/UserSliceType.ts";
import {UserType} from "../../../models/types/UserType.ts";
import userSliceAsyncActions from "./userSliceAsyncActions.ts";
import {StateType} from "../../../models/types/StateType.ts";
import state from "../../states/state.ts";

const initialState: UserSliceType & StateType= {
    users: [],
    user: null,
    ...state

}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: {
    },
    extraReducers: builder =>
        builder
            .addCase(userSliceAsyncActions.loadUsers.fulfilled,
                (state, action: PayloadAction<UserType[]>) => {
                state.users = action.payload
    })
            .addCase(userSliceAsyncActions.loadUser.fulfilled, (state, action: PayloadAction<UserType>) => {
                state.user = action.payload
            })
            .addMatcher(
                isFulfilled(userSliceAsyncActions.loadUser, userSliceAsyncActions.loadUsers),
                (state) => {
                    state.loading = true
                }
            )
            .addMatcher(
                isPending(userSliceAsyncActions.loadUser, userSliceAsyncActions.loadUsers),
                (state) => {
                    state.loading = false;
                    state.user = null;
                }
            )

            .addMatcher(isRejected, (_, action) => {
                console.error('Error:', action.payload)
            })

})



