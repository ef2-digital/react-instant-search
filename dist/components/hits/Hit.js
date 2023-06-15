import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
const Hit = ({ hit }) => {
    if (!hit) {
        return _jsx(_Fragment, {});
    }
    return _jsx("div", { children: "Hitsig" });
};
export default Hit;
