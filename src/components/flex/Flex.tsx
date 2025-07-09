import React from 'react';
import { View, ViewStyle, ViewProps } from 'react-native';
import { Spacing } from '@the-sintra/core';
import { LayoutSizeProps } from '@/types/component';
import { FlexDirection, FlexJustify, FlexAlign, FlexWrap } from './Flex.type';
import { getGapValue } from './Flex.function';

export interface FlexProps extends LayoutSizeProps, ViewProps {
  direction?: FlexDirection;
  justify?: FlexJustify;
  align?: FlexAlign;
  wrap?: FlexWrap;
  gap?: keyof typeof Spacing | number;
}

export const Flex = React.memo(function Flex(props: FlexProps) {
  const {
    children,
    direction = FlexDirection.Row,
    justify = FlexJustify.Start,
    align = FlexAlign.Stretch,
    wrap = FlexWrap.Nowrap,
    gap,
    fullHeight,
    fullWidth,
    fitContent,
    style,
    ...rest
  } = props;

  const gapValue = getGapValue(gap);

  const flexStyles: ViewStyle = {
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    flexWrap: wrap,
    ...(fullHeight ? { height: '100%' } : {}),
    ...(fullWidth ? { width: '100%' } : {}),
    ...(fitContent ? { alignSelf: 'flex-start' } : {}),
    ...(gapValue !== undefined ? { gap: gapValue } : {}),
  };

  return (
    <View
      style={[flexStyles, style]}
      {...rest}
    >
      {children}
    </View>
  );
}); 