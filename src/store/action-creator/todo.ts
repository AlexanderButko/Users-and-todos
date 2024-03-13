
import {Dispatch} from "redux";
import axios from "axios";
import {TodoAction, TodoActionTypes} from "../../types/todo";

export const fetchTodos = (page = 1, limit = 20) => {

    return async function (dispatch : Dispatch<TodoAction>){

        try{

            dispatch({
                type: TodoActionTypes.FETCH_TODO

            });
            let response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {
                    _page: page,
                    _limit: limit
                }});

            dispatch({
                type: TodoActionTypes.FETCH_TODO_SUCCESS,
                payload: {
                    data: response.data,
                    totalObjCount: response.headers['x-total-count']
                }
            });

        } catch(e){
            dispatch({
                type: TodoActionTypes.FETCH_TODO_ERROR,
                payload: 'Ошибка при загрузке'
            });
        }
    }
}
export function setTodoPage(page: number): TodoAction {
    return {
        type: TodoActionTypes.SET_TODO_PAGE,
        payload: page,
    }
}