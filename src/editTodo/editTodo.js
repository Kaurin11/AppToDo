import React from 'react';

const EditTodo = (props) => {
  const [value, setValue] = useState(initialValue);

  const formik = useFormik({
    initialValues: {
      todo: '',
    },
  });

  const editTodo = (e) => {
    e.preventDefault();
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

export default EditTodo;
