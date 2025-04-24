import {FC} from "react";
import PostsComponent from "../components/post-components/PostsComponent.tsx";
import {URLType} from "../models/UrlModel.ts";


interface PostsPageProps {
    baseUrl: URLType;
}

const PostsPage: FC<PostsPageProps> = ({ baseUrl }) => {
    return (
        <div>
            <PostsComponent baseUrl={baseUrl}/>
        </div>
    );
};

export default PostsPage;
