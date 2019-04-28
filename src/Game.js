import React from "react";

import styled from "styled-components";
import Cards from "./components/Cards";
import Card from "./components/CardSwitcher";
import Welcome from "./components/Welcome";
import ScoreScene from "./components/Score";

import products from "./products.json";

const currentMonth = new Date().getMonth();
const PLAY_TIME = 30;

const data = products.map(product => {
  return {
    id: product.id,
    name: product.displayName,
    inSeason: product.months[currentMonth]
  };
});

const shuffledData = data.sort(() => Math.random() - 0.5);

const backgroundColor = ({ lastResponse }) => {
  switch (lastResponse) {
    case "none":
      return "#fcc023";
    case "correct":
      return "#22ce8b";
    case "incorrect":
      return "#f46363";
    default:
      return "orange";
  }
};

const Container = styled.div`
  background: ${backgroundColor};
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

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
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
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
`;

const Score = styled.h2`
  color: white;
  margin: 0;
`;

const Message = styled.h2`
  margin: 0;
`;

const FeedbackMessage = styled(Message)`
  font-size: 2.3em;
  color: white;
`;

const HeaderLayout = ({ lastResponse, score, className }) => {
  switch (lastResponse) {
    case "correct":
      return (
        <div className={className}>
          <FeedbackMessage>¡Correcto!</FeedbackMessage>
        </div>
      );
    case "incorrect":
      return (
        <div className={className}>
          <FeedbackMessage>¡Ohhh, No!</FeedbackMessage>
        </div>
      );
    default:
      return (
        <div className={className}>
          <Score>
            {score}
            <span role="img" aria-label="cherry emoji">
              🍒
            </span>
          </Score>
          <Message>¿Estoy de temporada?</Message>
        </div>
      );
  }
};

const Header = styled(HeaderLayout)`
  display: flex;
  flex: 2;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-transform: uppercase;
`;

const Timebar = styled.div`
  height: 10px;
  width: ${({ percentage }) => `${percentage}vw`}
  background: #4691f4;
`;

const MainScene = ({ lastResponse, secondsLeft, score, onResponse }) => (
  <Container lastResponse={lastResponse}>
    <Timebar percentage={(secondsLeft / PLAY_TIME) * 100} />
    <Header score={score} lastResponse={lastResponse} />
    <Deck onEnd={() => console.log("end")}>
      {shuffledData.map(({ id, name, inSeason }) => (
        <ProductCard
          key={name}
          onSwipeLeft={() => onResponse(inSeason === false)}
          onSwipeRight={() => onResponse(inSeason === true)}
        >
          <ProductImage
            src={`${process.env.PUBLIC_URL}/img/products/${id}.png`}
            alt={name}
            draggable={false}
            onDragStart={e => e.preventDefault()}
          />
          <ProductTitle>{name}</ProductTitle>
        </ProductCard>
      ))}
    </Deck>
  </Container>
);

const ClockImage = styled.img`
  height: 50%;
  animation: clock-ring 0.5s linear infinite both;
`;

class TimeupSceneLayout extends React.Component {
  componentDidMount() {
    setTimeout(this.props.nextScene, 3000);
  }

  render() {
    return (
      <div className={this.props.className}>
        <FeedbackMessage>¡Tiempo!</FeedbackMessage>
        <ClockImage src={`${process.env.PUBLIC_URL}/img/general/clock.png`} />
      </div>
    );
  }
}

const TimeupScene = styled(TimeupSceneLayout)`
  height: 100vh;
  background: #4691f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastResponse: "none",
      score: 0,
      secondsLeft: PLAY_TIME
    };
  }

  tick = () => {
    const tickDuration = 1
    if (this.state.secondsLeft <= tickDuration) {
      this.setState({ scene: "timeup" });
      this.setState({ secondsLeft: this.state.secondsLeft - tickDuration });
    } else {
      this.setState({ secondsLeft: this.state.secondsLeft - tickDuration });
      setTimeout(this.tick, 1000);
    }
  };

  startGame = () => {
    this.setState({ scene: "game", secondsLeft: PLAY_TIME });
    setTimeout(this.tick, 1000);
  };

  resetGame = () => {
    this.setState({ score: 0 }, this.startGame);
  };

  onCorrect = () => {
    this.setState({ lastResponse: "correct", score: this.state.score + 1234 });
  };

  onIncorrect = () => {
    this.setState({ lastResponse: "incorrect", score: this.state.score - 123 });
  };

  feedback = isCorrect => {
    console.log(isCorrect);
    isCorrect ? this.onCorrect() : this.onIncorrect();

    setTimeout(() => {
      this.setState({ lastResponse: "none" });
    }, 500);
  };

  render() {
    switch (this.state.scene) {
      default:
        return <Welcome onStart={this.startGame} />;
      case "game":
        return (
          <MainScene
            lastResponse={this.state.lastResponse}
            score={this.state.score}
            secondsLeft={this.state.secondsLeft}
            onResponse={this.feedback}
          />
        );
      case "timeup":
        return (
          <TimeupScene
            nextScene={() => this.setState({ scene: "game-finished" })}
          />
        );
      case "game-finished":
        return (
          <ScoreScene
            finalScore={this.state.score}
            resetGame={this.resetGame}
          />
        );
    }
  }
}

export default Game;
