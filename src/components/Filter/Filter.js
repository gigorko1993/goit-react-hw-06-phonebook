import { useSelector, useDispatch } from "react-redux";

import { getFilter } from "../../redux/contacts/contacts-selectors";
import actions from "../../redux/contacts/contacts-action";
import s from "./Filter.module.css";

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(actions.changeFilter(e.currentTarget.value));
  };

  return (
    <>
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          name="filter"
          type="text"
          value={filter}
          onChange={onChange}
        />
      </label>
    </>
  );
};

export default Filter;