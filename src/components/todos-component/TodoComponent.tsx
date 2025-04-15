import {TodoModel} from "../../models/TodoModel.ts";
import {FC} from "react";


type TodoComponentProps = {
    todo: TodoModel
}

const TodoComponent:FC<TodoComponentProps> = ({todo: {todo, completed}}) => {
    return (
        <ul className="list-decimal p-5">
            <li className={'underline'}>{todo}</li>
            <li>
                { completed ? 'Completed' : 'Not yet'}
            </li>
        </ul>
    );
};

export default TodoComponent;