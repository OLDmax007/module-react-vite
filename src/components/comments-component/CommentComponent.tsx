import {FC} from "react";
import {CommentModel} from "../../models/CommentModel.ts";


type CommentComponentProps = {
    comment: CommentModel
}

const CommentComponent:FC<CommentComponentProps> = ({comment: {name, body}}) => {
    return (
        <ul className="list-decimal p-5">
            <li className={'underline'}>{name.toUpperCase()}</li>
            <li>
                {body}
            </li>
        </ul>
    );
};

export default CommentComponent;