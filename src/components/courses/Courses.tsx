import coursesAndDurationArray from "../../data/coursesData.ts";
import Course from "./Course.tsx";
import {ICourse} from "../../models/ICourse.ts";

const Courses = () => {
    return (
        <div className={'aaa flex justify-center items-center flex-col bg-sky-500/100 w-[25vw]'}>
            <span>Courses</span>
            <ul className={'list-disc'}>
                {coursesAndDurationArray.map((course: ICourse, index) => (
                    <Course key={index} title={course.title} monthDuration={course.monthDuration}/>
                ))}
            </ul>
        </div>
    );
};

export default Courses;