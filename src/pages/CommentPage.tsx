import {useAppSelector} from "../hooks/useAppSelector.ts";
import useAppFetch from "../hooks/useAppFetch.ts";
import asyncActions from "../redux/slices/comment/asyncActions.ts";
import LoadingComponent from "../components/LoadingComponent.tsx";
import {useParams} from "react-router-dom";
import {useCallback} from "react";

const CommentPage = () => {

    const {commentId} = useParams()
    const {comment, loading} = useAppSelector(state => state.commentSlice)

    const fetchPost = useCallback(() => {
        return commentId ? asyncActions.loadComment(+commentId) : undefined
    }, [commentId]);
    useAppFetch(fetchPost)

    return (
        <>
            {!loading && <LoadingComponent/>}
            {   comment && <ul>
                <li>{comment.postId}</li>
                <li>{comment.id}</li>
                <li>{comment.name}</li>
                <li>{comment.body}</li>
            </ul>
            }
        </>
    );
};

export default CommentPage;