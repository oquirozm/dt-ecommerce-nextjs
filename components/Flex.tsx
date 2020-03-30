import styled from "styled-components";
import {
  flexbox,
  space,
  layout,
  LayoutProps,
  SpaceProps,
  FlexboxProps,
} from "styled-system";

const Flex = styled.div<FlexboxProps & SpaceProps & LayoutProps>`
  display: flex;
  ${flexbox}
  ${space}
  ${layout}
`;
export default Flex;
