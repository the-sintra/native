// Jest 설정 파일
import '@testing-library/jest-native/extend-expect';

// @the-sintra/core 모킹
jest.mock('@the-sintra/core', () => ({
  useTheme: () => ({
    color: {
      primary: '#007AFF',
      secondary: '#5856D6',
      background: '#FFFFFF',
      text: '#000000',
      textSecondary: '#8E8E93',
      error: '#FF3B30',
      warning: '#FF9500',
      success: '#34C759',
      info: '#007AFF',
      border: '#E5E5EA',
      surface: '#F2F2F7',
    },
  }),
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
  },
  radius: {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    xxl: 24,
  },
  ThemeProvider: ({ children }) => children,
}));

// console.warn을 숨기기 (테스트 시 노이즈 방지)
global.console = {
  ...console,
  warn: jest.fn(),
}; 