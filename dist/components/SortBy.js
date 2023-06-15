import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSortBy } from 'react-instantsearch-hooks';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './ui/Select';
const SortBy = ({ items, settings }) => {
    const { options, refine } = useSortBy({ items: items });
    const sort = (value) => {
        refine(value);
    };
    return (_jsx("div", { className: 'flex ml-auto w-44', children: _jsxs(Select, { onValueChange: (value) => sort(value), children: [_jsx(SelectTrigger, { className: "border-none h-auto p-0", children: _jsx(SelectValue, { placeholder: settings === null || settings === void 0 ? void 0 : settings.placeholder }) }), _jsx(SelectContent, { className: "bg-white", children: options.map((option) => (_jsx(SelectItem, { value: `${option.value}`, children: option.label }, `sortby-${option.value}`))) })] }) }));
};
export default SortBy;
