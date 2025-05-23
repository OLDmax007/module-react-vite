import {configureStore} from "@reduxjs/toolkit";
import {userSlise} from "./user-slice/userSlice.ts";
import {postSlice} from "./post-slice/postSlice.ts";

const store = configureStore(
    {
        reducer: {
            userSlice: userSlise.reducer,
            postSlice: postSlice.reducer
        }

    }
)


export default store