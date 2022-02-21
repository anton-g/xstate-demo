import { createMachine } from "xstate";

export const quizMachine = createMachine({
  id: "Quiz",
  initial: "intro",
  states: {
    intro: {
      on: {
        START: "idle",
      },
    },
    idle: {
      on: {
        BUZZ: "buzzed",
      },
    },
    buzzed: {
      on: {
        INCORRECT: "idle",
        CORRECT: "ended",
      },
    },
    ended: {
      final: true,
    },
  },
});
