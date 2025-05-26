import {PayloadAction} from "@reduxjs/toolkit";

const actions = {
    setLoading: <T extends {loading: boolean}>(state:T, action: PayloadAction<boolean>) => {
        state.loading = action.payload;
    }
}


export default actions