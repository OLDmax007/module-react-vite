import {UrlModel} from "../models/UrlModel.ts";
import {QueryModel} from "../models/QueryModel.ts";

export const getAll = async<T, > (baseUrl: UrlModel, endpoint: string, query?: QueryModel) : Promise<T> => {
    if (query?.limit && query?.page) {
        const skippedElemets = (query.page - 1) * query.limit
        console.log(`${baseUrl}/${endpoint}?limit=${query.limit}?skip=${skippedElemets}`)
        return (await fetch(`${baseUrl}/${endpoint}?limit=${query.limit}&skip=${skippedElemets}`)).json()

    } else {
        return (await fetch(`${baseUrl}/${endpoint}`)).json()
    }
}