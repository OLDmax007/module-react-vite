
import {StateType} from "../../../models/types/StateType.ts";
import state from "../../states/state.ts";
import {UserStateType} from "../../../models/types/user/UserStateType.ts";

const userState: UserStateType & StateType= {
    users: [],
    user: null,
    ...state

}


export default userState