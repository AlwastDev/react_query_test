import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTodo } from '@services/TodoService';
import { Todo } from '../types/todo';

const useDeleteTodo = (id: string) => {
  const client = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: () => deleteTodo(id),
    onSuccess: () => {
      client.setQueriesData<Todo[]>({ queryKey: ['todos'] }, (oldTodos) => {
        return [...(oldTodos?.filter((oldTodo) => oldTodo._id !== id) || [])];
      });
      client.invalidateQueries({
        queryKey: ['todos'],
        refetchType: 'none',
      });
    },
  });

  return mutate;
};

export { useDeleteTodo };


