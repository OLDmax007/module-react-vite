import {PostModel} from "../../models/PostModel.ts";
import {FC} from "react";


type TodoComponentProps = {
    post: PostModel
}

const PostComponent:FC<TodoComponentProps> = ({post: {title, body}}) => {
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