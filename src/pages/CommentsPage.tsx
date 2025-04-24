import CommentsComponent from "../components/comment-components/CommentsComponent.tsx";
import {URLType} from "../models/UrlModel.ts";
import {FC} from "react";

interface CommentsPageProps {
    baseUrl: URLType;
}

const CommentsPage: FC<CommentsPageProps> = ({ baseUrl }) => {
    return (
        <div>
            <CommentsComponent baseUrl={baseUrl} />
        </div>
    );
};

export default CommentsPage;
