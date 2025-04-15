import {getPosts} from "../../services/api.service.ts";
import {useEffect, useState} from "react";
import {PostModel} from "../../models/PostModel.ts";
import PostComponent from "./PostComponent.tsx";

const PostsComponent = () => {
    const [posts, setPosts] = useState<PostModel[]>([]);

    useEffect(() => {
        (async () => {
            setPosts(await getPosts());
        })();


        return () => {
            console.log('completed')
        }

    }, []);



    return (
        <div className={'grid grid-cols-4 gap-4'}>
            {posts.map((post:PostModel) => (
                <PostComponent post={post} key={post.id}/>
            ))}
        </div>
    );
};

export default PostsComponent;