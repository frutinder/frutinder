import React from "react";

import styled from "styled-components";
import Cards from "./components/Cards";
import Card from "./components/CardSwitcher";

const data = ["Alexandre", "Thomas", "Lucien"];

const Container = styled.div`
  background: orange;
`

const Deck = styled(Cards)`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const ProductCard = styled(Card)`
  text-align: center;
  background-size: cover;
  position: absolute;
  background: white;
  height: 70%;
  width: 70%;
  margin: 0 auto;
  transition: box-shadow 0.3s;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  cursor: pointer;
`;

const Game = () => {
  return (
    <Container>
      <Deck onEnd={() => console.log("end")}>
        {data.map(item => (
          <ProductCard
            onSwipeLeft={() => console.log("swipe left")}
            onSwipeRight={() => console.log("swipe right")}
          >
            <h2>{item}</h2>
          </ProductCard>
        ))}
      </Deck>
    </Container>
  );
};

export default Game;
