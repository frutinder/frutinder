import React from "react";
import styled from "styled-components";

import MenuContainer from "../components/MenuContainer";
import PrimaryButton from "../components/PrimaryButton";

const StartGameButton = styled(PrimaryButton)``;

export default ({ onStart }) => (
  <MenuContainer>
    <h2>
      ¿Cómo se juega?
    </h2>
    <p>
      Irás viendo tarjetas con una imagen y el nombre de una fruta o verdura.
    </p>
    <p>
      Arrastra la tarjeta a la <strong>derecha</strong> si piensas que esa fruta o verdura <strong>está de temporada</strong>.
    </p>
    <p>
      Arrastra la tarjeta a la <strong>izquierda</strong> si piensas que <strong>no está de temporada</strong>.
    </p>
    <StartGameButton onClick={onStart}>Empezar</StartGameButton>
  </MenuContainer>
)
