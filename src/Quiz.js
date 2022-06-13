import { useState } from 'react'
import { trackAnalytics } from './analytics'

export function Quiz() {
  const [isIntro, setIsIntro] = useState(true)
  const [isIdle, setIsIdle] = useState(false)
  const [isBuzzed, setIsBuzzed] = useState(false)
  const [isEnded, setIsEnded] = useState(false)

  return (
    <main>
      <h1>Game show buzzer 1</h1>
      <div>
        <button
          disabled={!isIntro}
          onClick={() => {
            setIsIdle(true)
            setIsIntro(false)
          }}
        >
          start
        </button>
        <button
          disabled={!isIdle}
          onClick={() => {
            setIsIdle(false)
            setIsBuzzed(true)
          }}
        >
          buzz
        </button>
        <button
          disabled={!isBuzzed}
          onClick={() => {
            setIsBuzzed(false)
            setIsIdle(true)
          }}
        >
          incorrect
        </button>
        <button
          disabled={!isBuzzed}
          onClick={() => {
            setIsBuzzed(false)
            setIsEnded(true)
            trackAnalytics('game ended')
          }}
        >
          correct
        </button>
      </div>
      <p>
        {isIntro && 'intro'}
        {isIdle && 'idle'}
        {isBuzzed && 'buzzed'}
        {isEnded && 'ended'}
      </p>
    </main>
  )
}
