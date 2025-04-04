import {FC} from "react";

type CoursePropsType = {
        title: string;
        monthDuration: number;
    }

    const Course:FC<CoursePropsType> = (course) => {
        return (
            <li className={'text-left text-shadow-lg/20'}>
                {course.title} - {course.monthDuration}
            </li>
        );
    };

    export default Course;