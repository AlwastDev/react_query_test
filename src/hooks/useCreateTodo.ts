import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTodo } from '../services/TodoService';
import { Todo } from '../types/todo';

const useCreateTodo = () => {
  const client = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (title: string) => createTodo(title),
    onSuccess: (newTodo) => {
      client.setQueriesData<Todo[]>(['todos', 'all'], (oldTodos) => {
        return [...(oldTodos || []), newTodo];
      });
      client.invalidateQueries({
        queryKey: ['todos', 'all'],
        refetchType: 'none',
      });
    },
  });

  return { createTodo: (title: string) => mutate(title) };
}


export { useCreateTodo };
