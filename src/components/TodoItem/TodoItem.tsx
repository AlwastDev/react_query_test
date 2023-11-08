import { Checkbox, IconButton, ListItem, Stack } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { FC } from 'react';
import { TodoItemProps } from './types';
import { useDeleteTodo, useToggleTodo } from '../../hooks';

const TodoItem: FC<TodoItemProps> = ({ completed, id, title }) => {
  const toggle = useToggleTodo(id, completed);
  const remove = useDeleteTodo(id);

  return (
    <ListItem >
      <Stack spacing={4} direction='row' margin="0 0 20px 0">
        <div onClick={() => toggle()}>
          <Checkbox width="200px" isChecked={completed}>{title}</Checkbox>
        </div>
        <div>
          <IconButton
            icon={<DeleteIcon />}
            colorScheme="red"
            size="sm"
            aria-label="Delete"
            onClick={() => remove()}
          />
        </div>
      </Stack>
    </ListItem>
  );
};

export { TodoItem };
