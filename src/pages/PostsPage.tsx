import {useAppSelector} from "../hooks/useAppSelector.ts";
import useAppFetch from "../hooks/useAppFetch.ts";
import {Link} from "react-router-dom";
import asyncActions from "../redux/slices/post/asyncActions.ts";
import LoadingComponent from "../components/LoadingComponent.tsx";
import {PostType} from "../models/types/post/PostType.ts";


const PostsPage = () => {
    console.log("posts rerender", performance.now());
    const {posts,loading} = useAppSelector(state => state.postSlice)

    useAppFetch(asyncActions.loadPosts)

    return (
        <>
        {!loading && <LoadingComponent/>}
        <ul>
            {posts.map((post: PostType) => (
                <Link key={post.id} to={'/posts/' + post.id}>
                    <li>{post.title}</li>
                </Link>
                ))}
        </ul>
        </>
    );
};

export default PostsPage;