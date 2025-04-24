import {FC, useEffect, useState} from "react";
import {getAll} from "../../services/base.api.service.ts";
import {BaseResponseModel} from "../../models/BaseResponseModel.ts";
import {baseUrlDMJS, baseUrlJSPH, urls} from "../../constants/urls.ts";
import CommentComponent from "./CommentComponent.tsx";
import {URLType} from "../../models/UrlModel.ts";
import {CommentUnifiedModel} from "../../models/comment-models/CommentUnifiedModel.ts";


type CommentsComponentProps = {
    baseUrl: URLType;
};

const CommentsComponent: FC<CommentsComponentProps> = ({ baseUrl }) => {
    const [comments, setComments] = useState<CommentUnifiedModel[]>([]);

    useEffect(() => {
        const fetchComments = async () => {
            if (baseUrl === baseUrlDMJS) {
                console.log('1')
                const response = await getAll<BaseResponseModel & { comments: CommentUnifiedModel[] }>(
                    baseUrl,
                    urls.dmjs.comments
                );
                setComments(response.comments);
            } else if (baseUrl === baseUrlJSPH) {
                console.log('2')
                const response = await getAll<CommentUnifiedModel[]>(
                    baseUrl,
                    urls.jsph.comments
                );
                setComments(response);
            }
        };

        fetchComments()

        return () => {
            console.log('completed')
        }

    }, [baseUrl]);

    return (
        <div className="grid grid-cols-4 gap-4">
            {comments.map((comment: CommentUnifiedModel) => (
                <CommentComponent comment={comment} key={comment.id} />
            ))}
        </div>
    );
};

export default CommentsComponent;
