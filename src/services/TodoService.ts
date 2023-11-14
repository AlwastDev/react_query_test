import { Todo, TodoState } from '../types/todo';

const BASE = import.meta.env.VITE_todosAPI;

export async function fetchTodos(state: TodoState = 'all'): Promise<Todo[]> {
  const queries = state === 'all' ? '' : `?completed=${state === 'completed'}`

  const res = await fetch(`${BASE}/${queries}`)

  if (!res.ok) throw new Error('Failed to fetch todos!')

  return res.json().then((data) => data.data)
}

export async function toggleTodoStatus(todoId: string, isComplete: boolean) {
  const res = await fetch(`${BASE}/${todoId}`, {
    method: 'PUT',
    body: JSON.stringify({ isComplete }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
}

export async function createTodo(todoName: string) {
  const res = await fetch(BASE, {
    method: 'POST',
    body: JSON.stringify({ todoName, isComplete: false }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
}

export async function deleteTodo(id: string) {
  const res = await fetch(`${BASE}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
}
