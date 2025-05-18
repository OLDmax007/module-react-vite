import {useEffect, useState} from "react";

const useFetch = <T,>(endpoint: string, defaultValue: T):T => {
    const [items, setItems] = useState<T>(defaultValue)

    useEffect(() => {

        const fetchApi = async () => {
            const response = await fetch(endpoint)
            setItems(await response.json())
        }

        fetchApi()

    }, []);

    return items
}
export default useFetch