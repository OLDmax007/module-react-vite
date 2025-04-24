import {FC} from "react";
import {PostUnifiedModel} from "../../models/post-models/PostUnifiedModel.ts";


type PostComponentProps = {
    post: PostUnifiedModel
}

const PostComponent:FC<PostComponentProps> = ({post: {title, body}}) => {
    return (
        <ul className="list-decimal p-5">
            <li className={'underline'}>{title.toUpperCase()}</li>
            <li>
                {body}
            </li>
        </ul>
    );
};

export default PostComponent;