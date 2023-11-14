export type TodoState = 'all' | 'open' | 'completed'

export type Todo = {
  _id: string
  todoName: string
  isComplete: boolean
}
