import { PropsWithChildren } from 'react';
export type HeaderClassNames = {
    wrapper?: string;
    totalHits?: string;
};
interface HeaderProps extends PropsWithChildren {
    classNamesList?: HeaderClassNames;
    messages?: {
        [key: string]: string;
    };
}
declare const Header: ({ classNamesList, messages, children }: HeaderProps) => import("react/jsx-runtime").JSX.Element;
export default Header;
