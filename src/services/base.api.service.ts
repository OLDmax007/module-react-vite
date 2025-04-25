import {UrlModel} from "../models/UrlModel.ts";

export const getAll = async<T, > (baseUrl: UrlModel, endpoint: string) : Promise<T> => {
    console.log(`${baseUrl}/${endpoint}`)
    return (await fetch(`${baseUrl}/${endpoint}`)).json()
}