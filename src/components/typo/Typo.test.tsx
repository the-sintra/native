import React from 'react';
import { render } from '@testing-library/react-native';
import { Typo } from './Typo';

describe('Typo 컴포넌트', () => {
  it('Headline 텍스트가 올바르게 렌더링되는지 확인', () => {
    const { getByText } = render(<Typo.Headline>헤드라인 텍스트</Typo.Headline>);
    expect(getByText('헤드라인 텍스트')).toBeTruthy();
  });

  it('BodyLarge 텍스트가 올바르게 렌더링되는지 확인', () => {
    const { getByText } = render(<Typo.BodyLarge>바디 라지 텍스트</Typo.BodyLarge>);
    expect(getByText('바디 라지 텍스트')).toBeTruthy();
  });

  it('Body 텍스트가 올바르게 렌더링되는지 확인', () => {
    const { getByText } = render(<Typo.Body>바디 텍스트</Typo.Body>);
    expect(getByText('바디 텍스트')).toBeTruthy();
  });

  it('Subtext 텍스트가 올바르게 렌더링되는지 확인', () => {
    const { getByText } = render(<Typo.Subtext>서브텍스트</Typo.Subtext>);
    expect(getByText('서브텍스트')).toBeTruthy();
  });

  it('Caption 텍스트가 올바르게 렌더링되는지 확인', () => {
    const { getByText } = render(<Typo.Caption>캡션 텍스트</Typo.Caption>);
    expect(getByText('캡션 텍스트')).toBeTruthy();
  });

  it('커스텀 스타일이 적용되는지 확인', () => {
    const customStyle = { color: 'red' };
    const { getByText } = render(
      <Typo.Body style={customStyle}>커스텀 스타일 텍스트</Typo.Body>
    );
    const textElement = getByText('커스텀 스타일 텍스트');
    expect(textElement.props.style).toContainEqual(expect.objectContaining(customStyle));
  });

  it('접근성 속성이 올바르게 설정되는지 확인', () => {
    const { getByText } = render(
      <Typo.Headline accessibilityLabel="헤드라인 레이블">
        헤드라인
      </Typo.Headline>
    );
    const textElement = getByText('헤드라인');
    expect(textElement.props.accessibilityLabel).toBe('헤드라인 레이블');
  });

  it('자식 요소들이 올바르게 렌더링되는지 확인', () => {
    const { getByText } = render(
      <Typo.Body>
        일반 텍스트와 <Typo.Caption>캡션</Typo.Caption>이 함께
      </Typo.Body>
    );
    expect(getByText('일반 텍스트와')).toBeTruthy();
    expect(getByText('캡션')).toBeTruthy();
    expect(getByText('이 함께')).toBeTruthy();
  });
}); 