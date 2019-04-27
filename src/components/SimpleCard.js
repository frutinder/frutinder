import React, { Component } from "react";
import ReactDOM from "react-dom";
import { translate3d } from "./utils";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { initialPosition: { x: 0, y: 0 } };
    this.setInitialPosition = this.setInitialPosition.bind(this);
  }
  setInitialPosition() {
    const card = ReactDOM.findDOMNode(this);
    const initialPosition = {
      x: Math.round((this.props.containerSize.x - card.offsetWidth) / 2),
      y: Math.round((this.props.containerSize.y - card.offsetHeight) / 2)
    };
    this.setState({ initialPosition });
  }

  componentDidMount() {
    this.setInitialPosition();
    window.addEventListener("resize", this.setInitialPosition);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setInitialPosition);
  }

  renderChildren() {
    const { props } = this;
    const { active, childCount, children, index } = props;

    return React.Children.map(children, c => {
      const passedProps = {
        active: active.toString(),
        cardcount: childCount
      };
      return React.cloneElement(c, passedProps);
    });
  }

  render() {
    const { props, state } = this;
    const {
      initialPosition: { x, y }
    } = state;
    const { active, className = "inactive" } = props;
    const style = {
      ...translate3d(x, y),
      zIndex: props.index,
      ...props.style
    };

    return (
      <div
        style={style}
        className={`card ${className} ${active ? "top-card" : ""}`}
      >
        {this.renderChildren()}
      </div>
    );
  }
}

export default Card;
