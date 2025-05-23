import {useEffect} from "react";
import {DispatchType, useAppDispatch} from "./useAppDispatch.ts";

const useAppFetch =<T>(serviceFunc: () => Promise<T>, actionFunc: (payload: T) => { type: string, payload: T}) => {
    const dispatch: DispatchType = useAppDispatch()

    useEffect(() => {
        const fetchApi = async () => {
            const response = await serviceFunc()
            dispatch(actionFunc(response))
        }

        fetchApi()
    }, [serviceFunc, actionFunc]);

    return
}

export default useAppFetch