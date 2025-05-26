import {configureStore} from "@reduxjs/toolkit";
import {postSlice} from "./slices/post/postSlice.ts";
import {userSlice} from "./slices/user/userSlice.ts";

const store = configureStore(
    {
        reducer: {
            userSlice: userSlice.reducer,
            postSlice: postSlice.reducer
        }

    }
)


export default store