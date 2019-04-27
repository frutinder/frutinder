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

const backgroundColor = ({lastResponse}) => {
  switch (lastResponse) {
    case 'none':
      return 'orange';
    case 'correct':
      return 'green';
    case 'incorrect':
      return 'red';
    default:
      return 'orange';
  }
}

const Container = styled.div`
  background: ${backgroundColor};
`

const Deck = styled(Cards)`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const ProductCard = styled(Card)`
  text-align: center;
  margin: 0 auto;
  background-size: cover;
  position: absolute;
  background: white;
  height: 331px;
  width: 282px;
  border-radius: 19px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.01);
  border: solid 1px #f0f2f7;
`;
  
const ProductImage = styled.img`
  margin: 0 auto;
  margin-bottom: 20px;
  height: 75%;
`;

const ProductTitle = styled.span`
  width: 87px;
  height: 37px;
  font-family: Roboto;
  font-size: 28px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #383838;
`
class Game extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      lastResponse: "none"
    }
  }

  feedback = (isCorrect) => {
    console.log(isCorrect);
    this.setState({lastResponse: isCorrect ? "correct" : "incorrect"})
    setTimeout(() => {
      this.setState({lastResponse: 'none'})
    }, 500)
  }

  render() {
    return (
      <Container lastResponse={this.state.lastResponse}>
        <Deck onEnd={() => console.log("end")}>
          {shuffledData.map(({id, name, inSeason}) => (
            <ProductCard
              key={name}
              onSwipeLeft={() => this.feedback(inSeason === false)}
              onSwipeRight={() => this.feedback(inSeason === true)}
            >
              <ProductImage src={`${process.env.PUBLIC_URL}/img/products/${id}.png`}/>
              <ProductTitle>{name}</ProductTitle>
            </ProductCard>
          ))}
        </Deck>
      </Container>
    );
  }
}

export default Game;
