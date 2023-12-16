import { renderHook, act } from "@testing-library/react";
import { useCounter } from '../app/useCounter'

test('should increment counter', () => {
  const { result } = renderHook(() => useCounter(10))
  expect(result.current.count).toBe(10)

  act(() => {
    result.current.increment()
  })

  expect(result.current.count).toBe(11)
})

test('should decrement counter', () => {
  const { result } = renderHook(() => useCounter(2))

  act(() => {
    result.current.decrement()
  })

  expect(result.current.count).toBe(1)
})
