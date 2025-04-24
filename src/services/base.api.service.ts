import {URLType} from "../models/UrlModel.ts";

export const getAll = async<T, > (baseUrl: URLType, endpoint: string) : Promise<T> => {
    console.log(`${baseUrl}/${endpoint}`)
    return (await fetch(`${baseUrl}/${endpoint}`)).json()
}