/** imported from shadcn */
'use client';
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons';
import classNames from 'classnames';
const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;
const SelectTrigger = forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (_jsxs(SelectPrimitive.Trigger, Object.assign({ ref: ref, className: classNames('flex h-10 w-full items-center justify-between rounded-md border border-input px-3 py-2 text-sm ring-offset-primary placeholder:text-muted-foreground focus:outline-none focus:ring-0 focus:ring-primary focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50', className) }, props, { children: [children, _jsx(SelectPrimitive.Icon, { asChild: true, children: _jsx(ChevronDownIcon, { className: "h-4 w-4 opacity-50" }) })] })));
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
const SelectContent = forwardRef((_a, ref) => {
    var { className, children, position = 'popper' } = _a, props = __rest(_a, ["className", "children", "position"]);
    return (_jsx(SelectPrimitive.Portal, { children: _jsx(SelectPrimitive.Content, Object.assign({ ref: ref, className: classNames('relative z-50 min-w-[8rem] focus :outline-none overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80', position === 'popper' && 'translate-y-1', className), position: position }, props, { children: _jsx(SelectPrimitive.Viewport, { className: classNames('p-1', position === 'popper' && 'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'), children: children }) })) }));
});
SelectContent.displayName = SelectPrimitive.Content.displayName;
const SelectLabel = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(SelectPrimitive.Label, Object.assign({ ref: ref, className: classNames('py-1.5 pl-8 pr-2 text-sm font-semibold', className) }, props)));
});
SelectLabel.displayName = SelectPrimitive.Label.displayName;
const SelectItem = forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (_jsxs(SelectPrimitive.Item, Object.assign({ ref: ref, className: classNames('relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:outline-none focus:bg-primary  focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50', className) }, props, { children: [_jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: _jsx(SelectPrimitive.ItemIndicator, { children: _jsx(CheckIcon, { className: "h-4 w-4" }) }) }), _jsx(SelectPrimitive.ItemText, { children: children })] })));
});
SelectItem.displayName = SelectPrimitive.Item.displayName;
const SelectSeparator = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(SelectPrimitive.Separator, Object.assign({ ref: ref, className: classNames('-mx-1 my-1 h-px bg-muted', className) }, props)));
});
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
export { Select, SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectLabel, SelectItem, SelectSeparator };
