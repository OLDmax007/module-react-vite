import {getTodos} from "../../services/api.service.ts";
import {useEffect, useState} from "react";
import {ITodo} from "../../models/ITodo.ts";
import TodoComponent from "./TodoComponent.tsx";

const TodosComponent = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

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
            {todos.map((todo:ITodo) => (
                <TodoComponent todo={todo}/>
            ))}
        </div>
    );
};

export default TodosComponent;