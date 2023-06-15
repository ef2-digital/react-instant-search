import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import classNames from 'classnames';
import Attributes from './Attributes';
import { ClearRefinements } from '../refinements';
const AttributesDesktop = ({ attributes, className, renderTitle, clearFilterLabel }) => {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: classNames('hidden md:block', className), children: [renderTitle, _jsx(ClearRefinements, { label: clearFilterLabel }), _jsx(Attributes, { attributes: attributes })] }) }));
};
export default AttributesDesktop;
