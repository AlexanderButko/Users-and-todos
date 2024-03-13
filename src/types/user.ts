//Выносим все типы в отдельный файл
export interface IUser{
    id: number,
    name: string
    email: string
    address: {
        street: string,
        suite: string,
        city: string
    }
}

export interface UserState {
    users: IUser[];
    loading: boolean;
    error: string | null;
}

export enum UserActionTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR"
}
//Интерфейсы для типизации actionов
interface FetchUserAction{
    type: UserActionTypes.FETCH_USERS,
}

interface FetchUserSuccessAction{
    type: UserActionTypes.FETCH_USERS_SUCCESS,
    payload: any[]
}

interface FetchUserErrorAction{
    type: UserActionTypes.FETCH_USERS_ERROR,
    payload: string
}

export type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction;