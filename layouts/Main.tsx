import React, { FC } from "react";
import { Header, Footer } from "../features";
import styled from "styled-components";

const MainWrapper = styled.main`
  padding: 40px;
`;

const Main: FC = ({ children }) => {
  return (
    <>
      <Header />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </>
  );
};

export default Main;
