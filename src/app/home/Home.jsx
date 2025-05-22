import React, { useState, useReducer } from 'react';
const initialState = 0;
const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const RESET = 'reset';
const reducer = (state, action) => {
	switch (action.type) {
		case INCREMENT:
			return state + 1;
		case DECREMENT:
			return state - 1;
		case RESET:
			return 0;
		default:
			return state;
	}
};

function Home() {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<div>
			<h2>{state}</h2>
			<button onClick={() => dispatch({ type: INCREMENT })}>Increment</button>
			<button onClick={() => dispatch({ type: DECREMENT })}>Decrement</button>
			<button onClick={() => dispatch({ type: RESET })}>Reset</button>
		</div>
	);
}

export default Home;
