import {useAppSelector} from "../hooks/useAppSelector.ts";
import useAppFetch from "../hooks/useAppFetch.ts";
import asyncUserActions from "../redux/slices/user/asyncActions.ts";
import asyncPostActions from "../redux/slices/post/asyncActions.ts";
import asyncCommentActions from "../redux/slices/comment/asyncActions.ts";
import {PostType} from "../models/types/post/PostType.ts";
import {CommentType} from "../models/types/comment/CommentType.ts";
import {UserType} from "../models/types/user/UserType.ts";

const ComplexPage = () => {
    const {users} = useAppSelector(state => state.userSlice)
    const {posts} = useAppSelector(state => state.postSlice)
    const {comments} = useAppSelector(state => state.commentSlice)
    useAppFetch(asyncUserActions.loadUsers, users.length === 0)
    useAppFetch(asyncPostActions.loadPosts, posts.length === 0)
    useAppFetch(asyncCommentActions.loadComments, comments.length === 0)

    return (
        <>
            {users.map((user: UserType) => {
                console.log(posts)
                const userPosts = posts.filter(post => post.userId === user.id);
                console.log(userPosts)
                return (
                <ul>
                    <li>User name: {user.name}</li>
                    <li>
                        {userPosts.map((post: PostType) => {
                            const postComments = comments.filter(comment => comment.postId === post.id)
                            return (
                                <ol>
                                    <li>Post title: {post.title}</li>
                                    <li>Post id: {post.id}</li>
                                    <li>{postComments.map((comment: CommentType) => (
                                        <ol>
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