import {FC} from "react";

const CourseModulesComponent: FC<{ modules: string[] }> = ({modules}) => {
    return (
        <ul className={'!pt-2  modules-list'}>
            {modules.map((mod, index) => (
                <li key={index} className={'text-gray-700 dark:text-gray-400'}>{mod}</li>
            ))
            }
        </ul>
    );
};

export default CourseModulesComponent;