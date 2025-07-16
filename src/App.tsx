import { Field, Form, Formik, type FormikHelpers } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask } from "./redux/actions";
import type { RootStateType } from "./redux/store";

type TypeForm = {
  newTask: string;
};

function App() {
  const tasks = useSelector((state: RootStateType) => state.tasks.items);
  const dispatch = useDispatch();

  const handlerSubmit = (
    values: { newTask: string },
    action: FormikHelpers<TypeForm>
  ) => {
    dispatch(
      addTask({ id: Date.now(), text: values.newTask, completed: false })
    );

    action.resetForm();
  };

  const handleRemove = (id: number) => {
    dispatch(removeTask(id));
  };

  return (
    <>
      <Formik
        initialValues={{
          newTask: "",
        }}
        onSubmit={handlerSubmit}
      >
        <Form>
          <label htmlFor="newTask">New Task: </label>
          <Field name="newTask" id="newTask" />
          <button type="submit">Add</button>
        </Form>
      </Formik>
      <ul>
        {tasks.map((task) => (
          <li>
            {task.text}
            <button onClick={() => handleRemove(task.id)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
