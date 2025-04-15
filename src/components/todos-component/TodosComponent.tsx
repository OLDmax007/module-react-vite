import {getTodos} from "../../services/api.dmjs.service.ts";
import {useEffect, useState} from "react";
import {TodoModel} from "../../models/TodoModel.ts";
import TodoComponent from "./TodoComponent.tsx";

const TodosComponent = () => {
    const [todos, setTodos] = useState<TodoModel[]>([]);

    useEffect(() => {
        (async () => {
            setTodos(await getTodos());
        })();


        return () => {
            console.log('completed')
        }

    }, []);



    return (
        <div className={'grid grid-cols-4 gap-4'}>
            {todos.map((todo:TodoModel) => (
                <TodoComponent todo={todo} key={todo.id}/>
            ))}
        </div>
    );
};

export default TodosComponent;