'use client';

import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTranslations } from 'next-intl';
import OAAlert, { OAAlertType } from '@/features/OAAlert';
import OAButton from '@/features/OAButton';
import OACheckbox from '@/features/OACheckbox';
import OAInput from '@/features/OAInput';
import OAConfirmModal from '@/features/OAModal/OAConfirmModal';
import { OAAnimateContainer } from '@/widgets/OAAnimateContainer';

const TodoWidgets = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '@media screen and (max-width: 500px)': {
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'flex-start',
  },
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
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
});

const TodoItem = styled.li({
  display: 'flex',
  alignItems: 'center',
  border: '1px solid var(--color-primary)',
  borderRadius: '5px',
  justifyContent: 'space-between',
});

const Container = styled(OAAnimateContainer)({
  border: '1px solid var(--color-not_primary)',
  padding: '5px',
  borderRadius: '10px',
  maxWidth: '768px',
});
interface TodoType {
  id: number;
  name: string;
  done: boolean;
}
const Todo = () => {
  const t = useTranslations('Portfolio.todo');
  const [openDelete, setOpenDelete] = useState<TodoType>();
  const [openEdit, setOpenEdit] = useState<TodoType>();
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<TodoType[]>([]);
  const [name, setName] = useState<string>('');
  const [rename, setRename] = useState<string>('');
  const [alert, setAlert] = useState<OAAlertType>();
  const params = useSearchParams();
  const currentFilter = params?.get('filter');

  const handleDone = (todo: TodoType, state: boolean) => {
    const updatedTodos = todos.map((item) =>
      item.id === todo.id ? { ...item, done: state } : item,
    );
    setTodos(updatedTodos);
  };

  const handleEdit = () => {
    if (!rename) {
      setAlert({ type: 'error', message: 'Описание не должно быть пустым' });
      return;
    }
    const updatedTodoes = todos.map((item) =>
      item.id === openEdit?.id ? { ...item, name: rename } : item,
    );
    setTodos(updatedTodoes);
    setOpenEdit(undefined);
  };

  const handleDelete = () => {
    const updatedTodoes = todos.filter((item) => item.id !== openDelete?.id);
    setTodos(updatedTodoes);
    setOpenDelete(undefined);
  };

  const handleAddTodo = () => {
    const newTodo: TodoType = {
      name,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(todos), currentFilter]);

  const uncheckedTodos = todos.filter((item) => !item.done).length;

  const filters = [
    {
      id: 0,
      name: t('all'),
      slug: 'all',
    },
    {
      id: 1,
      name: t('active'),
      slug: 'active',
    },
    {
      id: 2,
      name: t('completed'),
      slug: 'completed',
    },
  ];

  return (
    <Container style={{ width: 'auto' }}>
      <OAAlert alert={alert} onClose={() => setAlert(undefined)} />
      <div style={{ flexDirection: 'row', display: 'flex', gap: '5px' }}>
        <OAInput
          type="text"
          name="name"
          value={name}
          onChange={setName}
          id="input"
        />
        <OAButton
          style={{ height: '100%' }}
          id="create"
          disabled={!name.length}
          onClick={handleAddTodo}
        >
          {t('create')}
        </OAButton>
      </div>
      {!!filteredTodos.length && (
        <TodoList>
          {filteredTodos.map((item) => (
            <TodoItem key={item.id}>
              <OACheckbox
                name={item.name}
                checked={item.done}
                onChange={(state) => handleDone(item, state)}
                id={`checkbox-${item.name}`}
              />
              {item.name}
              <div style={{ display: 'flex' }}>
                <OAButton
                  circled
                  variant="text"
                  onClick={() => setOpenEdit(item)}
                >
                  <BorderColorIcon />
                </OAButton>
                <OAButton
                  circled
                  variant="text"
                  onClick={() => setOpenDelete(item)}
                >
                  <DeleteIcon />
                </OAButton>
              </div>
            </TodoItem>
          ))}
        </TodoList>
      )}
      <TodoWidgets>
        <p>
          <b data-testid="items-left">{uncheckedTodos}</b> {t('left')}
        </p>
        <TodoWidgetFilter>
          {filters.map((item) => (
            <OAButton
              key={item.id}
              variant={currentFilter === item.slug ? 'filled' : 'outlined'}
              size="small"
              query={{ job: 'todo', filter: item.slug }}
              id={item.slug}
            >
              {item.name}
            </OAButton>
          ))}
        </TodoWidgetFilter>
        {todos.length ? (
          <OAButton size="small" onClick={() => setTodos([])} id="clear">
            {t('clear')}
          </OAButton>
        ) : (
          <p>{t('clearCompleted')}</p>
        )}
      </TodoWidgets>
      <OAConfirmModal
        onReject={() => setOpenDelete(undefined)}
        onConfirm={() => handleDelete()}
        state={!!openDelete}
      >
        {t('delete')} {openDelete?.name}?
      </OAConfirmModal>
      <OAConfirmModal
        onReject={() => setOpenEdit(undefined)}
        onConfirm={() => handleEdit()}
        state={!!openEdit}
      >
        <OAInput
          name="rename"
          type="text"
          onChange={setRename}
          value={openEdit?.name || rename}
        />
      </OAConfirmModal>
    </Container>
  );
};

export default Todo;
