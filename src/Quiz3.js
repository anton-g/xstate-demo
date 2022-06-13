import { useMachine } from '@xstate/react'
import { quizMachine } from './quizMachine'

export function Quiz3() {
  const [state, send] = useMachine(quizMachine)

  return (
    <main>
      <h1>Game show buzzer 3</h1>
      <div style={{ marginTop: 16 }}>
        <button
          disabled={!state.can('START')}
          onClick={() => {
            send('START')
          }}
        >
          start
        </button>
        <button
          disabled={!state.can('BUZZ')}
          onClick={() => {
            send('BUZZ')
          }}
        >
          buzz
        </button>
        <button
          disabled={!state.can('INCORRECT')}
          onClick={() => {
            send('INCORRECT')
          }}
        >
          incorrect
        </button>
        <button
          disabled={!state.can('CORRECT')}
          onClick={() => {
            send('CORRECT')
          }}
        >
          correct
        </button>
      </div>
      <p>
        {state.matches('intro') && 'intro'}
        {state.matches('idle') && 'idle'}
        {state.matches('buzzed') && 'buzzed!'}
        {state.matches('ended') && 'ended'}
      </p>
    </main>
  )
}
