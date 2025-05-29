import {CommentStateType} from "../../../models/types/comment/CommentStateType.ts";
import {StateType} from "../../../models/types/StateType.ts";
import state from "../../states/state.ts";

const commentState: CommentStateType & StateType = {
    comments: [],
    comment: null,
    ...state

}

export default commentState