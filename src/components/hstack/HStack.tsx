import { Flex, FlexDirection, FlexProps } from "@/components/flex";

export function HStack(props: FlexProps) {
  return <Flex {...props} direction={FlexDirection.Row} />;
}