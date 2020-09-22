import React, { useState } from 'react';

import { useFormik } from 'formik';

const AddTodos = (props) => {
  const initialValue = { id: null, text: '' };
  const [value, setValue] = useState(initialValue);

  const formik = useFormik({
    initialValues: {
      todo: '',
    },
  });

  const addTodo = (e) => {
    e.preventDefault();
    //if (!value) return;
    props.addTodo(formik.values.todo);
    console.log(formik.values.todo);
    setValue('');
  };

  return (
    <div>
      <form>
        <label htmlFor="todo"></label>
        <input
          id="todo"
          name="todo"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.todo}
        />

        <button onClick={addTodo}>add todo</button>
      </form>
    </div>
  );
};

export default AddTodos;
