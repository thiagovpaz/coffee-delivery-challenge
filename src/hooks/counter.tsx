import React, { createContext, useContext, useState } from 'react';

type CounterProps = {};

interface CounterContextData {
  counter: number;
  incrementCounter: () => void;
  decrementCounter: () => void;
  initCounter: (x: number) => void;
}

interface CounterProviderPros {
  children: React.ReactNode;
}

const CounterContext = createContext<CounterContextData>(
  {} as CounterContextData,
);

const CounterProvider: React.FC<CounterProviderPros> = ({ children }) => {
  const [counter, setCounter] = useState(1);

  const incrementCounter = () => {
    setCounter((state) => state + 1);
  };

  const decrementCounter = () => {
    setCounter((state) => state - 1);
  };

  const initCounter = (n: number) => {
    setCounter(n);
  };

  return (
    <CounterContext.Provider
      value={{ counter, incrementCounter, decrementCounter, initCounter }}
    >
      {children}
    </CounterContext.Provider>
  );
};

const useCounter = (): CounterContextData => {
  return useContext(CounterContext);
};

export { CounterProvider, useCounter };
