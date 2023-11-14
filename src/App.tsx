import { Container, Stack } from '@chakra-ui/react';
import { NewTodo, TodoViewer } from './components';

function App() {
  return (
    <Container mt="5" mx="auto">
      <Stack spacing={4}>
        <NewTodo />
        <TodoViewer />
      </Stack>
    </Container>
  );
}

export default App;
