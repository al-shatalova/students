import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './useInputState';

const TodoForm = ({ saveTodo, setSearch }) => {
  const { value, reset, onChange } = useInputState();

  return (
      <div
          style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
          }}
      >
        <form
              onSubmit={event => {
                  event.preventDefault();

                  saveTodo(value);
                  reset();
              }}
        >
            <TextField
              variant="outlined"
              placeholder="Add todo"
              margin="normal"
              onChange={onChange}
              value={value}
            />
        </form>
        <button onClick={e => setSearch(value)}>
          search!
        </button>
      </div>
  );
};

export default TodoForm;
