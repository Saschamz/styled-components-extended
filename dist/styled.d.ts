export declare type TextKitProps = {
    centered?: boolean;
    capitalize?: boolean;
    uppercase?: boolean;
    lowercase?: boolean;
    verticalMargin?: number;
    fontWeight?: number;
    fontSize?: number;
};
export declare type ViewKitProps = {
    verticalMargin?: number;
    horizontalMargin?: number;
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
};
export declare type FlexRowProps = {
    spaceBetween?: boolean;
    spaceAround?: boolean;
    spaceEvenly?: boolean;
    centered?: boolean;
};
export declare type CircleViewProps = {
    size: number;
    color?: string;
};
export declare type WhitespaceProps = {
    space: number;
};
export declare let Text: import("styled-components").StyledComponent<typeof import("react-native").Text, import("styled-components").DefaultTheme, TextKitProps, never>;
export declare function addBaseCssToText(css: any): void;
export declare let View: import("styled-components").StyledComponent<typeof import("react-native").View, import("styled-components").DefaultTheme, ViewKitProps, never>;
export declare function addBaseCssToView(css: any): void;
export declare const CenteredView: import("styled-components").StyledComponent<typeof import("react-native").View, any, ViewKitProps, never>;
export declare const CenteredFillView: import("styled-components").StyledComponent<typeof import("react-native").View, any, ViewKitProps, never>;
export declare const FlexRow: import("styled-components").StyledComponent<typeof import("react-native").View, any, ViewKitProps & FlexRowProps, never>;
export declare const AlignEndView: import("styled-components").StyledComponent<typeof import("react-native").View, import("styled-components").DefaultTheme, {}, never>;
export declare const Whitespace: import("styled-components").StyledComponent<typeof import("react-native").View, any, ViewKitProps & WhitespaceProps, never>;
export declare const CircleView: import("styled-components").StyledComponent<typeof import("react-native").View, any, ViewKitProps & CircleViewProps, never>;
export declare const BottomAbsoluteContainer: import("styled-components").StyledComponent<typeof import("react-native").View, any, ViewKitProps, never>;
export declare const TopAbsoluteContainer: import("styled-components").StyledComponent<typeof import("react-native").View, any, ViewKitProps, never>;
export declare const FillView: import("styled-components").StyledComponent<typeof import("react-native").View, any, ViewKitProps, never>;
export declare const FullScreenView: import("styled-components").StyledComponent<typeof import("react-native").View, any, ViewKitProps, never>;
