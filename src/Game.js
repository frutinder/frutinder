import React from "react";

import styled from "styled-components";
import Cards from "./components/Cards";
import Card from "./components/CardSwitcher";

import products from './products.json'

const currentMonth = 4

const data = products.map(product => {
  return {
    id: product.id,
    name: product.displayName,
    inSeason: product.months[currentMonth - 1]
  }
})

const shuffledData = data.map(product => {
  const i = Math.floor(Math.random() * (data.length));
  return data[i]
})

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
`;

const ProductImage = styled.img`
  width: 70%;
`

const Game = () => {
  return (
    <Container>
      <Deck onEnd={() => console.log("end")}>
        {shuffledData.map(({id, name, inSeason}) => (
          <ProductCard
            key={name}
            onSwipeLeft={() => console.log("swipe left")}
            onSwipeRight={() => console.log("swipe right")}
          >
            <h2>{name}</h2>
            <h2>{inSeason ? "yes" : "no"}</h2>
            <ProductImage src={`/img/products/${id}.png`}/>
          </ProductCard>
        ))}
      </Deck>
    </Container>
  );
};

export default Game;
