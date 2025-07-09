import { FlexProps } from "@/components/flex/Flex";
import { Spacing } from "@the-sintra/core";

export function getGapValue(gap: FlexProps['gap']): number | undefined {
  if (typeof gap === 'number') return gap;
  if (gap && Spacing[gap]) return Spacing[gap];
  return undefined;
}