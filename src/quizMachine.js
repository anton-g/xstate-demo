import { createMachine } from 'xstate'

export const quizMachine = createMachine({
  id: 'buzzer',
  initial: 'intro',
  states: {
    intro: {
      on: {
        START: {
          target: 'idle',
        },
      },
    },
    idle: {
      on: {
        BUZZ: {
          target: 'buzzed',
        },
      },
    },
    buzzed: {
      on: {
        INCORRECT: {
          target: 'idle',
        },
        CORRECT: {
          target: 'ended',
        },
      },
    },
    ended: {},
  },
})
