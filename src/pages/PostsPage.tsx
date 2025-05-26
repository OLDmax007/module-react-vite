import {useAppSelector} from "../hooks/useAppSelector.ts";
import {PostType} from "../models/types/PostType.ts";
import useAppFetch from "../hooks/useAppFetch.ts";
import {Link} from "react-router-dom";
import postSliceAsyncActions from "../redux/slices/post/postSliceAsyncActions.ts";
import LoadingComponent from "../components/LoadingComponent.tsx";


const PostsPage = () => {

    const {posts,loading} = useAppSelector(state => state.postSlice)
    useAppFetch(postSliceAsyncActions.loadPosts)


    return (
        <>
        {!loading && <LoadingComponent/>}
        <div>
            {posts.map((post: PostType) => (
                <Link key={post.id} to={'/posts/' + post.id}>
                    <li>{post.title}</li>
                </Link>
                ))}
        </div>
        </>
    );
};

export default PostsPage;