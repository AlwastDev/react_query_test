import { TodoState } from '../types/todo';
import { useQuery } from '@tanstack/react-query';
import { fetchTodos } from '../services/TodoService';

const useTodosQuery = (state: TodoState) => {
  return useQuery({
    queryFn: () => fetchTodos(state),
    queryKey: ['todos', state],
    staleTime: 1000 * 15,
  });
};

export { useTodosQuery }
