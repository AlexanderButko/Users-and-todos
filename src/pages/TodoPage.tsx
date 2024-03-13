import React, {FC, useEffect, useState} from 'react';
import {ITodo} from "../types/todo";
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";
import CustomButton from "../UI/Button/CustomButton";


type TodoItemPageParams = {
    id: string;
}
const TodoPage: FC = () => {
    const [todo, setTodo] = useState<ITodo | null>(null);
    const params = useParams<TodoItemPageParams>();
    const navigate = useNavigate();

    useEffect(()=>{
        fetchTodo();
    } ,[]);

    async function fetchTodo (){
        try{
            let response = await axios.get<ITodo>('https://jsonplaceholder.typicode.com/todos/' + params.id);
            setTodo(response.data);
        }
        catch(e){
            alert(e);
        }
    }
    return (
        <div>
            <CustomButton
                callback = {()=>navigate('/todos')}
            >Назад</CustomButton>
            <div>{todo?.id}.{todo?.title} выполнено? {todo?.completed ? 'Yes':'No'}</div>

        </div>
    );
};

export default TodoPage
