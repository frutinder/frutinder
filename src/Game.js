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

const shuffledData = data.sort(() => Math.random() - 0.5);

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
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Deck = styled(Cards)`
  width: 100%;
  flex: 6;
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

const Score = styled.h2`
  color: white;
  margin: 0;
`

const Message = styled.h2`
  margin: 0;
`

const FeedbackMessage = styled(Message)`
  font-size: 2.3em;
`


const HeaderLayout = ({lastResponse, score, className}) => {
  switch ( lastResponse ) {
    case "correct":
      return (
        <div className={className}>
          <FeedbackMessage>¡Correcto!</FeedbackMessage>
        </div>
      )
    case "incorrect":
      return (
        <div className={className}>
          <FeedbackMessage>¡Ohhh, No!</FeedbackMessage>
        </div>
      )
    default:
      return (
        <div className={className}>
          <Score>{score}</Score>
          <Message>¿Estoy de temporada?</Message>
        </div>
      )
  }
}

const Header = styled(HeaderLayout)`
  display: flex;
  flex: 2;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-transform: uppercase;
`

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lastResponse: "none",
      score: 0
    }
  }

  onCorrect = () => {
    this.setState({lastResponse: "correct", score: this.state.score + 1234})
  }

  onIncorrect = () => {
    this.setState({lastResponse: "incorrect", score: this.state.score - 123})
  }

  feedback = (isCorrect) => {
    console.log(isCorrect);
    isCorrect ? this.onCorrect() : this.onIncorrect()

    setTimeout(() => {
      this.setState({lastResponse: 'none'})
    }, 500)
  }

  render() {
    return (
      <Container lastResponse={this.state.lastResponse}>
        <Header score={this.state.score} lastResponse={this.state.lastResponse} />
        <Deck onEnd={() => console.log("end")}>
          {shuffledData.map(({id, name, inSeason}) => (
            <ProductCard
              key={name}
              onSwipeLeft={() => this.feedback(inSeason === false)}
              onSwipeRight={() => this.feedback(inSeason === true)}
            >

              <ProductImage src={`${process.env.PUBLIC_URL}/img/products/${id}.png`} alt={name}/>
              <ProductTitle>{name}</ProductTitle>
            </ProductCard>
          ))}
        </Deck>
      </Container>
    );
  }
}

export default Game;
