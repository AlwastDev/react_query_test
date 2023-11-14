import { Checkbox, IconButton, ListItem, Stack } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { FC } from 'react';
import { TodoItemProps } from './types';
import { useDeleteTodo, useToggleTodo } from '@hooks/index.ts';

const TodoItem: FC<TodoItemProps> = ({ isComplete, _id, todoName }) => {
  const toggle = useToggleTodo(_id, isComplete);
  const remove = useDeleteTodo(_id);

  return (
    <ListItem >
      <Stack spacing={200} direction='row' margin="0 0 20px 0">
        <div onClick={() => toggle()}>
          <Checkbox width="200px" isChecked={isComplete}>{todoName}</Checkbox>
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
