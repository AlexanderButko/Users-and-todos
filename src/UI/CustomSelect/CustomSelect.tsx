import React from 'react';
import styles from './CustomSelect.module.css'
import {IUser} from "../../types/user";

interface ICustomSelect{
    options: IUser[],
    defaultOption?: string,
    //changer: (arg: string) => void,
}
const CustomSelect = ({options, defaultOption}:ICustomSelect) => {
    return (
        <select className={styles.customSelect}
                onClick={e => e.stopPropagation()}
                /*onChange={event => changer(event.target.value)}*/
        >
            <option disabled>{defaultOption}</option>
            {options.map( option =>
                <option key = {option.id} value= {option.name}>
                    {option.name}
                </option>
            ) }
        </select>
    );
};

export default CustomSelect;