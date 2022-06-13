import { createMachine } from 'xstate'
import { trackAnalytics } from './analytics'

export const quizMachine = createMachine(
  {
    id: 'buzzerMachine',
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
          CANCEL: {
            target: 'ended',
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
      ended: {
        entry: 'analytics',
      },
    },
  },
  {
    actions: {
      analytics: () => trackAnalytics('send event'),
    },
  }
)
