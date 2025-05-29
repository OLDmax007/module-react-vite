    import {useEffect} from "react";
    import {useAppDispatch} from "./useAppDispatch.ts";

    const useAppFetch = (actionFunc: () => any, isFetch?: boolean): void => {

        const dispatch = useAppDispatch();

        useEffect(() => {
            if (isFetch === false) return;
            const action = actionFunc();
            if (action) {
                dispatch(action);
            }
        }, [dispatch, actionFunc, isFetch]);
    };

    export default useAppFetch;
