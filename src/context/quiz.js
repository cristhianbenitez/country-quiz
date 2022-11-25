import { createContext, useReducer } from 'react';

const initialState = {};

const reducer = (state, action) => {
  return state;
};

export const QuizContext = createContext;

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
