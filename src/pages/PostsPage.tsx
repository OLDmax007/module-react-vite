import {useAppSelector} from "../hooks/useAppSelector.ts";
import {PostType} from "../models/types/PostType.ts";
import useAppFetch from "../hooks/useAppFetch.ts";
import {Link} from "react-router-dom";
import postSliceAsyncActions from "../redux/slices/post/postSliceAsyncActions.ts";


const PostsPage = () => {

    const posts = useAppSelector(state => state.postSlice.posts)
    useAppFetch(postSliceAsyncActions.loadPosts)


    return (
        <div>
            {posts.map((post: PostType) => (
                <Link key={post.id} to={'/posts/' + post.id}>
                    <li>{post.title}</li>
                </Link>
                ))}
        </div>
    );
};

export default PostsPage;