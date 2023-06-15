import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
import { useRefinementList } from 'react-instantsearch-hooks';
import ListItem from './ListItem';
const List = ({ options }) => {
    const { refine, items } = useRefinementList(options);
    const refineItem = (attribute, isChecked) => {
        refine(attribute);
    };
    return _jsx(_Fragment, { children: items && items.map((item) => _createElement(ListItem, Object.assign({ refineItem: refineItem }, item, { hasCount: true, key: `list-item-${item.value}` }))) });
};
export default List;
