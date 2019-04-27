import React, { createElement } from "react";

import SimpleCard from "./SimpleCard";
import DraggableCard from "./DraggableCard";

const Card = ({ active = false, ...props }) => {
  const component = active ? DraggableCard : SimpleCard;
  return createElement(component, { active, ...props });
};

export default Card;
