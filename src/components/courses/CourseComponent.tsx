import {FC} from "react";
import {ICourseModel} from "../../models/ICourseModel.ts";
import CourseModulesComponent from "./CourseModulesComponent.tsx";

type CoursePropsType = {
    course: ICourseModel
}

const CourseComponent: FC<CoursePropsType> = ({course}) => {
    return (

        <ul className={'list-disc text-left'}>
            <li>
                {course.title}
            </li>
            <li>
                {course.rating}
            </li>
            <li>
                {course.price}
            </li>
            <li>
                modules:
                <CourseModulesComponent modules={course.modules}/>
            </li>
        </ul>
    );
};

export default CourseComponent;