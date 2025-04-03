    import {FC, ReactNode} from "react";

    type CoursePropsType = {
        title: string
        children?: ReactNode
    }

    const Course:FC<CoursePropsType> = ({title, children}) => {
        return (
            <div>
                {children} - {title}
            </div>
        );
    };

    export default Course;