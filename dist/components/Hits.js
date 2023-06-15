import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import { Fragment } from 'react';
import { useHits } from 'react-instantsearch-hooks';
import Hit from './hits/Hit';
const Hits = ({ renderHit, hitsClassNames }) => {
    const { hits } = useHits();
    return (_jsx("div", { className: classNames(hitsClassNames === null || hitsClassNames === void 0 ? void 0 : hitsClassNames.grid, 'grid grid-cols-1 gap-8'), children: hits.map((hit) => renderHit ? _jsxs(Fragment, { children: [" ", renderHit({ hit })] }, `${hit.objectID}-${hit.id}`) : _jsx(Hit, { hit: hit })) }));
};
export default Hits;
