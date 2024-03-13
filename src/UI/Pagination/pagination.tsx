import React, {FC, PropsWithChildren} from 'react';
import {usePagination} from "../../hooks/usePagination";
import styles from './Pagination.module.css'

interface PaginationProps {
    totalPages: number,
    page: number,
    changePage: (p: number)=>void
}

const Pagination : FC<PropsWithChildren<PaginationProps>> = ({totalPages, page, changePage}) => {
    let pagesArray = usePagination(totalPages);
    return (
        <div className={styles.pagination}>
            {pagesArray.map((p) =>
                <span key={p}
                      className={ page === p ? styles.page_active : styles.page}
                      onClick={() => changePage(p)}
                >{p}</span>
            )}
        </div>
    );
};

export default Pagination;