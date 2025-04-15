import {getComments} from "../../services/api.service.ts";
import {useEffect, useState} from "react";
import {CommentModel} from "../../models/CommentModel.ts";
import CommentComponent from "./CommentComponent.tsx";

const CommentsComponent = () => {
    const [comments, setComments] = useState<CommentModel[]>([]);

    useEffect(() => {
        (async () => {
            setComments(await getComments());
        })();


        return () => {
            console.log('completed')
        }

    }, []);



    return (
        <div className={'grid grid-cols-4 gap-4'}>
            {comments.map((comment:CommentModel) => (
                <CommentComponent comment={comment} key={comment.id}/>
            ))}
        </div>
    );
};

export default CommentsComponent;