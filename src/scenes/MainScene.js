import React from "react";

import styled from "styled-components";
import Cards from "../components/Cards";
import Card from "../components/CardSwitcher";
import { FeedbackMessage, Message } from "../components/FeedbackMessage";

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

const CurrentScore = styled.h2`
  color: white;
  margin: 0;
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
          <CurrentScore>
            {score}
            <span role="img" aria-label="cherry emoji">
              🍒
            </span>
          </CurrentScore>
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

const MainScene = ({
  lastResponse,
  onResponse,
  secondsLeft,
  score,
  shuffledData,
  totalPlayTime
}) => (
  <Container lastResponse={lastResponse}>
    <Timebar percentage={(secondsLeft / totalPlayTime) * 100} />
    <Header score={score} lastResponse={lastResponse} />
    <Deck onEnd={() => console.log("end")}>
      {shuffledData.map(({ id, name, inSeason, image }) => (
        <ProductCard
          key={name}
          onSwipeLeft={() => onResponse(inSeason === false)}
          onSwipeRight={() => onResponse(inSeason === true)}
        >
          <ProductImage
            src={`data:image/png;base64,${image}`}
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

export default MainScene;
