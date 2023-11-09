import { toggleTodoStatus } from '../services/TodoService';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useToggleTodo = (id: number, completed: boolean) => {
  const client = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: () => toggleTodoStatus(id, !completed),
    onSuccess: () => client.invalidateQueries({ queryKey: ['todos'] }),
  });

  return mutate;
};

export { useToggleTodo }
