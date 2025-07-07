import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Typo } from './Typo';
import type { TypoProps } from './Typo';

const meta: Meta<TypoProps> = {
  title: 'Components/Typo',
  component: Typo.Body,
  parameters: {
    docs: {
      description: {
        component: '다양한 텍스트 스타일을 제공하는 타이포그래피 컴포넌트입니다.',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: '텍스트 내용',
    },
    style: {
      control: 'object',
      description: '커스텀 스타일 (TextStyle)',
    },
    // 불필요한 컨트롤들 비활성화
    accessibilityLabel: {
      table: { disable: true },
    },
    numberOfLines: {
      table: { disable: true },
    },
    onPress: {
      table: { disable: true },
    },
    selectable: {
      table: { disable: true },
    },
    testID: {
      table: { disable: true },
    },
  },
};

export default meta;
type Story = StoryObj<TypoProps>;

export const Default: Story = {
  render: () => (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typo.Headline>헤드라인 텍스트 (24/30)</Typo.Headline>
      <Typo.BodyLarge>바디 라지 텍스트 (18/26)</Typo.BodyLarge>
      <Typo.Body>바디 텍스트 (17/24)</Typo.Body>
      <Typo.Subtext>서브텍스트 (14/20)</Typo.Subtext>
      <Typo.Caption>캡션 텍스트 (12/16)</Typo.Caption>
    </div>
  ),
};

export const Headline: Story = {
  args: {
    children: '헤드라인 텍스트를 수정해보세요',
    style: { fontWeight: '600' },
  },
  render: (args) => (
    <div style={{ padding: '20px' }}>
      <Typo.Headline {...args} />
    </div>
  ),
};

export const BodyLarge: Story = {
  args: {
    children: '바디 라지 텍스트를 수정해보세요',
    style: { fontWeight: '400' },
  },
  render: (args) => (
    <div style={{ padding: '20px' }}>
      <Typo.BodyLarge {...args} />
    </div>
  ),
};

export const Body: Story = {
  args: {
    children: '바디 텍스트를 수정해보세요',
    style: { fontWeight: '400' },
  },
  render: (args) => (
    <div style={{ padding: '20px' }}>
      <Typo.Body {...args} />
    </div>
  ),
};

export const Subtext: Story = {
  args: {
    children: '서브텍스트를 수정해보세요',
    style: { opacity: 0.8 },
  },
  render: (args) => (
    <div style={{ padding: '20px' }}>
      <Typo.Subtext {...args} />
    </div>
  ),
};

export const Caption: Story = {
  args: {
    children: '캡션 텍스트를 수정해보세요',
    style: { textTransform: 'uppercase' },
  },
  render: (args) => (
    <div style={{ padding: '20px' }}>
      <Typo.Caption {...args} />
    </div>
  ),
};

export const Interactive: Story = {
  render: () => (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Typo.Headline onPress={action('headline-clicked')}>클릭 가능한 헤드라인</Typo.Headline>
      <Typo.BodyLarge onPress={action('body-large-clicked')}>클릭 가능한 바디 라지</Typo.BodyLarge>
      <Typo.Body onPress={action('body-clicked')}>클릭 가능한 바디 텍스트</Typo.Body>
      <Typo.Subtext onPress={action('subtext-clicked')}>클릭 가능한 서브텍스트</Typo.Subtext>
      <Typo.Caption onPress={action('caption-clicked')}>클릭 가능한 캡션</Typo.Caption>
    </div>
  ),
};

export const WithCustomStyles: Story = {
  render: () => (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Typo.Headline style={{ textAlign: 'center', color: '#FF3B30' }}>
        중앙 정렬 빨간 헤드라인
      </Typo.Headline>
      <Typo.Body style={{ fontStyle: 'italic', opacity: 0.7 }}>
        이탤릭 투명도 적용 바디
      </Typo.Body>
      <Typo.Caption style={{ textTransform: 'uppercase', letterSpacing: 1 }}>
        대문자 캡션
      </Typo.Caption>
    </div>
  ),
};