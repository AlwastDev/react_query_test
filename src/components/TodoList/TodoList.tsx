import React from 'react';
import { List, Spinner } from '@chakra-ui/react';
import { TodoListProps } from './types';
import { TodoItem } from '../TodoItem/TodoItem';
import { useTodosQuery } from '../../hooks';

const TodoList = ({ state }: TodoListProps) => {
  const { data, isLoading, isSuccess } = useTodosQuery(state);

  if (isLoading)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );

  return (
    <List>
      {isSuccess && data.map((todo) => <TodoItem key={todo.id} {...todo} />)}
    </List>
  );
};


export { TodoList };
