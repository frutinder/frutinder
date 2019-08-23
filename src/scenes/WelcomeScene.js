import React from "react";
import styled from "styled-components";

import MenuContainer from "../components/MenuContainer";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

const StartGameButton = styled(PrimaryButton)``;
const InstructionsButton = styled(SecondaryButton)``;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

class WelcomeScene extends React.Component {
  render() {
    const { onStart, onInstructions } = this.props;

    return (
      <MenuContainer>
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
        <ButtonsContainer>
          <InstructionsButton onClick={onInstructions}>¿Cómo se juega?</InstructionsButton>
          <StartGameButton onClick={onStart}>Empezar</StartGameButton>
        </ButtonsContainer>
      </MenuContainer>
    );
  }
}

export default WelcomeScene;
