import {TodoModel} from "../models/TodoModel.ts";
import {PostModel} from "../models/PostModel.ts";
import {CommentModel} from "../models/CommentModel.ts";
import {ApiResponseModel} from "../models/ApiResponseModel.ts";

const getTodos = async () : Promise<TodoModel[]> => {
    const res:ApiResponseModel<TodoModel, 'todos'> = await (await fetch(import.meta.env.VITE_API_DMJS_BASE_URL + '/todos')).json()
    return res.todos
}

const getPosts = async () : Promise<PostModel[]> => {
    const res:ApiResponseModel<PostModel, 'posts'> = await (await fetch(import.meta.env.VITE_API_DMJS_BASE_URL + '/posts')).json()
    return res.posts
}

const getComments = async () : Promise<CommentModel[]> => {
    const res:ApiResponseModel<CommentModel, 'comments'> = await (await fetch(import.meta.env.VITE_API_DMJS_BASE_URL + '/comments')).json()
    return res.comments
}



export {
    getTodos,
    getPosts,
    getComments
}