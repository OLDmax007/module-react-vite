import {UserType} from "./UserType.ts";

export type  UserSliceType = {
    users: UserType[]
    user: UserType | null
}
