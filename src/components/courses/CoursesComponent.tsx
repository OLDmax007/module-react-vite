import courses from "../../data/coursesData.ts";
import CourseComponent from "./CourseComponent.tsx";
import {ICourseModel} from "../../models/ICourseModel.ts";

const CoursesComponent = () => {
    return (
        <>
            <h1 className={'courses-title text-4xl text-black'}>Courses</h1>
            <div className={'flex'}>
                {courses.map((course: ICourseModel, index) => (
                    <CourseComponent key={index} course={course}/>
                ))}
            </div>
        </>
    );
};

export default CoursesComponent;