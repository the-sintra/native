import { StyleProp, ViewStyle } from "react-native";

export interface BaseComponentProps {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    testID?: string;
}

export interface LayoutSizeProps {
    fullWidth?: boolean;
    fullHeight?: boolean;
    fitContent?: boolean;
}