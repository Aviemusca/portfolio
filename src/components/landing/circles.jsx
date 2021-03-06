import React from "react";

import { SpiralCircle, Circle } from "../common/styles/circles";

const initialStates = [
  { angle: 0, color: "#AC2CACff" },
  { angle: 60, color: "#257795ff" },
  { angle: 120, color: "#4C4CD5ff" },
  { angle: 180, color: "#AC2CACff" },
  { angle: 240, color: "#257795ff" },
  { angle: 300, color: "#4C4CD5ff" },
];
const twists = ["180deg", "360deg", "540deg", "720deg", "900deg", "1080deg"];

const spiralCircleProps = [];

initialStates.forEach((state) => {
  twists.forEach((twist) => spiralCircleProps.push({ state, twist }));
});

const SpiralCircles = () => (
  <React.Fragment>
    {spiralCircleProps.map((prop, index) => (
      <SpiralCircle
        key={index}
        initialAngle={prop.state.angle}
        twist={prop.twist}
        diameter="1.618vmin"
        color="#ffffff80"
        finalColor={prop.state.color}
        left="49.2%"
        top="47%"
      />
    ))}
  </React.Fragment>
);

const StaticCircles = () => (
  <React.Fragment>
    <Circle color="#AC2CAC10" diameter="15vw" left="80%" />
    <Circle color="#25779510" diameter="10vw" left="5%" top="75%" />
    <Circle color="#4C4CD510" diameter="5vw" left="20%" top="20%" />
    <Circle color="#4C4CD510" diameter="5vw" left="70%" top="70%" />
  </React.Fragment>
);
export { SpiralCircles, StaticCircles };
