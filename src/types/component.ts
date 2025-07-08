export interface BaseComponentProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export interface LayoutSizeProps {
    fullWidth: boolean;
    fullHeight: boolean;
    fitContent: boolean;
}