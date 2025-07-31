import { Field, Form, Formik, type FormikHelpers } from "formik";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";

type TypeForm = {
  newTask: string;
};

function AddTask() {
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

  return (
    <Formik
      initialValues={{
        newTask: "",
      }}
      onSubmit={handlerSubmit}
    >
      <Form>
        <label htmlFor="newTask">New Task: </label>
        <Field placeholder="new task" name="newTask" id="newTask" />
        <button type="submit">Add</button>
      </Form>
    </Formik>
  );
}

export default AddTask;
