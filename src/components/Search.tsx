import { useDispatch, useSelector } from "react-redux";
import { searchTask } from "../redux/actions";
import type { ChangeEvent } from "react";
import type { RootStateType } from "../redux/store";

function Search() {
  const searchValue = useSelector(
    (state: RootStateType) => state.filters.searchValue
  );

  const dispatch = useDispatch();

  const handleSearch = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    dispatch(searchTask(target.value));
  };

  return (
    <label htmlFor="">
      Search: <input type="text" value={searchValue} onChange={handleSearch} />
    </label>
  );
}

export default Search;
