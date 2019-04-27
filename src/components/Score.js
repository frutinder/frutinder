import React from "react";

import styled from "styled-components";

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
`

const Content = styled.div`
  text-align: center;
  padding-top: 50px;
  padding-bottom: 50px;
  margin-left:  56px;
  margin-right: 56px;
`

const Logo = styled.div`
  margin-bottom: 56px;
`

const LogoImage = styled.img`
  max-width: 250px;
  height: auto;
  width: 80%;
`

const ScoreTitle = styled.h2`
  line-height: 1.15;
  font-weight: 900;
  font-size: 26px;
  margin-bottom: 10px;
  font-family: "Roboto", serif;
  text-transform: uppercase;
`

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
`

const ShareContainer = styled.div`
  display: grid;
  justify-items: center;
`

const ShareText = styled.p`
  width: 60%;
  margin-top: 0;
  margin-bottom: 20px;
  font-family: "Roboto", serif;
  font-weight: 300;
`

const ShareList = styled.div`
  margin: 0;
`

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
`

const TwitterImage = styled.i`
  font-family: "Font Awesome 5 Brands";
`

class Score extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Logo>
            <LogoImage
              src="img/general/logo.png"
              alt="Frutinder"/>
          </Logo>
          <div>
            <ScoreTitle>Tu puntuación</ScoreTitle>
            <ScoreText>204498</ScoreText>
            <ShareContainer>
              <ShareText>Comparte tu puntuación y reta a tus amigos.</ShareText>
              <ShareList>
                <ShareTwitter><TwitterImage className="fa-twitter"></TwitterImage></ShareTwitter>
              </ShareList>
            </ShareContainer>
          </div>
        </Content>
      </Container>
    );
  }
}

export default Score;
