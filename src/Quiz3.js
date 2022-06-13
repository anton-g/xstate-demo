import { useMachine } from '@xstate/react'
import { quizMachine } from './quizMachine'

export function Quiz3() {
  const [state, send] = useMachine(quizMachine)

  return (
    <main>
      <h1>Game show buzzer 3</h1>
      <div>
        <button onClick={() => send('START')} disabled={!state.can('START')}>
          start
        </button>
        <button onClick={() => send('BUZZ')} disabled={!state.can('BUZZ')}>
          buzz
        </button>
        <button
          onClick={() => send('INCORRECT')}
          disabled={!state.can('INCORRECT')}
        >
          incorrect
        </button>
        <button
          onClick={() => send('CORRECT')}
          disabled={!state.can('CORRECT')}
        >
          correct
        </button>
      </div>
      <p>{state.value}</p>
    </main>
  )
}
