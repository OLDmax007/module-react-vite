import {ITodo} from "../../models/ITodo.ts";
import {FC} from "react";


type TodoComponentProps = {
    todo: ITodo
}

const TodoComponent:FC<TodoComponentProps> = ({todo: {title, completed}}) => {
    return (
        <ul className="list-decimal p-5">
            <li className={'underline'}>{title.toUpperCase()}</li>
            <li>
                { completed ? 'Completed' : 'Not yet'}
            </li>
        </ul>
    );
};

export default TodoComponent;