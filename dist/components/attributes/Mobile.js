import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MixerHorizontalIcon } from '@radix-ui/react-icons';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/Sheet';
import Attributes from './Attributes';
import { ClearRefinements } from '../refinements';
import { ScrollArea } from '../ui/ScrollArea';
const AttributesMobile = ({ attributes, renderTitle, clearFilterLabel }) => {
    return (_jsx("div", { className: "block md:hidden", children: _jsxs(Sheet, { children: [_jsx(SheetTrigger, { className: "p-3 bg-white text-black rounded-md border", children: _jsx(MixerHorizontalIcon, {}) }), _jsxs(SheetContent, { size: "xl", position: "left", className: "bg-white", children: [_jsx(SheetHeader, { children: _jsx(SheetTitle, { children: renderTitle }) }), _jsxs(ScrollArea, { className: "h-[90%] w-[90%]", children: [_jsx(ClearRefinements, { label: clearFilterLabel }), _jsx(Attributes, { attributes: attributes })] })] })] }) }));
};
export default AttributesMobile;
