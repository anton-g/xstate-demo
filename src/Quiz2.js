import { useState } from 'react'

export function Quiz2() {
  const [state, setState] = useState('intro')

  return (
    <main>
      <h1>Game show buzzer 2</h1>
      <div>
        <button
          disabled={state !== 'intro'}
          onClick={() => {
            setState('idle')
          }}
        >
          start
        </button>
        <button
          disabled={state !== 'idle'}
          onClick={() => {
            setState('buzzed')
          }}
        >
          buzz
        </button>
        <button
          disabled={state !== 'buzzed'}
          onClick={() => {
            setState('idle')
          }}
        >
          incorrect
        </button>
        <button
          disabled={state !== 'buzzed'}
          onClick={() => {
            setState('ended')
          }}
        >
          correct
        </button>
      </div>
      <p>
        {state === 'intro' && 'intro'}
        {state === 'idle' && 'idle'}
        {state === 'buzzed' && 'buzzed'}
        {state === 'ended' && 'ended'}
      </p>
    </main>
  )
}
