import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useAction} from "../hooks/useAction";
import {getPageCount} from "../Utilities/pages";
import Pagination from "../UI/Pagination/pagination";
import List from "../components/List";
import {ITodo} from "../types/todo";
import Todo from "../components/Todo/Todo";
import {useNavigate} from "react-router-dom";

const TodoList  = () => {

    const navigate = useNavigate();
    const {loading, todos, page, limit, error, totalCount} = useTypedSelector(state=> state.todo);

    const {fetchUsers} = useAction();
    useEffect(() => {
        fetchUsers();
    }, []);

    const {fetchTodos, setTodoPage} = useAction();
    let totalPages = getPageCount(totalCount, limit);


    useEffect(() => {
        fetchTodos(page, limit)
    },[page]);

    if (loading){
        return <h3>Загрузка...</h3>
    }
    if (error){
        return <h3>{error}</h3>
    }
    return (
        <div>

            <h1 className='main_header'>Список задач</h1>
            {<List items={todos} renderItem={
                (todo: ITodo) => <Todo
                    todo={todo} key={todo.id}
                    clickFunc={() => navigate('/todos/' + todo.id)}
                />
            }
            />}
            {/*todos.map(todo =><Todo todo={todo} clickFunc={() => navigate('/todos/' + todo.id)}/>)*/}

            <Pagination
                totalPages={totalPages}
                page={page}
                changePage={setTodoPage}
            />
        </div>

    );
};

export default TodoList;