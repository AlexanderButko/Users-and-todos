import React, {FC, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
//import {fetchUsers} from "../store/action-creator/user";


//Если у кого появляется проблема в UserList при dispatch(fetchUsers()) пишет
// "TS2345: Argument of type '(dispatch: Dispatch ) => Promise ' is not assignable to parameter of type 'AnyAction." -
// просто добавьте в импорт import type {} from 'redux-thunk/extend-redux';
// Это скорее всего связано с тем что в useDispatch v8 вы уже не можете 'диспатчить' что угодно(в отличии от v7)
import type {} from 'redux-thunk/extend-redux'
import {useAction} from "../hooks/useAction";
import List from "../components/List";
import {IUser} from "../types/user";
import User from "../components/User/User";
import {useNavigate} from "react-router-dom";


const UserList : FC = () => {
    //Несмотря на то, что state имеет св-во users среда ругается. Это происходит потому, что хук useSelector
    //плохо дружит с типизацией
    //const state = useSelector(state => state.users);

    //Поэтому создали кастомный useTypedSelector, типизированный типом rootReducerа
    //Теперь WS подсказывает, какие состояния возвр кастомный хук, и какие свойства содержит state
    //Также при деструктуризации ctrl+space WS подсказывает, какие состояния может вернуть useTypedSelector
    //Итого не получится вернуть состояние, которое не определено в reducerе. В больших проектах, где может произойти путаница это может предотвратить ошибку
    const {users, loading, error} = useTypedSelector(state => state.user);

    const navigate = useNavigate();
    const {fetchUsers} = useAction();
    useEffect(() => {
        //Dispatch уже привязан к fetchUsers, его вызов не требуется
        fetchUsers();
    }, []);

    if (loading){
        return <h3>Загрузка...</h3>
    }
    if (error){
        return <h3>{error}</h3>
    }


    return (
        <div>
        <h1 className='main_header'>Сотрудники</h1>

                {/*users.map(user =><div key={user.id}>{user.id}. {user.name} </div>)*/}

                <List items={users} renderItem={
                    (user: IUser) => <User
                        user={user}
                        key={user.id}
                        clickFunc={() => navigate('/users/' + user.id)}

                    />
                }
                styles='user_container'
                />

        </div>


    );
};

export default UserList;