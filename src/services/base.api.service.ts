import {UrlModel} from "../models/UrlModel.ts";

export const getAll = async<T, > (baseUrl: UrlModel, endpoint: string) : Promise<T> => {
    return (await fetch(`${baseUrl}/${endpoint}`)).json()
}