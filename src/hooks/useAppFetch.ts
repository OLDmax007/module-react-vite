import {useEffect} from "react";
import {useAppDispatch} from "./useAppDispatch.ts";

const useAppFetch = (actionFunc: () => any): void => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const action = actionFunc();
        if (action) {
            dispatch(action);
        }
    }, [dispatch, actionFunc]);
};

export default useAppFetch;
