import React from "react";
import { Button, Flex } from "../components";
import { Header } from "../features";
import { Main } from "../layouts";

const Home = () => (
  <Main>
    <section>
      <h2>Slider</h2>
      <p>Im a slider</p>
    </section>
    <section>
      <h2>some other items</h2>
      <p>Some other items oh aaaaa</p>
    </section>
    <section>
      <h2>section</h2>
      <p>dale a tu lpay</p>
    </section>
    <section>
      <h2>Some buttons</h2>
      <Flex flexDirection="column">
        <Button>Oh no</Button>
        <Button>ah</Button>
      </Flex>
    </section>
  </Main>
);

export default Home;
