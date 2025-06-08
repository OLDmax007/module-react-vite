import {PayloadAction} from "@reduxjs/toolkit";
import {StateType} from "../../models/types/StateType.ts";

const actions = {
    setLoading: (state:StateType, action: PayloadAction<boolean>) => {
        state.loading = action.payload;
    },
}


export default actions