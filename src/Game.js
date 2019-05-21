import React from "react";

import WelcomeScene from "./scenes/WelcomeScene";
import MainScene from "./scenes/MainScene";
import TimeupScene from "./scenes/TimeupScene";
import ScoreScene from "./scenes/ScoreScene";

import products from "./products.json";
import "./Game.css";

const currentMonth = new Date().getMonth() - 1;
const PLAY_TIME = 30;

const data = products.map(product => {
  return {
    id: product.id,
    name: product.displayName,
    inSeason: product.months[currentMonth],
    image: product.image
  };
});

const shuffledData = data.sort(() => Math.random() - 0.5);

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
    const tickDuration = 1;
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
        return <WelcomeScene onStart={this.startGame} />;
      case "game":
        return (
          <MainScene
            lastResponse={this.state.lastResponse}
            onResponse={this.feedback}
            score={this.state.score}
            secondsLeft={this.state.secondsLeft}
            shuffledData={shuffledData}
            totalPlayTime={PLAY_TIME}
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
