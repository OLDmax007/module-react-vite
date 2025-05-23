import {useDispatch} from "react-redux";
import store from "../redux/store.ts";

export type DispatchType = typeof store.dispatch


export const useAppDispatch = () => useDispatch<DispatchType>();