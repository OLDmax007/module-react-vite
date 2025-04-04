import {FC} from "react";

const CourseModulesComponent: FC<{ modules: string[] }> = ({modules}) => {
    return (
        <ul className={'modules-list'}>
            {modules.map((mod: string) => (
                <li className={'text-gray-700 dark:text-gray-400'}>{mod}</li>
            ))
            }
        </ul>
    );
};

export default CourseModulesComponent;