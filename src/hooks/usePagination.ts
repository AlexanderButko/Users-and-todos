import {useMemo} from "react";

export const usePagination = (totalPages: number) : number[] =>{// кастомный хук создания массива номеров страниц
    let pagArr : number[] = [];
    let pagesArray : number[] = useMemo( () => {
            for (let i = 0; i < totalPages; i++) {
                pagArr.push(i + 1);
            }
            return pagArr;
        } ,
        [totalPages]);//Переcчет произойдет только в случае изменения количества страниц - либо изм число постов на сервере, либо пользователь
    //изменит количество постов на страницу
    return pagesArray;
}