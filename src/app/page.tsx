'use client';

import { useState, createContext, useContext } from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <App />
    </main>
  );
}

const CountContext1 = createContext<{
  count: number;
  setNumber: ReturnType<typeof useState<number>>[1];
}>(null);

const CountContext2 = createContext<{
  count: number;
  setNumber: ReturnType<typeof useState<number>>[1];
}>(null);

function App() {
  return (
    <div className="App">
      <CounterWrapper1 />
      <CounterWrapper2 />
    </div>
  );
}

const CounterWrapper1 = () => {
  const [number, setNumber] = useState(0);

  return (
    <CountContext1.Provider
      value={{
        count: number,
        setNumber: setNumber,
      }}
    >
      <Counter1 />
    </CountContext1.Provider>
  );
};

const Counter1 = () => {
  const countContext = useContext(CountContext1);
  return (
    <dl>
      <dt>number: {countContext.count}</dt>
      <dd>
        <button onClick={() => countContext.setNumber((d) => d + 1)}>count up</button>
      </dd>
    </dl>
  );
};

const CounterWrapper2 = () => {
  const [number, setNumber] = useState(0);
  const countContext = useContext(CountContext2);

  return (
    <CountContext2.Provider
      value={{
        count: number,
        setNumber: setNumber,
      }}
    >
      <dl>
        <dt>number: {countContext?.count}</dt>
        <dd>
          <button onClick={() => countContext?.setNumber((d) => d + 1)}>count up</button>
        </dd>
      </dl>
    </CountContext2.Provider>
  );
};
