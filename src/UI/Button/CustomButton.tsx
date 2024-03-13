import React, {FC, PropsWithChildren} from 'react';
import styles from './CustomButton.module.css'

interface ICustomButton{
    children: string,
    callback: () => void
}
const  CustomButton : FC<PropsWithChildren<ICustomButton>> = ({children, callback}) => {
    return (
        <button onClick = {() => callback()} className={styles.customButton}>
            {children}
        </button>
    );
};

export default CustomButton;