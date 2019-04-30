import React from "react";
import styled from "styled-components";

import PrimaryButton from "../components/PrimaryButton";

const Container = styled.div`
  background: #fcc023 url("${`${process.env.PUBLIC_URL}/img/general/bg.png`}");
  color: #040e28;
  font-size: 16px;
  line-height: 1.2;
`;

const Wrapper = styled.div`
  display: grid;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  grid-template-rows: 1fr 60px;
  margin-left: 56px;
  margin-right: 56px;
`;

const Content = styled.div`
  text-align: center;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const Logo = styled.img`
  max-width: 250px;
  height: auto;
  width: 80%;
`;

const StartGameButton = styled(PrimaryButton)``;

const Body = styled.div``;

const Footer = styled.div`
  text-align: center;
`;
const FooterText = styled.p`
  font-size: 14px;
  padding-bottom: 30px;
  margin: 0;
  a {
    font-weight: 900;
  }
`;

class WelcomeScene extends React.Component {
  render() {
    const { onStart } = this.props;

    return (
      <Container>
        <Wrapper>
          <Content>
            <Logo src={`${process.env.PUBLIC_URL}/img/general/logo.png`} />
            <Body>
              <h2>
                ¿Es o no es
                <br />
                de temporada?
              </h2>
              <p>
                El juego que te ayuda a saber qué alimentos son de temporada.
                <br />
                ¡Haz match con la sostenibilidad!
              </p>
              <StartGameButton onClick={onStart}>Empezar</StartGameButton>
            </Body>
          </Content>
          <Footer>
            <FooterText>
              Un proyecto creado en
              <br />
              <a href="https://meleeton2019.themelee.org/">Mêléeton 2019</a>
            </FooterText>
          </Footer>
        </Wrapper>
      </Container>
    );
  }
}

export default WelcomeScene;
