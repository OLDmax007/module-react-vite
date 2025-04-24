import {FC, useEffect, useState} from "react";

import PostComponent from "./PostComponent.tsx";

import {URLType} from "../../models/UrlModel.ts";
import {getAll} from "../../services/base.api.service.ts";
import {BaseResponseModel} from "../../models/BaseResponseModel.ts";
import {urls} from "../../constants/urls.ts";
import {PostDMJSModel} from "../../models/PostDMJSModel.ts";

type PostsComponentProps = {
    baseUrl: URLType
}

const PostsComponent: FC<PostsComponentProps> = ({baseUrl}) => {
    const [posts, setPosts] = useState<PostDMJSModel[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
                const response = await getAll<BaseResponseModel & { posts: PostDMJSModel[] }>(
                    baseUrl,
                    urls.dmjs.posts
                );
                setPosts(response.posts);

        };

        fetchPosts()
        return () => {
            console.log('completed')
        }
    }, [baseUrl]);


    return (
        <div className={'grid grid-cols-4 gap-4'}>
            {posts.map((post:PostDMJSModel) => (
                <PostComponent post={post} key={post.id}/>
            ))}
        </div>
    );
};

export default PostsComponent;