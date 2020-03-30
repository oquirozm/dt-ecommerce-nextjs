import React, { FC } from "react";
import styled from "styled-components";

const HeaderEl = styled.header`
  position: sticky;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 10px 40px;
  -webkit-backdrop-filter: saturate(180%) blur(5px);
  backdrop-filter: saturate(180%) blur(5px);
  box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.1);
`;

const Header: FC = () => <HeaderEl>Logo</HeaderEl>;

export default Header;
