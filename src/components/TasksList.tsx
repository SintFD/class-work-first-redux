import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../redux/actions";
import type { RootStateType } from "../redux/store";
import { useState } from "react";

function TasksList() {
  const [isEditing, setIsEditing] = useState(false);
  const searchValue = useSelector(
    (state: RootStateType) => state.filters.searchValue
  );

  const tasks = useSelector((state: RootStateType) => state.tasks.items);

  const filteredArr =
    (!searchValue && tasks) ||
    tasks.filter((task) => task.text.toLowerCase().includes(searchValue));

  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch(removeTask(id));
  };

  const handleEdit = (id: number) => {
    dispatch(removeTask(id));
  };

  return (
    <ul>
      {filteredArr.map((task, i) => (
        <li key={i}>
          {isEditing}
          {task.text}
          <button onClick={() => handleEdit(task.id)}>Edit</button>
          <button onClick={() => handleRemove(task.id)}>X</button>
        </li>
      ))}
    </ul>
  );
}

export default TasksList;
