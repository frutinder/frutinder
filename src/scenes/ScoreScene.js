import React from "react";

import styled from "styled-components";
import PrimaryButton from "../components/PrimaryButton";

const Container = styled.div`
  display: grid;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  grid-template-rows: 1fr 60px;
  background: #fcc023 url("${`${process.env.PUBLIC_URL}/img/general/bg.png`}");
  color: #040e28;
  font-size: 16px;
  line-height: 1.2;
`;

const Content = styled.div`
  text-align: center;
  padding-top: 50px;
  padding-bottom: 50px;
  margin-left: 56px;
  margin-right: 56px;
`;

const Logo = styled.div`
  margin-bottom: 56px;
`;

const LogoImage = styled.img`
  max-width: 250px;
  height: auto;
  width: 80%;
`;

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
      <Container>
        <Content>
          <Logo>
            <LogoImage src="img/general/logo.png" alt="Frutinder" />
          </Logo>
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
        </Content>
      </Container>
    );
  }
}

export default ScoreScene;
