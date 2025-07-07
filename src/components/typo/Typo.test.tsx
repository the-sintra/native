import React from 'react';
import { render } from '@testing-library/react-native';
import { Typo } from './Typo';

describe('Typo 컴포넌트', () => {
  it('Headline 컴포넌트가 에러 없이 렌더링되는지 확인', () => {
    const { toJSON } = render(<Typo.Headline>헤드라인 텍스트</Typo.Headline>);
    expect(toJSON()).toBeTruthy();
  });

  it('BodyLarge 컴포넌트가 에러 없이 렌더링되는지 확인', () => {
    const { toJSON } = render(<Typo.BodyLarge>바디 라지 텍스트</Typo.BodyLarge>);
    expect(toJSON()).toBeTruthy();
  });

  it('Body 컴포넌트가 에러 없이 렌더링되는지 확인', () => {
    const { toJSON } = render(<Typo.Body>바디 텍스트</Typo.Body>);
    expect(toJSON()).toBeTruthy();
  });

  it('Subtext 컴포넌트가 에러 없이 렌더링되는지 확인', () => {
    const { toJSON } = render(<Typo.Subtext>서브텍스트</Typo.Subtext>);
    expect(toJSON()).toBeTruthy();
  });

  it('Caption 컴포넌트가 에러 없이 렌더링되는지 확인', () => {
    const { toJSON } = render(<Typo.Caption>캡션 텍스트</Typo.Caption>);
    expect(toJSON()).toBeTruthy();
  });

  it('커스텀 스타일이 적용되는지 확인', () => {
    const customStyle = { color: 'red' };
    const { toJSON } = render(
      <Typo.Body style={customStyle}>커스텀 스타일 텍스트</Typo.Body>
    );
    expect(toJSON()).toBeTruthy();
    // 스타일이 포함되어 있는지 확인 (red는 rgba(255,0,0,1.00)로 변환됨)
    const jsonResult = toJSON();
    expect(JSON.stringify(jsonResult)).toContain('255,0,0');
  });

  it('접근성 속성이 올바르게 설정되는지 확인', () => {
    const { toJSON } = render(
      <Typo.Headline accessibilityLabel="헤드라인 레이블">
        헤드라인
      </Typo.Headline>
    );
    expect(toJSON()).toBeTruthy();
    const jsonResult = toJSON();
    expect(JSON.stringify(jsonResult)).toContain('헤드라인 레이블');
  });

  it('자식 요소들이 올바르게 렌더링되는지 확인', () => {
    const { toJSON } = render(
      <Typo.Body>
        일반 텍스트와 <Typo.Caption>캡션</Typo.Caption>이 함께
      </Typo.Body>
    );
    expect(toJSON()).toBeTruthy();
    const jsonResult = toJSON();
    const jsonString = JSON.stringify(jsonResult);
    expect(jsonString).toContain('일반 텍스트와');
    expect(jsonString).toContain('캡션');
    expect(jsonString).toContain('이 함께');
  });

  it('Typo 컴포넌트가 Text 컴포넌트의 모든 props를 받을 수 있는지 확인', () => {
    const { toJSON } = render(
      <Typo.Body testID="test-body" numberOfLines={2}>
        테스트 텍스트
      </Typo.Body>
    );
    expect(toJSON()).toBeTruthy();
    const jsonResult = toJSON();
    expect(JSON.stringify(jsonResult)).toContain('test-body');
  });

  it('모든 Typo 컴포넌트가 정의되어 있는지 확인', () => {
    expect(Typo.Headline).toBeDefined();
    expect(Typo.BodyLarge).toBeDefined();
    expect(Typo.Body).toBeDefined();
    expect(Typo.Subtext).toBeDefined();
    expect(Typo.Caption).toBeDefined();
  });
});

