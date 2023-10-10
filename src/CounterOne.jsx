import { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return state + action.value

    case "decrement":
      return state + action.value
    case "reset":
      return initialState;

    default:
      break;
  }
};
const CounterOne = () => {
  const [count, dispach] = useReducer(reducer, initialState);
  const [countTwo , dispachTwo] = useReducer(reducer , initialState)
  return (
    <div>
      <h2>The number is {count}</h2>
      <h2>the secound number is {countTwo}</h2>
      <button onClick={() => dispach({ type: "Add", value: 1 })}>Add</button>
      <button onClick={() => dispach({ type: "decrement", value: -1 })}>
        Decrement
      </button>
      <button onClick={() => dispach({ type: "Add", value: 5 })}>ad5</button>

      <button onClick={() => dispachTwo({ type: "reset", value: 1 })}>
        Reset
      </button>
      <button onClick={() => dispachTwo({ type: "Add", value: 2 })}>
        Add2
      </button>
      <button onClick={() => dispachTwo({ type: "decrement", value: -2 })}>
        Decrement2
      </button>
    </div>
  );
};

export default CounterOne;
