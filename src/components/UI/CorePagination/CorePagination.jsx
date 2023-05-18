import React from 'react';
import {usePagination} from "../../../hooks/usePagination";

const CorePagination = ({totalPages, page, changePage}) => {
    let pagesArray = usePagination(totalPages, page);
    return (
        <div className='pagination'>
            {
                pagesArray.map((paginationNumber) =>
                    <span
                        key={paginationNumber}
                        className={
                            paginationNumber === page
                                ? 'pagination__item pagination__item--current'
                                : 'pagination__item'}
                        onClick={() => changePage(paginationNumber)}
                    >
                            {paginationNumber}
                        </span>
                )
            }
        </div>
    );
};

export default CorePagination;