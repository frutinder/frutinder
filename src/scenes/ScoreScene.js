import React from "react";
import styled from "styled-components";

import MenuContainer from "../components/MenuContainer";
import PrimaryButton from "../components/PrimaryButton";


const ScoreTitle = styled.h2`
  line-height: 1.15;
  font-weight: 900;
  font-size: 26px;
  margin-bottom: 10px;
  font-family: "Roboto", serif;
  text-transform: uppercase;
`;

const ScoreText = styled.p`
  font-family: "Roboto", serif;
  background: #ffffff;
  border-radius: 9999px;
  font-size: 38px;
  font-weight: 900;
  width: 100%;
  max-width: 250px;
  display: inline-block;
  padding: 7px 7px 6px;
  box-sizing: border-box;
  margin-top: 14px;
  margin-bottom: 51px;
`;

const ShareContainer = styled.div`
  display: grid;
  justify-items: center;
`;

const ShareText = styled.p`
  width: 60%;
  margin-top: 0;
  margin-bottom: 20px;
  font-family: "Roboto", serif;
  font-weight: 300;
`;

const ShareList = styled.div`
  margin: 0;
`;

const ShareTwitter = styled.span`
  color: #ffffff;
  text-align: center;
  width: 74px;
  display: inline-block;
  border-radius: 3px;
  font-size: 24px;
  padding: 7px 0;
  cursor: pointer;
  background-color: #00acee;
`;

const ShareLink = styled.a`
  text-decoration: none;
`;

const TwitterImage = styled.i`
  font-family: "Font Awesome 5 Brands";
  color: #ffffff;
`;

const AcknowledgeText = styled.p`
  margin-top: 14px;
  font-size: 12px;
  a {
    font-weight: 900;
  }
`;

class ScoreScene extends React.Component {
  render() {
    const { finalScore, resetGame } = this.props;
    return (
      <MenuContainer>
        <div>
          <ScoreTitle>Tu puntuación</ScoreTitle>
          <ScoreText>
            {finalScore}
            <span role="img" aria-label="cherry emoji">
              🍒
            </span>
          </ScoreText>
          <ShareContainer>
            <ShareText>Comparte tu puntuación y reta a tus amigos.</ShareText>
            <ShareList>
              <ShareTwitter>
                <ShareLink
                  href={`https://twitter.com/intent/tweet?text=He conseguido ${finalScore} puntos en Frutinder! Entra en frutinder.com y adivina qué frutas y verduras están de temporada 🍉🥒 %23frutinder`}
                >
                  <TwitterImage className="fa-twitter" />
                </ShareLink>
              </ShareTwitter>
            </ShareList>
            <PrimaryButton onClick={resetGame}>Volver a jugar</PrimaryButton>
          </ShareContainer>
          <AcknowledgeText>
            Este juego ha sido posible
            <br />
            gracias al proyecto <br />
            <a href="https://soydetemporada.es">soydetemporada.es</a>
          </AcknowledgeText>
        </div>
      </MenuContainer>
    );
  }
}

export default ScoreScene;
