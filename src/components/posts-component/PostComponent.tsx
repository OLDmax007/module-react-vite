import {PostModel} from "../../models/PostModel.ts";
import {FC} from "react";


type PostComponentProps = {
    post: PostModel
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