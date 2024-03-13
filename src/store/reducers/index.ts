import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {todoReducer} from "./todoReducer";

export const rootReducer = combineReducers({
    user : userReducer,
    todo : todoReducer
} );

//Получаем тип rootReducer ({user : userReducer, todo : todoReducer})
export type RootState = ReturnType<typeof rootReducer>
//Простой typeof rootReducer вернет function