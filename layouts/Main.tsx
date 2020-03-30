import React, { FC } from "react";
import { Header, Footer } from "../features";

const Main: FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Main;
