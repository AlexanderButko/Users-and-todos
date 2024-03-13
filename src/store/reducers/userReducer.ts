import {UserAction, UserActionTypes, UserState} from "../../types/user";


const initialState : UserState = {
    users : [],
    loading: false,
    error: null,
}

//Указываем тип возвращаемого объекта UserState, чтобы среда указывала нам, какие свойства у объекта должны быть заполнены,
//тем самым исключая ошибку
//Аналогично типизировали и actionы, тем самым исключив возможность передачи в payload ошибочных данных
export const userReducer = (state = initialState, action : UserAction) : UserState => {
    switch (action.type){
        case UserActionTypes.FETCH_USERS :
            return {
                users: [],
                loading: true,
                error: null,
            }
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {
                //В данном случае action.payload типизирован массивом any
                users: action.payload,
                loading: false,
                error: null,
            }
        case UserActionTypes.FETCH_USERS_ERROR:
            return {
                users: [],
                loading: false,
                //В данном случае action.payload типизирован строкой
                error: action.payload,
            }
        default :
            return state;
    }

}