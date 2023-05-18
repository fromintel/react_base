import {useMemo} from 'react';
import {getPagesArray} from "../utils/pages";

export const usePagination = (totalPages, currentPage) => {
    return useMemo(() => {
        return getPagesArray(totalPages)
    }, [totalPages, currentPage])
}
