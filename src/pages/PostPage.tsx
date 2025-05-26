import {useAppSelector} from "../hooks/useAppSelector.ts";
import useAppFetch from "../hooks/useAppFetch.ts";
import postSliceAsyncActions from "../redux/slices/post/postSliceAsyncActions.ts";
import {useParams} from "react-router-dom";
import LoadingComponent from "../components/LoadingComponent.tsx";
import {useCallback} from "react";

const PostPage = () => {
    console.log("post rerender", performance.now());
    const {post,loading} = useAppSelector(state => state.postSlice)
    const {postId}= useParams()


    const fetchPost = useCallback(() => {
        return postId ? postSliceAsyncActions.loadPost(+postId) : undefined
    }, [postId]);

    useAppFetch(fetchPost)
    return (
        <>
            {!loading && <LoadingComponent/>}
        {post && <ul><li>{post.title}</li><li>{post.id}</li></ul>}
        </>
    );
};

export default PostPage;