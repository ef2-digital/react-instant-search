import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { usePagination } from 'react-instantsearch-hooks-web';
import { usePagination as usePaginationHook } from '../../hooks/usePagination';
import Pager from '../ui/Pager';
const Pagination = forwardRef(({ classNames, hitsPerPage }, ref) => {
    const { refine, currentRefinement, nbHits } = usePagination();
    const paginationRange = usePaginationHook({ totalCount: nbHits, pageSize: hitsPerPage, siblingCount: 1, currentPage: currentRefinement });
    if (!paginationRange || paginationRange.length < 2) {
        return null;
    }
    const onNext = () => {
        toPage(currentRefinement + 1);
    };
    const onPrevious = () => {
        toPage(currentRefinement - 1);
    };
    const toPage = (pageNumber) => {
        var _a;
        //@ts-ignore
        ref && ((_a = ref.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth' }));
        refine(pageNumber);
    };
    const lastPage = paginationRange[paginationRange.length - 1];
    return (_jsx(Pager, { pagerClassNames: classNames, paginationRange: paginationRange, currentPage: currentRefinement, onNext: onNext, onPrevious: onPrevious, toPage: toPage, lastPage: lastPage }));
});
export default Pagination;
