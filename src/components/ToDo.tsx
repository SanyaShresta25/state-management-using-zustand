// components/Counter.tsx
'use client'

import { useEffect } from 'react'
import { useStore } from '../store'

export default function Counter() {
  const { count, inc, todos, setTodos } = useStore()

  useEffect(() => {
    fetch('https://dummyjson.com/todos')
      .then((res) => res.json())
      .then((data) => setTodos(data.todos))
  }, [setTodos])

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-6 bg-white shadow-md rounded-xl w-full max-w-xl">
      <div className="flex items-center gap-4">
        <span className="text-2xl font-bold text-gray-800">{count}</span>
        <button
          onClick={inc}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          One Up
        </button>
      </div>

      <div className="w-full mt-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-700">Fetched Todos:</h2>
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between px-4 py-2 border rounded bg-gray-50"
            >
              <span className={todo.completed ? 'line-through text-gray-400' : ''}>
                {todo.todo}
              </span>
              <span
                className={`text-xs font-semibold px-2 py-1 rounded ${
                  todo.completed ? 'bg-green-200 text-green-700' : 'bg-yellow-200 text-yellow-700'
                }`}
              >
                {todo.completed ? 'Done' : 'Pending'}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
