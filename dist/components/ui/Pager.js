import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import { DOTS } from '../../hooks/usePagination';
const Pager = ({ pagerClassNames, currentPage, paginationRange, onPrevious, onNext, toPage, lastPage }) => {
    return (_jsx("nav", { "aria-label": "pagination", className: classNames('mt-8 flex', pagerClassNames === null || pagerClassNames === void 0 ? void 0 : pagerClassNames.wrapper), children: _jsxs("ul", { className: classNames('isolate inline-flex flex-wrap items-center space-x-2 md:mb-8 md:pl-8 mx-auto'), children: [_jsx("li", { className: classNames('pagination-item', {
                        'text-gray-300': currentPage < 1
                    }), children: _jsx("button", { onClick: onPrevious, className: classNames('bg-white disabled:hover:bg-white disabled:hover:text-inherit disabled:hover:cursor-not-allowed hover:bg-primary hover:text-white relative inline-flex h-10 w-10 items-center justify-center rounded-sm text-sm font-medium no-underline hover:no-underline focus:z-20 focus:no-underline', pagerClassNames === null || pagerClassNames === void 0 ? void 0 : pagerClassNames.pagerItem), disabled: currentPage < 1, children: _jsx(ArrowLeftIcon, { className: classNames('mr-1 h-4 w-4', { 'fill-gray-300': currentPage < 1 }) }) }) }), paginationRange &&
                    paginationRange.map((pageNumber, index) => {
                        const active = pageNumber === currentPage + 1;
                        if (pageNumber === DOTS) {
                            return (_jsx("li", { className: "pagination-item dots", children: "\u2026" }, index));
                        }
                        return (_jsx("li", { "aria-current": active, children: _jsx("button", { className: classNames('relative inline-flex h-10 w-10 items-center justify-center rounded-sm text-sm font-medium no-underline hover:no-underline focus:z-20 focus:no-underline', pagerClassNames === null || pagerClassNames === void 0 ? void 0 : pagerClassNames.pagerItem, {
                                    'bg-white text-gray-500 hover:bg-primary/10 hover:text-gray-600 focus:text-gray-500': !active,
                                    'z-10 bg-primary text-white hover:bg-primary-600 hover:text-white focus:text-white': active
                                }), onClick: () => typeof pageNumber === 'number' && toPage(pageNumber - 1), children: pageNumber }) }, index));
                    }), _jsx("li", { className: classNames('pagination-item', {
                        'text-gray-300': currentPage + 1 === lastPage
                    }), children: _jsx("button", { onClick: onNext, className: classNames('bg-white disabled:hover:bg-white disabled:hover:text-inherit disabled:hover:cursor-not-allowed hover:bg-primary hover:text-white relative inline-flex h-10 w-10 items-center justify-center rounded-sm text-sm font-medium no-underline hover:no-underline focus:z-20 focus:no-underline', pagerClassNames === null || pagerClassNames === void 0 ? void 0 : pagerClassNames.pagerItem), disabled: currentPage + 1 === lastPage, children: _jsx(ArrowRightIcon, { className: classNames('ml-1 h-4 w-4', { 'fill-gray-300': currentPage + 1 === lastPage }) }) }) })] }) }));
};
export default Pager;
