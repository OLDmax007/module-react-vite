import {FC} from "react";
import {CommentModel} from "../../models/CommentModel.ts";


type CommentComponentProps = {
    comment: CommentModel
}

const CommentComponent:FC<CommentComponentProps> = ({comment: {id, body}}) => {
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