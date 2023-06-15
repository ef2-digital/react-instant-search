/** imported from shadcn */
"use client";
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
import { forwardRef } from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva } from "class-variance-authority";
import { Cross2Icon } from "@radix-ui/react-icons";
import classNames from "classnames";
const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;
const portalVariants = cva("fixed inset-0 z-50 flex", {
    variants: {
        position: {
            top: "items-start",
            bottom: "items-end",
            left: "justify-start",
            right: "justify-end",
        },
    },
    defaultVariants: { position: "right" },
});
const SheetPortal = (_a) => {
    var { position, className, children } = _a, props = __rest(_a, ["position", "className", "children"]);
    return (_jsx(SheetPrimitive.Portal, Object.assign({ className: classNames(className) }, props, { children: _jsx("div", { className: portalVariants({ position }), children: children }) })));
};
SheetPortal.displayName = SheetPrimitive.Portal.displayName;
const SheetOverlay = forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (_jsx(SheetPrimitive.Overlay, Object.assign({ className: classNames("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in", className) }, props, { ref: ref })));
});
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
const sheetVariants = cva("fixed z-50 scale-100 gap-4 bg-background p-6 opacity-100 shadow-lg border", {
    variants: {
        position: {
            top: "animate-in slide-in-from-top w-full duration-300",
            bottom: "animate-in slide-in-from-bottom w-full duration-300",
            left: "animate-in slide-in-from-left h-full duration-300",
            right: "animate-in slide-in-from-right h-full duration-300",
        },
        size: {
            content: "",
            default: "",
            sm: "",
            lg: "",
            xl: "",
            full: "",
        },
    },
    compoundVariants: [
        {
            position: ["top", "bottom"],
            size: "content",
            class: "max-h-screen",
        },
        {
            position: ["top", "bottom"],
            size: "default",
            class: "h-1/3",
        },
        {
            position: ["top", "bottom"],
            size: "sm",
            class: "h-1/4",
        },
        {
            position: ["top", "bottom"],
            size: "lg",
            class: "h-1/2",
        },
        {
            position: ["top", "bottom"],
            size: "xl",
            class: "h-5/6",
        },
        {
            position: ["top", "bottom"],
            size: "full",
            class: "h-screen",
        },
        {
            position: ["right", "left"],
            size: "content",
            class: "max-w-screen",
        },
        {
            position: ["right", "left"],
            size: "default",
            class: "w-1/3",
        },
        {
            position: ["right", "left"],
            size: "sm",
            class: "w-1/4",
        },
        {
            position: ["right", "left"],
            size: "lg",
            class: "w-1/2",
        },
        {
            position: ["right", "left"],
            size: "xl",
            class: "w-5/6",
        },
        {
            position: ["right", "left"],
            size: "full",
            class: "w-screen",
        },
    ],
    defaultVariants: {
        position: "right",
        size: "default",
    },
});
const SheetContent = forwardRef((_a, ref) => {
    var { position, size, className, children } = _a, props = __rest(_a, ["position", "size", "className", "children"]);
    return (_jsxs(SheetPortal, { position: position, children: [_jsx(SheetOverlay, {}), _jsxs(SheetPrimitive.Content, Object.assign({ ref: ref, className: classNames(sheetVariants({ position, size }), className) }, props, { children: [children, _jsxs(SheetPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [_jsx(Cross2Icon, { className: "h-4 w-4" }), _jsx("span", { className: "sr-only", children: "Close" })] })] }))] }));
});
SheetContent.displayName = SheetPrimitive.Content.displayName;
const SheetHeader = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({ className: classNames("flex flex-col space-y-2 text-center sm:text-left", className) }, props)));
};
SheetHeader.displayName = "SheetHeader";
const SheetFooter = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({ className: classNames("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className) }, props)));
};
SheetFooter.displayName = "SheetFooter";
const SheetTitle = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(SheetPrimitive.Title, Object.assign({ ref: ref, className: classNames("text-lg font-semibold text-foreground", className) }, props)));
});
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(SheetPrimitive.Description, Object.assign({ ref: ref, className: classNames("text-sm text-muted-foreground", className) }, props)));
});
SheetDescription.displayName = SheetPrimitive.Description.displayName;
export { Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription, };
