import { useState } from "react";

export function Quiz2() {
  const [state, setState] = useState("intro");

  return (
    <div>
      <div>
        {state === "intro" && "Quiz is playing intro"}
        {state === "idle" && "Quiz is idle"}
        {state === "buzzed" && "Quiz is buzzed!"}
        {state === "ended" && "Quiz is ended"}
      </div>
      <div style={{ marginTop: 16 }}>
        <button
          disabled={state !== "intro"}
          onClick={() => {
            setState("idle");
          }}
        >
          start
        </button>
        <button
          disabled={state !== "idle"}
          onClick={() => {
            setState("buzzed");
          }}
        >
          buzz
        </button>
        <button
          disabled={state !== "buzzed"}
          onClick={() => {
            setState("idle");
          }}
        >
          incorrect
        </button>
        <button
          disabled={state !== "buzzed"}
          onClick={() => {
            setState("ended");
          }}
        >
          correct
        </button>
      </div>
    </div>
  );
}
