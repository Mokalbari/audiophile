"use client"

import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(1)

  const handleDecrement = () => {
    if (count > 1) {
      setCount((count) => count - 1)
    }
  }

  const handleIncrement = () => {
    setCount((count) => count + 1)
  }

  return (
    <div className="flex w-fit items-center gap-4 bg-gray-lighter p-4 text-xs font-bold">
      <button className="text-black/50" onClick={handleDecrement}>
        -
      </button>
      <span>{count}</span>
      <button className="text-black/50" onClick={handleIncrement}>
        +
      </button>
    </div>
  )
}
