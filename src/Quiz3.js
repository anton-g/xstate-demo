import { useMachine } from "@xstate/react";
import { quizMachine } from "./quizMachine";

export function Quiz3() {
  const [state, send] = useMachine(quizMachine);

  return (
    <div>
      <div>
        {state.matches("intro") && "Quiz is playing intro"}
        {state.matches("idle") && "Quiz is idle"}
        {state.matches("buzzed") && "Quiz is buzzed!"}
        {state.matches("ended") && "Quiz is ended"}
      </div>
      <div style={{ marginTop: 16 }}>
        <button
          disabled={!state.can("START")}
          onClick={() => {
            send("START");
          }}
        >
          start
        </button>
        <button
          disabled={!state.can("BUZZ")}
          onClick={() => {
            send("BUZZ");
          }}
        >
          buzz
        </button>
        <button
          disabled={!state.can("INCORRECT")}
          onClick={() => {
            send("INCORRECT");
          }}
        >
          incorrect
        </button>
        <button
          disabled={!state.can("CORRECT")}
          onClick={() => {
            send("CORRECT");
          }}
        >
          correct
        </button>
      </div>
    </div>
  );
}
