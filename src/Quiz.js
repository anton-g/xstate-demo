import { useState } from 'react'

export function Quiz() {
  const [isIntro, setIsIntro] = useState(true)
  const [isIdle, setIsIdle] = useState(false)
  const [isBuzzed, setIsBuzzed] = useState(false)
  const [isEnded, setIsEnded] = useState(false)

  return (
    <div>
      <div>
        {isIntro && 'Quiz is playing intro'}
        {isIdle && 'Quiz is idle'}
        {isBuzzed && 'Quiz is buzzed!'}
        {isEnded && 'Quiz is ended'}
      </div>
      <div style={{ marginTop: 16 }}>
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
          }}
        >
          correct
        </button>
      </div>
    </div>
  )
}
