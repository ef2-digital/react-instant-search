import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';
import { Collapsible, CollapsibleTrigger } from '../ui/Collapsible';
import { useInstantSearch } from 'react-instantsearch-hooks';
const Refinement = ({ attribute, label, className, settings, children }) => {
    var _a;
    const { indexUiState } = useInstantSearch();
    const [open, setOpen] = useState((_a = settings === null || settings === void 0 ? void 0 : settings.defaultOpen) !== null && _a !== void 0 ? _a : false);
    useEffect(() => {
        if (indexUiState.refinementList && attribute in indexUiState.refinementList) {
            setOpen(true);
        }
    }, [indexUiState.refinementList]);
    const toggle = () => {
        setOpen(!open);
    };
    return (_jsxs(Collapsible, { className: classNames(className === null || className === void 0 ? void 0 : className.wrapper, 'border-b border-gray-200 py-3'), children: [_jsxs(CollapsibleTrigger, { className: classNames(className === null || className === void 0 ? void 0 : className.labelWrapper, 'flex cursor-pointer w-full items-center justify-between py-2 text-sm'), onClick: () => toggle(), children: [label, " ", _jsx("span", { className: 'ml-auto', children: open ? _jsx(ChevronUpIcon, {}) : _jsx(ChevronDownIcon, {}) })] }), _jsx("div", { className: classNames({ "h-0 hidden": !open, 'h-auto': open }), children: children })] }));
};
export default Refinement;
