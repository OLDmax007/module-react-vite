import {useEffect} from "react";
import {DispatchType, useAppDispatch} from "./useAppDispatch.ts";

const useAppFetch =<T>(serviceFunc: () => Promise<T>, actionFunc: (payload: T) => { type: string, payload: T}): void => {
    const dispatch: DispatchType = useAppDispatch()

    useEffect(() => {
        const fetchData = async () => {
            const response = await serviceFunc()
            dispatch(actionFunc(response))
        }

        fetchData()
    }, [serviceFunc, actionFunc]);


}

export default useAppFetch