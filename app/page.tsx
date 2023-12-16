"use client";
import { useCounter } from './useCounter';

export default function Home() {
  const {count, increment, decrement} = useCounter(10)

  return (
    <main>
      <h1>counter: {count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </main>
  )
}
