import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
const textStyle = {
  fontFamily: '"Comic Sans MS", cursive, sans-serif',
  fontSize: "72px",
  textAlign: "center",
  color: "white",
  padding: "0 40px",
  textShadow: "3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
};
const Joke = ({ text }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const scale = spring({
    fps,
    frame,
    config: {
      damping: 100,
      stiffness: 200
    }
  });
  const opacity = interpolate(
    frame,
    [0, 30, durationInFrames - 30, durationInFrames],
    [0, 1, 1, 0]
  );
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      style: {
        ...textStyle,
        opacity,
        transform: `scale(${scale})`
      },
      children: text
    },
    void 0,
    false,
    {
      fileName: "<stdin>",
      lineNumber: 33,
      columnNumber: 9
    }
  );
};
export {
  Joke
};
