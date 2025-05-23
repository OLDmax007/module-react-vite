import {useAppSelector} from "../hooks/useAppSelector.ts";
import useAppFetch from "../hooks/useAppFetch.ts";
import {getAll} from "../services/api.jspl.service.ts";
import {PostType} from "../models/types/PostType.ts";
import {postSliceActions} from "../redux/post-slice/postSlice.ts";

const PostsPage = () => {

    const posts = useAppSelector(state => state.postSlice.posts)
    useAppFetch(async () => {
        return await getAll<PostType[]>('posts')
    }, postSliceActions.loadPosts)

    return (
        <div>
            {posts.map((post: PostType) => (
                <div key={post.id}>{post.title}</div>
                ))}
        </div>
    );
};

export default PostsPage;