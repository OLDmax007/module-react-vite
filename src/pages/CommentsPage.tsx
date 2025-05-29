import {useAppSelector} from "../hooks/useAppSelector.ts";
import {CommentType} from "../models/types/comment/CommentType.ts";
import useAppFetch from "../hooks/useAppFetch.ts";
import asyncActions from "../redux/slices/comment/asyncActions.ts";
import LoadingComponent from "../components/LoadingComponent.tsx";
import {Link} from "react-router-dom";

const CommentsPage = () => {
   const {comments, loading} = useAppSelector(state => state.commentSlice)

    useAppFetch(asyncActions.loadComments)

    return (
        <ul>
            {!loading && <LoadingComponent/>}
            {
                comments.map((comment: CommentType) => (
                    <Link to={'/comments/' + comment.id}><li key={comment.id}>{comment.name}</li></Link>
                ))
            }
            
        </ul>
    );
};

export default CommentsPage;