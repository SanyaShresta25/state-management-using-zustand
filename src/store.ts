
import { create } from 'zustand'

type Todo = {
  id: number
  todo: string
  completed: boolean
  userId: number
}

type Store = {
  count: number
  inc: () => void
  todos: Todo[]
  setTodos: (todos: Todo[]) => void
}

export const useStore = create<Store>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
  todos: [],
  setTodos: (todos) => set({ todos }),
}))
