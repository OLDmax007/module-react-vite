
import {StateType} from "../../../models/types/StateType.ts";
import state from "../../states/state.ts";
import {PostStateType} from "../../../models/types/post/PostStateType.ts";

const postState:PostStateType & StateType = {
    posts: [],
    postsByUserId: [],
    post: null,
    ...state
}

export default postState