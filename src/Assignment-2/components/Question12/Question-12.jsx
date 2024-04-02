/**
 * a simple voting application using the useReducer hook.
Set up a reducer to manage the votes for different options.
Create buttons representing voting options.
Use the useReducer hook to access the votes state and dispatch actions.
Allow users to vote for their preferred options.
Display the current vote count for each option.


 */
import { useReducer } from "react";

const initialValue = {
  firstCandidate: 0,
  secondCandidate: 0,
};

const reducer = (state, action) => {
  switch (action) {
    case "ADDTO1CANDIDATE":
      return { ...state, firstCandidate: state.firstCandidate + 1 };
    case "ADDTO2CANDIDATE":
      return { ...state, secondCandidate: state.secondCandidate + 1 };
    default:
      return state;
  }
};

const Vote = () => {
  const [vote, dispatch] = useReducer(reducer, initialValue);

  return (
    <>
      <h2>First Candidate Vote: {vote.firstCandidate}</h2>
      <h2>Second Candidate Vote: {vote.secondCandidate}</h2>

      <button
        onClick={() => {
          dispatch("ADDTO1CANDIDATE");
        }}
      >
        Vote Candidate 1
      </button>
      <button
        onClick={() => {
          dispatch("ADDTO2CANDIDATE");
        }}
      >
        Vote Candidate 2
      </button>
      {vote.firstCandidate > vote.secondCandidate ? (
        <h4 style={{ color: "green" }}>Candidate 1 is Winning</h4>
      ) : (
        <h4 style={{ color: "green" }}>Candidate 2 is Winning</h4>
      )}
    </>
  );
};

export default Vote;
