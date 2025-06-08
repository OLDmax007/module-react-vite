import {useAppSelector} from "../hooks/useAppSelector.ts";
import useAppFetch from "../hooks/useAppFetch.ts";
import asyncUserActions from "../redux/slices/user/asyncActions.ts";
import asyncPostActions from "../redux/slices/post/asyncActions.ts";
import asyncCommentActions from "../redux/slices/comment/asyncActions.ts";
import {PostType} from "../models/types/post/PostType.ts";
import {CommentType} from "../models/types/comment/CommentType.ts";
import {UserType} from "../models/types/user/UserType.ts";
import {useAppDispatch} from "../hooks/useAppDispatch.ts";
import {useEffect, useState} from "react";
import {postSliceActions} from "../redux/slices/post/postSlice.ts";
import LoadingComponent from "../components/LoadingComponent.tsx";

const ComplexPage = () => {
    const {users, loading:loadingUsers} = useAppSelector(state => state.userSlice)
    const {posts, postsByUserId,loading:loadingPosts} = useAppSelector(state => state.postSlice)
    const {comments, loading:loadingComments} = useAppSelector(state => state.commentSlice)
    useAppFetch(asyncUserActions.loadUsers, users.length === 0)
    useAppFetch(asyncPostActions.loadPosts, posts.length === 0)
    useAppFetch(asyncCommentActions.loadComments, comments.length === 0)

    const [userId, setUserId] = useState<number>(0)

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(postSliceActions.filteredPosts(userId))
    }, [dispatch, posts, userId]);

    return (
        <>
            {(!loadingComments && !loadingPosts && !loadingUsers) && <LoadingComponent/>}
            {users.map((user: UserType) => {
                // const userPosts = posts.filter(post => post.userId === user.id);
                return (
                    <ul key={user.id}>
                        <li key={user.id} onClick={() => setUserId(user.id)}
                            style={{fontWeight: userId === user.id ? 'bold' : 'normal', color: 'red'}}>
                            User name: {user.name}
                        </li>
                        <li>
                            {postsByUserId.map((post: PostType) => {
                                const postComments = comments.filter(comment => comment.postId === post.id)
                                return (
                                    <ol key={post.id}>
                                        <li>Post title: {post.title}</li>
                                        <li>Post id: {post.id}</li>
                                        <li>{postComments.map((comment: CommentType) => (
                                            <ol key={comment.id}>
                                                <li>Comment name: {comment.name}</li>
                                                <li>To he post: {comment.postId}</li>
                                                <li>Content: {comment.body}</li>
                                            </ol>))}
                                        </li>
                                    </ol>
                                )
                            })}
                        </li>
                    </ul>
                )
            })}

        </>
    );
};

export default ComplexPage;