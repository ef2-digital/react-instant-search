import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Cross2Icon } from '@radix-ui/react-icons';
import { useClearRefinements } from 'react-instantsearch-hooks';
const ClearRefinements = ({ label }) => {
    const { refine } = useClearRefinements();
    return (_jsxs("div", { className: "border-b border-gray-200 py-3 flex items-center text-sm cursor-pointer h-[45px]", onClick: () => refine(), children: [_jsx(Cross2Icon, {}), " ", _jsx("span", { className: "ml-1", children: label !== null && label !== void 0 ? label : 'reset filters' })] }));
};
export default ClearRefinements;
