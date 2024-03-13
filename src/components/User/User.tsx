import React, {FC} from 'react';
import {IUser} from "../../types/user";
import styles from "./User.module.css"


interface UserItemProps{
    user : IUser;
    clickFunc : (user : IUser) => void;
}

const UserItem : FC<UserItemProps> = ({user, clickFunc}) => {
    return (
        <div
            onClick = {() => clickFunc(user)}
            className={styles.user}
        >
            <ul className={styles.menu}>
                <li>{user.id}</li>
                <li>Имя: {user.name}</li>
                <li>Город: {user.address.city}</li>
                <li>Адрес: {user.address.street},{user.address.suite}</li>
            </ul>
        </div>

    );
};

export default UserItem;