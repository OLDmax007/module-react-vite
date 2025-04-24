import {FC, useEffect, useState} from "react";

import PostComponent from "./PostComponent.tsx";

import {URLType} from "../../models/UrlModel.ts";
import {getAll} from "../../services/base.api.service.ts";
import {BaseResponseModel} from "../../models/BaseResponseModel.ts";
import {baseUrlDMJS, baseUrlJSPH, urls} from "../../constants/urls.ts";
import {PostUnifiedModel} from "../../models/post-models/PostUnifiedModel.ts";

type PostsComponentProps = {
    baseUrl: URLType
}

const PostsComponent: FC<PostsComponentProps> = ({baseUrl}) => {
    const [posts, setPosts] = useState<PostUnifiedModel[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            if (baseUrl === baseUrlDMJS) {
                const response = await getAll<BaseResponseModel & { posts: PostUnifiedModel[] }>(
                    baseUrl,
                    urls.dmjs.posts
                );
                setPosts(response.posts);
            } else if (baseUrl === baseUrlJSPH) {
                const response = await getAll<PostUnifiedModel[]>(
                    baseUrl,
                    urls.jsph.posts
                );
                setPosts(response);
            }
        };

        fetchPosts()
        return () => {
            console.log('completed')
        }
    }, [baseUrl]);


    return (
        <div className={'grid grid-cols-4 gap-4'}>
            {posts.map((post:PostUnifiedModel) => (
                <PostComponent post={post} key={post.id}/>
            ))}
        </div>
    );
};

export default PostsComponent;