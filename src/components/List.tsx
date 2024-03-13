import React, {FC} from 'react';

interface ListProps<T>{
    items : T[];
    renderItem : (item : T) => React.ReactNode;
    styles?: string;
}

export default function List<T>(props : ListProps<T>){
    return(
        <div className={props.styles}>
            {
                props.items.map(props.renderItem)
            }
        </div>
    );
};