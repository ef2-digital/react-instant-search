import { ReactNode } from 'react';
import { HitsClassNames } from './components/Hits';
import { RenderHitProps } from './components/hits/Hit';
import { RefinementSettingsProps, RefinementsClassNames } from './components/refinements';
import { SearchClient } from 'algoliasearch';
import { PagerClassNames } from './components/hits/Pagination';
import { SortBySettingProps } from './components/SortBy';
import { HeaderClassNames } from './components/hits/Header';
export declare enum RefinementTypeEnum {
    List = "List",
    Range = "Range"
}
export type FilterableAttributeProps = {
    label: string;
    refinementType: RefinementTypeEnum;
    options: {
        attribute: string;
        sortBy?: string[];
    };
    settings?: RefinementSettingsProps;
    classNames?: RefinementsClassNames;
};
type classNamesList = {
    wrapper?: string;
    refinementsWrapper?: string;
    refinements?: RefinementsClassNames;
    hits?: HitsClassNames;
    pager?: PagerClassNames;
    header?: HeaderClassNames;
};
type renderProps = {
    renderRefinementsContent?: ReactNode;
    renderHitsContent?: ReactNode;
};
type SearchWrapperProps = {
    searchClient: any | SearchClient;
    indexName: string;
    hitsPerPage: number;
    classNamesList?: classNamesList;
    filterableAttributes?: FilterableAttributeProps[];
    sortableAttributes?: {
        items: {
            value: string;
            label: string;
        }[];
        settings: SortBySettingProps;
    };
    renderContent?: renderProps;
    renderHit?: ({ hit }: RenderHitProps) => JSX.Element;
    messages?: {
        [key: string]: string;
    };
};
export declare const InstantSearchWrapper: ({ searchClient, indexName, hitsPerPage, classNamesList, filterableAttributes, sortableAttributes, renderContent, renderHit, messages }: SearchWrapperProps) => import("react/jsx-runtime").JSX.Element;
export {};
