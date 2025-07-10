import { Asterisk } from 'lucide-react-native';
import { TextStyle } from 'react-native';
import { useTheme } from '@the-sintra/core';

import { HStack, Typo } from '@/components';
import { TypoProps } from '@/components/typo';
import { BaseComponentProps } from '@/types/component';

export enum LabelSize {
    Default,
    Small
}

interface Props extends BaseComponentProps {
    size?: LabelSize;   
}

export const Label = ({ children, style, size = LabelSize.Default }: Props) => {
    const {theme, themeMode} = useTheme();

    const variantMap: Record<LabelSize, React.ComponentType<TypoProps>> = {
        [LabelSize.Default]: Typo.Body,
        [LabelSize.Small]: Typo.Caption
    }

    const iconSizeMap: Record<LabelSize, number> = {
        [LabelSize.Default]: 12,
        [LabelSize.Small]: 10
    }

    const TypoComponent = variantMap[size];
    const iconSize = iconSizeMap[size];

    return <HStack gap={2}>
        <TypoComponent style={style as TextStyle}>{children}</TypoComponent>
        <Asterisk size={iconSize} color={theme.text.danger.default} />
    </HStack>;
};