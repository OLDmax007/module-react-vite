import {TodoModel} from "../models/TodoModel.ts";
import {PostModel} from "../models/PostModel.ts";

const getTodos = async () : Promise<TodoModel[]> => {
    return (await fetch(import.meta.env.VITE_API_JPL_BASE_URL + '/todos')).json()
}

const getPosts = async () : Promise<PostModel[]> => {
    return (await fetch(import.meta.env.VITE_API_JPL_BASE_URL + '/posts')).json()
}


export {
    getTodos,
    getPosts
}