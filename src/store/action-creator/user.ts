import {UserAction, UserActionTypes} from "../../types/user";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchUsers = () => {
    //Необходимо типизировать dispatch, чтобы среда говорила нам, какие поля мы должны вернуть в actionе, чтобы избежать ошибки
    //Теперь среда говорит, что action с type: UserActionTypes.FETCH_USERS_ERROR должен возвращать еще и payload,
    // да еще не какой нибудь, а именно строкового типа
    return async function (dispatch : Dispatch<UserAction>){

        try{
            //Говорим, что загрузка данных началась.
            dispatch({
                type: UserActionTypes.FETCH_USERS
                //payload для типа UserAction в случае type: UserActionTypes.FETCH_USERS неопределен,
                //поэтому ничего не указываем
            });
            let response = await axios.get('https://jsonplaceholder.typicode.com/users');

            dispatch({
                type: UserActionTypes.FETCH_USERS_SUCCESS,
                //payload для типа UserAction в случае type: UserActionTypes.FETCH_USERS_SUCCESS - массив any,
                //поэтому возвращаем загруженный массив пользователей
                payload: response.data
            });

        } catch(e){
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                //payload для типа UserAction в случае type: UserActionTypes.FETCH_USERS_ERROR определен строкой,
                //поэтому возвращаем строку
                payload: 'Ошибка при загрузке'
            });
        }
    }
}