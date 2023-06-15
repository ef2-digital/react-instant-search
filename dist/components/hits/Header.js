import { jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { usePagination } from 'react-instantsearch-hooks';
const Header = ({ classNamesList, messages, children }) => {
    var _a;
    const { nbHits } = usePagination();
    return (_jsxs("div", { className: classNames(classNamesList === null || classNamesList === void 0 ? void 0 : classNamesList.wrapper, 'flex items-center py-3 border-b h-[45px]'), children: [_jsxs("span", { className: classNames(classNamesList === null || classNamesList === void 0 ? void 0 : classNamesList.totalHits, 'text-sm'), children: [nbHits, " ", (_a = messages === null || messages === void 0 ? void 0 : messages.results) !== null && _a !== void 0 ? _a : 'result(s)'] }), children] }));
};
export default Header;
