import {FC} from "react";
import {CommentUnifiedModel} from "../../models/comment-models/CommentUnifiedModel.ts";


type CommentComponentProps = {
    comment: CommentUnifiedModel
}

const CommentComponent:FC<CommentComponentProps> = ({comment: {id, body, }}) => {
    return (
        <ul className="list-decimal p-5">
            <li className={'underline'}>{id}</li>
            <li>
                {body}
            </li>
        </ul>
    );
};

export default CommentComponent;