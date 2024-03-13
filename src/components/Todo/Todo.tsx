import React, {FC} from 'react';
import {ITodo} from "../../types/todo";
import styles from './Todo.module.css'
import CustomSelect from "../../UI/CustomSelect/CustomSelect";
import {useTypedSelector} from "../../hooks/useTypedSelector";


interface TodoItemProps{
    todo : ITodo;
    clickFunc : (todo : ITodo) => void;
}

const TodoItem : FC<TodoItemProps> = ({todo, clickFunc}) => {
    const {users} = useTypedSelector(state => state.user)
    return (

        <div  onClick = {() => clickFunc(todo)}
              className={todo.completed? styles.todo_completed : styles.todo_uncompleted}
        >
            {todo.id}. {todo.title}
            {todo.completed?
                ''
                :  <div className={styles.todo_uncompleted_select}>
                    <p>Исполнитель</p>
                    <CustomSelect options={users} defaultOption={'Исполнитель'}/>
                </div>
            }
        </div>

    );
};

export default TodoItem;