import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { AbsoluteFill, Series, Audio, staticFile, continueRender, delayRender } from "remotion";
import { Joke } from "./Joke.jsx";
const SETUP_DURATION = 90;
const PUNCHLINE_DURATION = 120;
const TRANSITION_DURATION = 15;
const DadJokeComposition = ({ jokes }) => {
  if (!jokes) {
    return null;
  }
  return /* @__PURE__ */ jsxDEV(AbsoluteFill, { style: { backgroundColor: "#4158D0" }, children: [
    /* @__PURE__ */ jsxDEV(Series, { children: jokes.map((joke) => /* @__PURE__ */ jsxDEV(React.Fragment, { children: [
      /* @__PURE__ */ jsxDEV(Series.Sequence, { durationInFrames: SETUP_DURATION, children: /* @__PURE__ */ jsxDEV(AbsoluteFill, { style: { justifyContent: "center", alignItems: "center" }, children: [
        /* @__PURE__ */ jsxDEV(Joke, { text: joke.setup }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 22,
          columnNumber: 33
        }),
        joke.setupAudioUrl && /* @__PURE__ */ jsxDEV(Audio, { src: joke.setupAudioUrl }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 23,
          columnNumber: 56
        })
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 21,
        columnNumber: 29
      }) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 20,
        columnNumber: 25
      }),
      /* @__PURE__ */ jsxDEV(Series.Sequence, { durationInFrames: PUNCHLINE_DURATION, name: "Punchline", children: /* @__PURE__ */ jsxDEV(AbsoluteFill, { style: { justifyContent: "center", alignItems: "center" }, children: [
        /* @__PURE__ */ jsxDEV(Joke, { text: joke.punchline }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 28,
          columnNumber: 33
        }),
        joke.punchlineAudioUrl && /* @__PURE__ */ jsxDEV(Audio, { src: joke.punchlineAudioUrl }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 29,
          columnNumber: 60
        }),
        /* @__PURE__ */ jsxDEV(Audio, { src: staticFile("laugh_track.mp3"), startFrom: 30, volume: 0.7 }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 30,
          columnNumber: 33
        }),
        /* @__PURE__ */ jsxDEV(Audio, { src: staticFile("groan.mp3"), startFrom: 45, volume: 0.7 }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 31,
          columnNumber: 33
        })
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 27,
        columnNumber: 29
      }) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 26,
        columnNumber: 25
      }),
      /* @__PURE__ */ jsxDEV(Series.Sequence, { durationInFrames: TRANSITION_DURATION }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 34,
        columnNumber: 25
      })
    ] }, joke.id, true, {
      fileName: "<stdin>",
      lineNumber: 19,
      columnNumber: 21
    })) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 17,
      columnNumber: 13
    }),
    /* @__PURE__ */ jsxDEV(Audio, { src: staticFile("background_music.mp3"), loop: true, volume: 0.15 }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 38,
      columnNumber: 13
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 16,
    columnNumber: 9
  });
};
export {
  DadJokeComposition
};
