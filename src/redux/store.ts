import {configureStore} from "@reduxjs/toolkit";
import {postSlice} from "./slices/post/postSlice.ts";
import {userSlice} from "./slices/user/userSlice.ts";
import commentSlice from "./slices/comment/commentSlice.ts";

const store = configureStore(
    {
        reducer: {
            userSlice: userSlice.reducer,
            postSlice: postSlice.reducer,
            commentSlice: commentSlice.reducer
        }

    }
)


export default store