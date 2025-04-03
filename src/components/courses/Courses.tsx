import coursesTitleArray from "../../data/coursesData.ts";
import Course from "./Course.tsx";

const Courses = () => {
    return (
        <div>
            {coursesTitleArray.map((title, index) => (
                <Course key={index} title={title}>Course</Course>
            ))}
        </div>
    );
};

export default Courses;