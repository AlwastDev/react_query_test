import { FormEventHandler, useState } from 'react';
import { Button, Input, Stack } from '@chakra-ui/react';
import { useCreateTodo } from '@hooks/index.ts';

const NewTodo = () => {
  const [title, setTitle] = useState('');

  const { createTodo } = useCreateTodo();

  const submit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (title) {
      createTodo(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={submit}>
      <Stack direction="row">
        <Input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="new todo..."
        />
        <Button type="submit">Add todo</Button>
      </Stack>
    </form>
  );
};

export { NewTodo };
