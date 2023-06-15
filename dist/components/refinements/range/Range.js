import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRange } from 'react-instantsearch-hooks';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/Select';
import { useEffect, useState } from 'react';
const arrayRange = (start, stop, step) => Array.from({ length: (stop - start) / step + 2 }, (value, index) => start + index * step).map((number) => parseInt((number / 1000).toFixed()) * 1000);
const Range = ({ options, settings, results }) => {
    var _a, _b;
    const [givenResults, setResults] = useState(undefined);
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);
    const [rangesMin, setRangesMin] = useState([]);
    const [rangesMax, setRangesMax] = useState([]);
    const { refine } = useRange(Object.assign({ min: min, max: max }, options));
    useEffect(() => {
        if (!results) {
            return;
        }
        if (!givenResults) {
            setResults(results);
        }
    }, [results]);
    useEffect(() => {
        if (!givenResults) {
            return;
        }
        const resultRange = Object.keys(givenResults.data)
            .map(Number)
            .sort((a, b) => a - b);
        setMin(resultRange === null || resultRange === void 0 ? void 0 : resultRange.shift());
        setMax(resultRange === null || resultRange === void 0 ? void 0 : resultRange.pop());
    }, [givenResults]);
    useEffect(() => {
        var _a, _b;
        if (!min && !max) {
            return;
        }
        setRangesMin(arrayRange(min, max, (_a = settings === null || settings === void 0 ? void 0 : settings.range) === null || _a === void 0 ? void 0 : _a.step));
        setRangesMax(arrayRange(min, max, (_b = settings === null || settings === void 0 ? void 0 : settings.range) === null || _b === void 0 ? void 0 : _b.step));
    }, [min, max]);
    const changeMin = (value) => {
        var _a;
        setRangesMax(arrayRange(parseInt(value), max, (_a = settings === null || settings === void 0 ? void 0 : settings.range) === null || _a === void 0 ? void 0 : _a.step));
        refine([parseInt(value), Number.isFinite(max) ? max : undefined]);
    };
    const changeMax = (value) => {
        var _a;
        setRangesMax(arrayRange(min, parseInt(value), (_a = settings === null || settings === void 0 ? void 0 : settings.range) === null || _a === void 0 ? void 0 : _a.step));
        refine([Number.isFinite(min) ? min : undefined, parseInt(value)]);
    };
    return (_jsxs("div", { className: "flex gap-x-2 justify-start", children: [_jsxs(Select, { onValueChange: (value) => changeMin(value), children: [_jsx(SelectTrigger, { className: "bg-white", children: _jsx(SelectValue, { placeholder: (_a = settings === null || settings === void 0 ? void 0 : settings.range) === null || _a === void 0 ? void 0 : _a.labels.from }) }), _jsx(SelectContent, { className: "bg-white", children: rangesMin.map((range) => (_jsx(SelectItem, { value: `${range}`, children: range }, `range-from-${range}`))) })] }), _jsxs(Select, { onValueChange: (value) => changeMax(value), children: [_jsx(SelectTrigger, { className: "bg-white", children: _jsx(SelectValue, { placeholder: (_b = settings === null || settings === void 0 ? void 0 : settings.range) === null || _b === void 0 ? void 0 : _b.labels.to }) }), _jsx(SelectContent, { className: "bg-white", children: rangesMax.map((range) => (_jsx(SelectItem, { value: `${range}`, children: range }, `range-till-${range}`))) })] })] }));
};
export default Range;
