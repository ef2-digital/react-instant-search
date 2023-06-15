import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import List from '../refinements/list/List';
import Range from '../refinements/range/Range';
import { Refinement } from '../refinements';
import { useHits } from 'react-instantsearch-hooks';
const refinementComponents = {
    List: List,
    Range: Range
};
const Attributes = ({ attributes }) => {
    const { results } = useHits();
    return (_jsx(_Fragment, { children: attributes.map((attribute) => {
            var _a;
            const Component = refinementComponents[attribute.refinementType || 'list'];
            const filterResults = (_a = results === null || results === void 0 ? void 0 : results.disjunctiveFacets) === null || _a === void 0 ? void 0 : _a.filter((result) => result.name === attribute.options.attribute);
            return (_jsx(Refinement, { attribute: attribute.options.attribute, label: attribute.label, settings: attribute.settings, className: attribute.classNames, children: _jsx(Component, Object.assign({}, attribute, { results: filterResults === null || filterResults === void 0 ? void 0 : filterResults.pop() })) }, `refinement-${attribute.options.attribute}`));
        }) }));
};
export default Attributes;
