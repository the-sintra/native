import React from 'react';
import { Text, TextStyle, StyleSheet } from 'react-native';
import { useTheme } from '@the-sintra/core';

interface BaseTypoProps {
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
  accessibilityLabel?: string;
  numberOfLines?: number;
  onPress?: () => void;
  selectable?: boolean;
  testID?: string;
}

// 기본 타이포그래피 컴포넌트
const createTypoComponent = (
  defaultStyle: TextStyle,
  componentName: string
) => {
  const TypoComponent = React.memo(function TypoComponent(props: BaseTypoProps) {
    const { children, style, ...restProps } = props;
    const {theme} = useTheme();

    const textColor = theme.text.primary || '#000000';

    return (
      <Text
        style={[
          defaultStyle,
          { color: textColor },
          style
        ]}
        {...restProps}
      >
        {children}
      </Text>
    );
  });
  
  TypoComponent.displayName = componentName;
  return TypoComponent;
};

// 타이포그래피 스타일 정의 (이미지 기준)
const styles = StyleSheet.create({
  headline: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '600',
  },
  bodyLarge: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '400',
  },
  body: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '400',
  },
  subtext: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
  },
});

// 각 타이포그래피 컴포넌트 생성
const Headline = createTypoComponent(styles.headline, 'Typo.Headline');
const BodyLarge = createTypoComponent(styles.bodyLarge, 'Typo.BodyLarge');
const Body = createTypoComponent(styles.body, 'Typo.Body');
const Subtext = createTypoComponent(styles.subtext, 'Typo.Subtext');
const Caption = createTypoComponent(styles.caption, 'Typo.Caption');

// Typo 네임스페이스 객체로 익스포트
export const Typo = {
  Headline,
  BodyLarge,
  Body,
  Subtext,
  Caption,
};

export type { BaseTypoProps as TypoProps }; 