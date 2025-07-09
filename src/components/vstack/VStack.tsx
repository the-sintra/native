import { Flex, FlexDirection, FlexProps } from "@/components/flex";

export function VStack(props: FlexProps) {
  return <Flex {...props} direction={FlexDirection.Column} />;
}