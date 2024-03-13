import {TodoAction, TodoActionTypes, TodoState} from "../../types/todo";

const initialState : TodoState = {
    todos : [],
    loading: false,
    error: null,
    page: 1,
    limit: 20,
    totalCount: 0
}

export const todoReducer = (state = initialState, action : TodoAction ) : TodoState  => {
    switch (action.type){
        case TodoActionTypes.FETCH_TODO :
            return {
                ...state,
                loading: true
            }
        case TodoActionTypes.FETCH_TODO_SUCCESS:
            return {
                ...state,
                todos: action.payload.data,
                loading: false,
                totalCount: action.payload.totalObjCount
            }
        case TodoActionTypes.FETCH_TODO_ERROR:
            return {
                ...state,
                loading: false,
                //В данном случае action.payload типизирован строкой
                error: action.payload,
            }
        case TodoActionTypes.SET_TODO_PAGE:
            return {
                ...state,
                page: action.payload
            }
        default: return state
    }
}