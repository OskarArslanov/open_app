'use client';

import OAButton from '@/features/controls/OAButton';
import OAForm from '@/features/controls/OAForm';
import OAInput from '@/features/controls/OAInput';
import Checkbox from '@mui/material/Checkbox';
import { AnimateContainer } from '@/widgets/Animations';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const filters = [
  {
    id: 0,
    name: 'All',
    slug: 'all',
  },
  {
    id: 1,
    name: 'Active',
    slug: 'active',
  },
  {
    id: 2,
    name: 'Completed',
    slug: 'completed',
  },
];
const TodoWidgets = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const TodoWidgetFilter = styled.ul({
  display: 'flex',
  gap: '5px',
  '& > button': {
    height: '20px',
    textAlign: 'center',
    border: '1px solid var(--color-purple_dark)',
    borderRadius: '5px',
    cursor: 'pointer',
  },
});

const TodoList = styled.ul({
  padding: 0,
  margin: 0,
});

const TodoItem = styled.li({
  display: 'flex',
  alignItems: 'center',
});

const Container = styled(AnimateContainer)({
  border: '1px solid var(--color-purple_dark)',
  padding: '10px',
  borderRadius: '5px',
  maxWidth: '768px',
});
interface TodoType {
  id: number;
  name: string;
  done: boolean;
}
const Todo = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<TodoType[]>([]);
  const [name, setName] = useState<string>('');
  const params = useSearchParams();
  const currentFilter = params?.get('filter');

  const handleSubmit = (e: any) => {
    const newTodo: TodoType = {
      name: e.name,
      done: false,
      id: todos.length,
    };
    const updatedTodoes = [...todos, newTodo];
    setTodos(updatedTodoes);
    setName('');
  };

  useEffect(() => {
    let updatedTodos = [...todos];
    if (currentFilter === 'active') {
      updatedTodos = updatedTodos.filter((item) => !item.done);
    }
    if (currentFilter === 'completed') {
      updatedTodos = updatedTodos.filter((item) => item.done);
    }
    setFilteredTodos(updatedTodos);
  }, [JSON.stringify(todos), currentFilter]);

  const handleDone = (todo: TodoType, state: boolean) => {
    const updatedTodos = [...todos].map((item) =>
      item.id === todo.id ? { ...item, done: state } : item,
    );
    setTodos(updatedTodos);
  };

  const uncheckedTodos = todos.filter((item) => item.done).length;
  return (
    <Container>
      <OAForm onSubmit={handleSubmit} style={{ flexDirection: 'row' }}>
        <OAInput type="text" name="name" value={name} onChange={setName} />
        <OAButton type="submit" style={{ height: '100%' }}>
          Create
        </OAButton>
      </OAForm>
      <TodoList>
        {filteredTodos.map((item) => (
          <TodoItem key={item.id}>
            <Checkbox
              checked={item.done}
              onChange={(e, state) => handleDone(item, state)}
              data-testid={`checkbox-${item.name}`}
            />
            {item.name}
          </TodoItem>
        ))}
      </TodoList>
      <TodoWidgets>
        <p>{uncheckedTodos} items left</p>
        <TodoWidgetFilter>
          {filters.map((item) => (
            <OAButton
              key={item.id}
              variant="outlined"
              size="small"
              query={{ job: 'todo', filter: item.slug }}
              id={item.slug}
            >
              {item.name}
            </OAButton>
          ))}
        </TodoWidgetFilter>
        {!!todos.length ? (
          <OAButton size="small" onClick={() => setTodos([])} id="clear">
            Clear
          </OAButton>
        ) : (
          <p>Clear completed</p>
        )}
      </TodoWidgets>
    </Container>
  );
};

export default Todo;
