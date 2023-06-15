import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import classNames from 'classnames';
const ListItem = ({ value, label, highlighted, count, isRefined, hasCount, refineItem }) => {
    return (_jsxs("div", { className: "flex py-1", children: [_jsx(Checkbox.Root, { className: classNames('h-5 w-5 rounded text-center bg-white border border-gray-300 focus:ring-indigo-500', {
                    '!bg-primary': isRefined
                }), defaultChecked: isRefined !== null && isRefined !== void 0 ? isRefined : false, onCheckedChange: (checked) => refineItem(value, checked), checked: isRefined, id: `item${value}`, children: _jsx(Checkbox.Indicator, { className: "text-white", children: _jsx(CheckIcon, { width: 16 }) }) }), _jsxs("label", { htmlFor: `item${value}`, className: "pl-4 text-sm flex w-full", children: [label, " ", hasCount && _jsx("span", { className: "text-xs ml-auto", children: count })] })] }));
};
export default ListItem;
