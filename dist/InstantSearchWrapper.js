'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from 'react';
import { Configure, InstantSearch } from 'react-instantsearch-hooks-web';
import classNames from 'classnames';
import Hits from './components/Hits';
import Pagination from './components/hits/Pagination';
import SortBy from './components/SortBy';
import { AttributesMobile, AttributesDesktop } from './components/attributes/';
import { history } from 'instantsearch.js/es/lib/routers';
import Header from './components/hits/Header';
export var RefinementTypeEnum;
(function (RefinementTypeEnum) {
    RefinementTypeEnum["List"] = "List";
    RefinementTypeEnum["Range"] = "Range";
})(RefinementTypeEnum || (RefinementTypeEnum = {}));
export const InstantSearchWrapper = ({ searchClient, indexName, hitsPerPage, classNamesList, filterableAttributes, sortableAttributes, renderContent, renderHit, messages }) => {
    var _a;
    const ref = useRef(null);
    return (_jsx("div", { className: classNames(classNamesList === null || classNamesList === void 0 ? void 0 : classNamesList.wrapper, 'grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-4'), children: _jsxs(InstantSearch, { indexName: indexName, searchClient: searchClient, routing: {
                router: history(),
                stateMapping: {
                    //@ts-ignore
                    stateToRoute(uiState) {
                        const indexUiState = uiState[indexName];
                        return Object.assign(Object.assign({}, indexUiState.refinementList), { page: indexUiState.page });
                    },
                    //@ts-ignore
                    routeToState(routeState) {
                        return {
                            [indexName]: { refinementList: Object.assign({}, routeState), page: routeState.page }
                        };
                    }
                }
            }, children: [_jsx(Configure //@ts-ignore
                , { hitsPerPage: hitsPerPage !== null && hitsPerPage !== void 0 ? hitsPerPage : 20 }), filterableAttributes && (_jsx(AttributesDesktop, { className: classNamesList === null || classNamesList === void 0 ? void 0 : classNamesList.refinementsWrapper, attributes: filterableAttributes, renderTitle: renderContent === null || renderContent === void 0 ? void 0 : renderContent.renderRefinementsContent, clearFilterLabel: messages && messages.clearFilters })), _jsxs("div", { className: classNames((_a = classNamesList === null || classNamesList === void 0 ? void 0 : classNamesList.hits) === null || _a === void 0 ? void 0 : _a.wrapper, 'md:col-span-3'), ref: ref, children: [renderContent === null || renderContent === void 0 ? void 0 : renderContent.renderHitsContent, _jsxs(Header, { classNamesList: classNamesList === null || classNamesList === void 0 ? void 0 : classNamesList.header, messages: messages, children: [filterableAttributes && (_jsx(AttributesMobile, { attributes: filterableAttributes, renderTitle: renderContent === null || renderContent === void 0 ? void 0 : renderContent.renderRefinementsContent, clearFilterLabel: messages && messages.clearFilters })), sortableAttributes && _jsx(SortBy, { items: sortableAttributes.items, settings: sortableAttributes.settings })] }), _jsx(Hits, { renderHit: renderHit, hitsClassNames: classNamesList === null || classNamesList === void 0 ? void 0 : classNamesList.hits }), _jsx(Pagination, { ref: ref, hitsPerPage: hitsPerPage, classNames: classNamesList === null || classNamesList === void 0 ? void 0 : classNamesList.pager })] })] }) }));
};
