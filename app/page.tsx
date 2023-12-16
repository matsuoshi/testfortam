"use client";
import { useCounter } from './useCounter';

export default function Home() {
  const {count, increment, decrement} = useCounter(10)

  return (
    <main>
      <p>counter: {count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </main>
  )
}
