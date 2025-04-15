import {TodoModel} from "../models/TodoModel.ts";
import {PostModel} from "../models/PostModel.ts";
import {CommentModel} from "../models/CommentModel.ts";
import {DMJSResponseModel} from "../models/DMJSResponseModel.ts";
import {ProductModel} from "../models/ProductModel.ts";

const getTodos = async () : Promise<TodoModel[]> => {
    const res:DMJSResponseModel<TodoModel, 'todos'> = await (await fetch(import.meta.env.VITE_API_DMJS_BASE_URL + '/todos')).json()
    return res.todos
}

const getPosts = async () : Promise<PostModel[]> => {
    const res:DMJSResponseModel<PostModel, 'posts'> = await (await fetch(import.meta.env.VITE_API_DMJS_BASE_URL + '/posts')).json()
    return res.posts
}

const getComments = async () : Promise<CommentModel[]> => {
    const res:DMJSResponseModel<CommentModel, 'comments'> = await (await fetch(import.meta.env.VITE_API_DMJS_BASE_URL + '/comments')).json()
    return res.comments
}

const getProducts = async () : Promise<ProductModel[]> => {
    const res:DMJSResponseModel<ProductModel, 'products'> = await (await fetch(import.meta.env.VITE_API_DMJS_BASE_URL + '/products')).json()
    return res.products
}



export {
    getTodos,
    getPosts,
    getComments,
    getProducts
}