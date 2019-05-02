import React from "react";
import styled from "styled-components";

import { FeedbackMessage } from "../components/FeedbackMessage";

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

export default TimeupScene;
