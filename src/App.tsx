import { Container, Stack } from '@chakra-ui/react';
import { NewTodo, TodoViewer } from './components';

function App() {
  return (
    <Container mt="5" mx="auto">
      <Stack spacing={4}>
        <h1>I am using a public API and I am not responsible for the content stored on its side</h1>
        <NewTodo />
        <TodoViewer />
      </Stack>
    </Container>
  );
}

export default App;
