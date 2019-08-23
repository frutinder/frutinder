import React from "react";

import WelcomeScene from "./scenes/WelcomeScene";
import InstructionsScene from "./scenes/InstructionsScene";
import MainScene from "./scenes/MainScene";
import TimeupScene from "./scenes/TimeupScene";
import ScoreScene from "./scenes/ScoreScene";

import products from "./products.json";
import "./Game.css";

const currentMonth = new Date().getMonth();
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
      score: 0
    };
  }

  timeup = () => {
    this.setState({ scene: "timeup" });
  };

  startGame = () => {
    this.setState({ scene: "game" });
    setTimeout(this.timeup, PLAY_TIME * 1000);
  };

  showInstructions = () => {
    this.setState({ scene: "instructions" });
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
    isCorrect ? this.onCorrect() : this.onIncorrect();

    setTimeout(() => {
      this.setState({ lastResponse: "none" });
    }, 500);
  };

  render() {
    switch (this.state.scene) {
      default:
        return <WelcomeScene onStart={this.startGame} onInstructions={this.showInstructions} />;
      case "game":
        return (
          <MainScene
            lastResponse={this.state.lastResponse}
            onResponse={this.feedback}
            score={this.state.score}
            shuffledData={shuffledData}
            totalPlayTime={PLAY_TIME}
          />
        );
      case "instructions":
        return <InstructionsScene onStart={this.startGame} />;
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
